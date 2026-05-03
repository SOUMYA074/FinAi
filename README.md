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
- 📊 Expense tracking with smart auto-categorisation  
- 📈 Portfolio management & investment planning  
- 🧠 AI-powered financial insights (7 providers)  
- 📩 Bank SMS parsing — auto-detect transactions  
- 💰 Daily spending allowance & budget tracking  
- 📅 Bill reminders with due date alerts  
- 🔒 Privacy-first local + optional cloud sync  

---

## ✨ What's New (v5)

### 🐛 Critical Bug Fixes
| Bug | Fix |
|-----|-----|
| Salary doubling across months (₹8K+₹8K=₹16K) | Added month-based filtering to `getInc()`/`getExp()` |
| AI giving stale cached answers | Cache keys now include data fingerprint |
| Heatmap stuck on current month | Added ◀/▶ month navigation |

### 🚀 10 New Features
| # | Feature | What It Does |
|---|---------|-------------|
| 📩 | **Bank SMS Parser** | Paste UPI/bank SMS → auto-extract amount, merchant & category |
| 💰 | **Daily Allowance** | Shows how much you can safely spend today |
| 📊 | **Budget Tracker** | Set monthly limits per category with progress bars |
| 📅 | **Bill Reminders** | Track recurring bills with due date alerts + one-click pay |
| 🤖 | **Auto-Categorisation** | 150+ Indian brand keywords auto-select categories |
| 📅 | **Date Picker** | Backdate forgotten expenses to any past date |
| 🔥 | **Streak Tracker** | Gamification — track consecutive logging days |
| ⚡ | **Quick Add** | One-tap buttons for your most frequent expenses |
| 📈 | **Spending Trend** | 6-month income vs expenses line chart |
| 📧 | **Email Report** | Monthly summary sent to your email client |

---

## ✨ Core Features

### 📊 Smart Financial Dashboard
- Income, expenses, savings, and portfolio overview
- Financial Health Score (0–100)
- **Daily spending allowance** — "₹571 you can spend today"
- **Budget progress bars** per category with alerts
- **Streak tracker** with emoji progression (🌱→💪→⭐→🔥→🌟)
- **Quick-add buttons** for frequent expenses
- Spending heatmap (GitHub-style calendar) with month navigation
- Salary-cycle based progress tracking
- AI-generated financial personality

---

### 📩 Bank SMS Transaction Parser
Paste any bank/UPI notification → FinAI auto-extracts:
- **Amount** — supports INR, Rs., ₹ formats
- **Merchant** — extracts from "at", "to", "UPI-" patterns
- **Category** — auto-matched using 150+ keyword database
- **Credit/Debit** — detects refunds, cashbacks, deposits

Supports SMS formats from: **SBI, HDFC, ICICI, Axis, Kotak, Paytm, PhonePe, GPay**

```
Example: "Rs.350 debited from A/c XX1234 for UPI-ZOMATO"
→ Amount: ₹350 | Merchant: ZOMATO | Category: Food & Dining
```

---

### 🤖 Smart Auto-Categorisation

**150+ Indian brand keywords** covering 8 categories:

| Category | Sample Keywords |
|----------|---------------|
| 🍕 Food & Dining | Zomato, Swiggy, Dominos, BigBasket, Blinkit, Zepto, Starbucks |
| 🚗 Transport | Uber, Ola, Rapido, Metro, Petrol, IRCTC, MakeMyTrip |
| 🛍️ Shopping | Amazon, Flipkart, Myntra, Ajio, Meesho, Nykaa, Croma |
| 🏥 Health | Apollo, 1mg, Netmeds, Practo, Gym, Cult, Yoga |
| 🎬 Entertainment | Netflix, Hotstar, Spotify, PVR, INOX, Steam, YouTube Premium |
| 💡 Bills | Jio, Airtel, Vi, Rent, EMI, Electricity, LPG, Recharge |
| 📚 Education | Udemy, Coursera, Unacademy, BYJU's, Upgrad, Skillshare |
| 💹 Investment | Zerodha, Groww, Upstox, SIP, Mutual Fund, PPF, NPS |

