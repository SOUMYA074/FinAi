/**
 * FinAI Cloudflare Worker
 * - Stores your Groq API key as an environment secret (never in browser)
 * - Caches financial context in Workers KV (uploaded once, reused forever)
 * - Receives only the question from the browser (~20 tokens)
 * - Builds the full prompt server-side and calls Groq
 * - Returns the AI reply
 */

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-User-ID',
};

export default {
  async fetch(request, env) {

    /* ── CORS preflight ── */
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    const url = new URL(request.url);

    /* ── POST /context  — FinAI uploads user's financial data (once per session) ── */
    if (request.method === 'POST' && url.pathname === '/context') {
      try {
        const body = await request.json();
        const uid  = request.headers.get('X-User-ID') || 'offline';

        /* Build a compact context string — only what the AI needs */
        const ctx = buildContext(body);

        /* Store in KV with 24h TTL — auto-refreshed on next login */
        await env.FINAI_KV.put(`ctx:${uid}`, ctx, { expirationTtl: 86400 });

        return json({ ok: true, tokens: estimateTokens(ctx) }, 200);
      } catch (e) {
        return json({ error: e.message }, 400);
      }
    }

    /* ── POST /ask  — receive question, fetch context, call Groq ── */
    if (request.method === 'POST' && url.pathname === '/ask') {
      try {
        const { question } = await request.json();
        if (!question || !question.trim()) return json({ error: 'No question provided' }, 400);

        const uid = request.headers.get('X-User-ID') || 'offline';

        /* Load stored context (or fallback to generic advisor) */
        const ctx = await env.FINAI_KV.get(`ctx:${uid}`) || 'No financial data uploaded yet.';

        /* Build system prompt — context lives here on the server */
        const system = `You are FinAI, a personal finance advisor for India.
Answer in 3-4 sentences. Use ₹ for currency. Be specific and actionable.
This is educational guidance, not SEBI-registered financial advice.

User financial context:
${ctx}`;

        /* Call Groq — key stored as Worker secret, never sent to browser */
        const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${env.GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              { role: 'system', content: system },
              { role: 'user',   content: question },
            ],
            max_tokens: 400,
            temperature: 0.7,
          }),
        });

        const data = await groqRes.json();

        if (!groqRes.ok) {
          return json({ error: data.error?.message || 'Groq API error', status: groqRes.status }, 502);
        }

        const reply = data.choices?.[0]?.message?.content || '';
        if (!reply) return json({ error: 'Empty response from AI' }, 502);

        return json({ reply }, 200);

      } catch (e) {
        return json({ error: e.message }, 500);
      }
    }

    /* ── GET /health  — quick test endpoint ── */
    if (url.pathname === '/health') {
      return json({ ok: true, message: 'FinAI Worker is running' }, 200);
    }

    return json({ error: 'Not found' }, 404);
  },
};

/* ── Helpers ── */

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

function estimateTokens(text) {
  return Math.ceil(text.length / 4);
}

function buildContext(body) {
  const { txns = [], portfolio = [], curRisk = 'moderate', budgets = {} } = body;

  /* Income / expenses this month */
  const inc = txns.filter(t => t.type === 'income').reduce((a, t) => a + t.amt, 0);
  const exp = txns.filter(t => t.type === 'expense').reduce((a, t) => a + t.amt, 0);
  const sav = inc - exp;

  /* Top spending categories */
  const cats = {};
  txns.filter(t => t.type === 'expense').forEach(t => {
    cats[t.cat] = (cats[t.cat] || 0) + t.amt;
  });
  const topCats = Object.entries(cats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([k, v]) => `${k}:₹${Math.round(v)}`)
    .join(', ');

  /* Impulse spending */
  const impulse = txns.filter(t => t.mood === 'impulsive' || t.mood === 'regret');
  const impulseAmt = impulse.reduce((a, t) => a + t.amt, 0);

  /* Portfolio */
  const portVal  = portfolio.reduce((a, h) => a + h.qty * h.cur, 0);
  const portPL   = portfolio.reduce((a, h) => a + (h.cur - h.buy) * h.qty, 0);
  const holdings = portfolio
    .slice(0, 5)
    .map(h => `${h.name}(${h.type},₹${h.cur},${(((h.cur-h.buy)/h.buy)*100).toFixed(1)}%)`)
    .join('; ');

  /* Health score (simple calc) */
  const savRate   = inc > 0 ? Math.min(1, sav / inc) : 0;
  const allExp    = txns.filter(t => t.type === 'expense');
  const impRatio  = allExp.length > 0 ? 1 - impulse.length / allExp.length : 1;
  const score     = Math.round(savRate * 35 + impRatio * 25 + 20 + Math.min(20, portfolio.length * 4));

  /* Recent transactions (last 5) */
  const recent = txns.slice(0, 5)
    .map(t => `${t.type === 'income' ? '+' : '-'}₹${t.amt} ${t.desc} (${t.cat})`)
    .join('; ');

  return `Income:₹${inc} | Expenses:₹${exp} | Savings:₹${sav} | Risk:${curRisk} | Score:${score}/100
Top spending: ${topCats || 'none'}
Impulse/regret spending: ₹${Math.round(impulseAmt)} across ${impulse.length} transactions
Portfolio value:₹${Math.round(portVal)} | P&L:₹${Math.round(portPL)}
Holdings: ${holdings || 'none'}
Recent: ${recent || 'none'}`;
}
