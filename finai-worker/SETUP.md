# FinAI Worker — Setup (inside your FinAi repo)

Your repo structure:
  FinAi/
  ├── index.html          ← your app
  └── finai-worker/       ← this folder
      ├── worker.js
      ├── wrangler.toml
      └── .gitignore

GitHub Pages only serves index.html — it ignores finai-worker/ completely.
Cloudflare deploys from this folder separately.

## Deploy steps

### 1. Install Wrangler (one time only)
  npm install -g wrangler
  wrangler login

### 2. CD into this folder
  cd finai-worker

### 3. Create KV namespace
  wrangler kv:namespace create "FINAI_KV"
  → copy the id from output → paste into wrangler.toml replacing PASTE_YOUR_KV_NAMESPACE_ID_HERE

### 4. Set your Groq key as a secret (never stored in files)
  wrangler secret put GROQ_API_KEY
  → paste your gsk_... key when prompted

### 5. Deploy
  wrangler deploy
  → you get: https://finai-worker.YOUR_NAME.workers.dev

### 6. Paste that URL into index.html
  Find this line near the top of the script:
    const WORKER_URL='';
  Change to:
    const WORKER_URL='https://finai-worker.YOUR_NAME.workers.dev';

### 7. Push everything to GitHub
  git add .
  git commit -m "add cloudflare worker + update WORKER_URL"
  git push

Done! AI now works from any device with zero token bloat.
