# FinAI — Personal Finance AI Assistant

**FinAI** is a privacy-focused, AI-powered personal finance application that helps users **track expenses, analyze financial behavior, and plan long-term financial stability**.

The goal of FinAI is to make **financial awareness simple and accessible** while maintaining strong **data privacy and user control**.

---

## Live Demo
https://soumya074.github.io/FinAi/

---

## Features

### Secure Authentication
- Google Sign-In using Firebase Authentication
- Secure login with user-specific data isolation

### Cloud Sync & Offline Support
- Real-time data synchronization using Cloud Firestore
- Offline functionality using local storage fallback

### Smart Expense Tracker
- Add and categorize transactions
- Mood-tagged spending analysis
- Organized expense management

### Financial Health Score
FinAI generates a **0–100 financial health score** based on key financial indicators:

- Spending behavior  
- Savings discipline  
- Investment allocation  
- Budget consistency  

### Investment Planning
Provides a **personalized financial roadmap** based on user risk profile and financial habits.

### Portfolio Tracker
Track performance of financial assets including:

- Stocks
- Mutual Funds
- ETFs

Includes profit/loss visualization and performance tracking.

### SIP Calculator
Interactive calculator to estimate long-term investment growth using **Systematic Investment Plans (SIP)**.

### AI Financial Advisor
AI-powered assistant that provides insights such as:

- Expense reduction suggestions  
- Budgeting improvements  
- Financial behavior analysis  

Powered by Claude AI API with response caching.

### Financial Report Export
Generate and download a **PDF financial summary report**.

### Data Backup
Export and import data using **JSON backup files**.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Responsive user interface |
| Vanilla JavaScript (ES6+) | Core application logic |
| Firebase Authentication | Google authentication |
| Cloud Firestore | Real-time database |
| Chart.js | Data visualization |
| Claude AI API (Anthropic) | AI financial advisor |

---

## Running the Project Locally

### 1 Clone the repository

```bash
git clone https://github.com/soumya074/FinAi.git
cd FinAi
```

### 2 Add Firebase configuration

Inside `index.html`, add your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### 3 Start a local server

```bash
npx serve .
```

### 4 Open the application

```
http://localhost:3000
```

---

## Data Privacy

FinAI is built with a **privacy-first design**.

- User data is stored securely using Firebase
- Each user's data is isolated with proper security rules
- No financial information is shared across users
- Offline mode works using local storage

---

## Project Structure

```
FinAi/
├── index.html
└── README.md
```

The project uses a **simple single-file architecture** for easy deployment.

---

## Future Improvements

- Real-time stock market data integration
- Mobile application support
- Recurring expense automation
- Budget alerts and notifications
- UPI SMS expense detection for Android
- AI-based financial forecasting

---

## Developer

Soumya Ranjan Sahoo

GitHub  
https://github.com/SOUMYA074

Portfolio  
https://soumya074.github.io/soumya_Portfolio/

LinkedIn  
https://www.linkedin.com/in/soumya-ranjan-sahoo-8b4978229/

---

## Disclaimer

This application is intended for **personal finance tracking and educational purposes only**.  
It does **not provide regulated financial advice**.

---

## License

MIT License — free to use, modify, and distribute.