Type a keyword → category auto-selects with ✨ **Auto-detected** badge.

---

### 💰 Daily Spending Allowance

Shows exactly how much you can **safely spend today**:

```
Daily Allowance = (Income - Expenses - 20% Savings Target) ÷ Days Remaining
```

Color-coded:
- 💰 Green (>₹500) — spending comfortably
- 🟢 Normal (₹200-500)
- 🟡 Caution (<₹200)
- 🔴 Over budget

---

### 📊 Budget Tracker

Set monthly limits per category → visual progress bars:

- 🟢 **On track** — under 75% of limit
- 🟠 **Almost there** — 75-99%
- 🔴 **Over budget!** — exceeded limit

Click ✏️ to set budgets for Food, Transport, Shopping, etc.

---

### 📅 Bill Reminders

Track recurring monthly bills with smart due-date indicators:

- 🔴 **Today!** — bill is due today
- 🟠 **Tomorrow** / **In 3 days** — coming up soon
- 🟢 **Day 15** — well ahead

Features:
- **One-click "Pay"** — auto-logs the expense
- **Smart icons** — 🏠 Rent, 🎬 Netflix, ⚡ Electricity, 📱 Jio, 🏋️ Gym
- **Sorted by urgency** — nearest due date first

---

### 💸 Expense Tracking with Behavior Insights
- Add income/expenses with categories
- **Date picker** — backdate forgotten expenses
- Mood tagging: Planned / Impulsive / Necessary / Regret / Happy
- **Month-separated** transaction list (This Month + Older)
- AI analysis of spending habits
- **6-month spending trend chart** (Income vs Expenses)

---

### 📈 Portfolio Tracker
- Track: Stocks, Mutual Funds, ETFs, SIPs, Bonds, Gold
- Real-time profit/loss tracking
- Price history visualization (Chart.js)
- Manual price update system

---

### 🧭 Investment Planning
- Risk profiles: Conservative / Moderate / Aggressive / Ultra
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
- **Data-fingerprinted caching** — same data = cached, new data = fresh answer
- Tab-specific AI tips (Dashboard, Expenses, Invest, SIP)

---

### 📧 Email Monthly Report

One-click email report including:
- Monthly income, expenses, savings, savings rate
- Top spending categories
- Health Score
- Impulse spending alerts
- Portfolio P&L summary

---

### 📊 Financial Health Score

Score (0–100) based on:
- Savings rate → max 35  
- Impulse control → max 25  
- Base score → 20  
- Investment activity → max 20  

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
| Budgets | Firestore + localStorage |
| AI Cache | Firestore + localStorage |
| AI Keys | Firestore + localStorage |
| Bill Reminders | localStorage |
| Best Streak | localStorage |
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
- SMS parser works best with English-language bank SMS  

---

## 🛠 Tech Stack

- **Frontend:** Vanilla JavaScript  
- **UI:** HTML5, CSS3 (Glassmorphism + Dark/Light themes)  
- **Charts:** Chart.js  
- **Auth & DB:** Firebase  
- **AI:** Multi-provider architecture (7 providers)  
- **Worker:** Cloudflare Workers + KV  
- **Hosting:** GitHub Pages  

---

## 🎯 What Makes FinAI Unique

- 🧩 **Single-file architecture** — no frameworks, no build tools
- 📩 **Bank SMS parser** — paste notification → auto-log expense
- 💰 **Daily allowance** — "you can spend ₹X today"
- 📊 **Budget tracking** — per-category limits with progress bars
- 📅 **Bill reminders** — never miss rent or EMI again
- 🤖 **150+ keyword auto-categorisation** — Paytm-level smart detection
- 🔥 **Streak gamification** — build a daily logging habit
- 🧠 **AI with data fingerprint** — always fresh, never stale
- 📊 **Behavioral finance** — mood tracking on every expense
- 🔒 **Privacy-first** — works fully offline, your data stays yours

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