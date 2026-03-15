# FinAI — Personal Finance OS

A privacy-first, AI-powered personal finance application that helps you 
track expenses, plan investments, and build long-term wealth.

## Live Demo
🔗 https://yourusername.github.io/finai

## Features

- **Google Authentication** — secure login, data syncs across all devices
- **Cloud Sync** — real-time Firestore sync, works offline too
- **Expense Tracker** — mood-tagged transactions with smart categorisation
- **Financial Health Score** — live 0–100 score across 4 financial pillars
- **Investment Plan** — personalised roadmap based on your risk profile
- **Portfolio Tracker** — track stocks, mutual funds, ETFs with live P&L
- **SIP Calculator** — visualise wealth growth over time
- **AI Financial Advisor** — powered by Claude AI, cached to save API credits
- **PDF Report** — downloadable financial summary
- **JSON Backup** — export and import your data anytime

## Tech Stack

| Technology | Purpose |
|---|---|
| Vanilla JavaScript (ES6+) | Core application logic |
| HTML5 & CSS3 | UI and responsive design |
| Firebase Authentication | Google sign-in |
| Cloud Firestore | Real-time database & sync |
| Chart.js | Data visualisation |
| Claude AI API (Anthropic) | AI financial advisor |

## How to Run Locally

1. Clone the repository
```bash
   git clone https://github.com/yourusername/finai.git
   cd finai
```

2. Add your Firebase config inside `index.html`
```js
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     ...
   };
```

3. Start a local server
```bash
   npx serve .
```

4. Open `http://localhost:3000`

## Data Privacy

All financial data is stored in your own private Firebase account.
Each user's data is completely isolated — no one else can access your data.
The app works offline using localStorage as fallback.

## Project Structure
```
finai/
├── index.html      ← entire app (single file architecture)
└── README.md       ← this file
```

## Future Scope

- Real-time stock prices via Alpha Vantage API
- Mobile app using React Native
- Recurring expense automation
- Monthly budget alerts via email
- UPI SMS auto-parser on Android

## Developer

**Your Name**  
BCA Graduate  
📧 your@email.com  
🔗 linkedin.com/in/yourprofile

## Disclaimer

This app is for personal financial tracking and education only.
It does not constitute SEBI-registered financial advice.

## License

MIT License — free to use and modify