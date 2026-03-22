# 🚀 FinAI — Personal Finance OS

> A privacy-first, AI-powered personal finance system that runs entirely in your browser.  
Track expenses, analyze behavior, plan investments, and get intelligent financial guidance — all in one place.

🌐 **Live Demo:** https://soumya074.github.io/FinAi  
📦 **Repository:** https://github.com/SOUMYA074/FinAi  

---

## 🧠 Overview

**FinAI** is a complete personal finance dashboard built as a **single-file application (`index.html`)** — no backend, no frameworks, no build tools.

Just open it → it works.

It combines:
- 📊 Expense tracking  
- 📈 Portfolio management  
- 🧠 AI-powered financial insights  
- 🔒 Privacy-first local + optional cloud sync  

---

## ✨ Core Features

### 📊 Smart Financial Dashboard
- Income, expenses, savings, and portfolio overview
- Financial Health Score (0–100)
- Spending heatmap (GitHub-style calendar)
- Salary-cycle based progress tracking
- AI-generated financial personality

---

### 💸 Expense Tracking with Behavior Insights
- Add income/expenses with categories
- Mood tagging:
  - Planned / Impulsive / Necessary / Regret / Happy
- Full transaction history
- AI analysis of spending habits

---

### 📈 Portfolio Tracker
- Track:
  - Stocks, Mutual Funds, ETFs, SIPs, Bonds, Gold
- Real-time profit/loss tracking
- Price history visualization (Chart.js)
- Manual price update system

---

### 🧭 Investment Planning
- Risk profiles:
  - Conservative / Moderate / Aggressive / Ultra
- Asset allocation suggestions
- AI-generated investment strategies
- Personalized fund recommendations

---

### 💰 SIP Calculator
- Interactive compound interest calculator
- Real-time chart visualization
- AI suggests optimal SIP amount

---

### 🧠 AI Financial Advisor
- Chat-based assistant using your real data
- Context-aware responses (salary-cycle aware)
- Smart caching (same question = free reuse)

---

### 📊 Financial Health Score

Score (0–100) based on:
- Savings rate
- Impulse control
- Investment activity
- Base consistency

---

### 🔄 Firebase Sync (Optional)
- Google Authentication
- Real-time data sync across devices
- Works offline with localStorage fallback

---

### 🔒 Privacy-First Design
- Works fully offline
- Data stored locally by default
- Optional cloud sync via your Firebase

---

## 🤖 AI Providers (7 Supported)

| Provider | Free Tier | Speed | Notes |
|----------|----------|------|------|
| FinAI Worker ⭐ | Yes | ⚡ Fastest | Secure + optimized |
| Groq | Yes | ⚡⚡ Very Fast | Llama 3.3 70B |
| OpenRouter | Yes | ⚡ Fast | 50+ models |
| Google Gemini | Yes | ⚡ Fast | gemini-2.0-flash-lite |
| GitHub Models | Limited | ⚡ Medium | GPT-4o mini |
| Ollama (Local) | Unlimited | Depends | Runs locally |
| Anthropic Claude | Paid | ⚡ Fast | High quality |

---

## ☁️ FinAI Worker (Cloudflare) — Smart AI Layer

FinAI includes an optional **Cloudflare Worker backend** to solve real-world AI limitations.

### 🚨 Problem It Solves
- Large prompts exceed API limits  
- API keys exposed in frontend  
- High API costs from repeated queries  
- Rate limits for free-tier users  

---

### ⚡ What the Worker Does

- 🔒 Securely stores API keys (server-side)
- 📦 Handles large context requests
- 🧠 Caches responses (Cloudflare KV)
- ⚡ Reduces API usage and cost
- 🔁 Returns instant responses for repeated queries

---

### 🧠 Smart Context Injection

FinAI sends:
- transaction data  
- salary cycle info  
- spending behavior  

Worker stores this in **Cloudflare KV (24h TTL)**  
→ reused across requests

---

### 🔗 API Endpoints

| Endpoint | Purpose |
|----------|--------|
| `POST /ask` | Get AI response |
| `POST /context` | Store user financial context |

---

### ⚙️ Configuration

- Worker URL:
```
https://finai-worker.finai.workers.dev
```

- KV Namespace:
```
6090b8b49a1545f2b1b1332cdc0aaee0
```

- Secret:
```
GROQ_API_KEY
```

---

### 🧩 Why This Matters

- 🏗 Scalable architecture  
- 🔐 Secure API usage  
- 💰 Cost-efficient  
- ⚡ Faster performance  

---

## 📁 Project Structure

```
FinAi/
├── finai-worker/   # Cloudflare Worker
├── index.html      # Main app (single file)
├── logo.svg
└── README.md
```

---

## 🧩 Architecture

- Frontend → Single-file app (`index.html`)
- Backend (optional) → Cloudflare Worker
- Database → Firebase Firestore
- Cache Layer → Cloudflare KV

---

## 🚀 Getting Started

### Run Locally
```bash
git clone https://github.com/SOUMYA074/FinAi.git
cd FinAi
```

Run it locally using:
```
npx serve .
```

---

### Deploy (GitHub Pages)
1. Go to **Settings → Pages**
2. Select **main branch**
3. Your site will be live

---

## 🔥 AI Setup

### Groq (Recommended)
1. Go to https://console.groq.com  
2. Create API key  
3. Paste in **AI Key tab**

---

## 💾 Data Storage

| Data | Storage |
|------|--------|
| Transactions | Firestore + localStorage |
| Portfolio | Firestore + localStorage |
| AI Cache | Firestore + localStorage |
| AI Keys | Firestore + localStorage |
| Theme | localStorage |
| Risk Profile | Firestore + localStorage |

---

## 📊 Health Score Formula

- Savings Rate → max 35  
- Impulse Control → max 25  
- Base Score → 20  
- Investment Activity → max 20  

---

## ⚠️ Limitations

- Gemini free quota may exhaust quickly  
- GitHub Models has daily limits  
- Ollama requires local setup  
- Firestore rules are in test mode  

---

## 🛠 Tech Stack

- **Frontend:** Vanilla JavaScript  
- **UI:** HTML5, CSS3  
- **Charts:** Chart.js  
- **Auth & DB:** Firebase  
- **AI:** Multi-provider architecture  
- **Hosting:** GitHub Pages  

---

## 🎯 What Makes FinAI Unique

- 🧩 Single-file architecture  
- 🧠 AI aware of salary cycle  
- 📊 Behavioral finance tracking  
- 🔒 Privacy-first design  
- ☁️ Cloudflare Worker optimization  

---

## 👨‍💻 Developer

**Soumya Ranjan Sahoo**  
- GitHub: https://github.com/SOUMYA074  
- LinkedIn: https://www.linkedin.com/in/soumyaranjan-sahoo-8b4978229  

---

## ⚖️ Disclaimer

This project is for educational and personal finance tracking purposes only.  
It does not provide SEBI-registered financial advice.

---

## 📄 License

MIT License