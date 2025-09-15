# Stock Analysis Dashboard

## Introduction

The **Stock Analysis Dashboard** is a full-stack web application designed to provide clear, data-driven insights into stock portfolio performance. It combines portfolio metrics, trade summaries, win/loss analysis, and real-time analytics into a single interactive dashboard. The platform enables traders and investors to monitor performance trends, evaluate risk metrics, and analyze trade outcomes with professional-grade visualizations.

This project is divided into two parts:
- **Frontend**: A responsive React-based analytical dashboard hosted on Firebase.  
- **Backend**: A Node.js/Express API hosted on Render that powers the analytics and provides structured trade data.

---

## About the Project

The dashboard integrates portfolio and trade data into an intuitive interface with the following capabilities:
- Displays **portfolio details** including total investment, available balance, and daily/monthly changes.
- Tracks **win/loss breakdown** with win rate, loss rate, and neutral trade rate.
- Visualizes **weekly earnings** and stock/dividend performance.
- Provides a detailed **trade summary** across the week (total trades, wins, losses, profit/loss).
- Highlights **risk and return metrics** such as average return, maximum drawdown, longest win/loss streaks, and Sharpe ratio with historical trends.
- Shows **recent trade history** with stock name, quantity, price, and time.

This setup allows users to not only see raw numbers but also interpret their performance using charts and KPIs for better trading decisions.

---

## Features

The Stock Analysis Dashboard includes a comprehensive set of performance and risk metrics to provide meaningful insights for traders and investors:

- **Win Rate (%)** – Percentage of profitable trades.
- **Profit Factor** – Ratio of gross profits to gross losses.
- **Average Return (%)** – Average % return per trade (across all trades).
- **Maximum Drawdown (%)** – The largest % drop from a peak to a trough in the equity curve.
- **Total Trades** – Number of trades included in the calculation.
- **Winning Trades Count** – Total number of profitable trades.
- **Losing Trades Count** – Total number of loss-making trades.
- **Longest Win Streak** – Maximum consecutive profitable trades.
- **Longest Loss Streak** – Maximum consecutive losing trades.
- **Sharpe Ratio** – Risk-adjusted return performance (mocked with a reasonable dummy value).
- **P/L Breakdown** – Cumulative profit or loss (displayed in both currency and percentage form).
- **Recent 10 Trades** – Displays the details of the most recent trades.

---

## Tech Stack

The project is built with a modern web development stack to ensure scalability, performance, and clarity in analytics:

**Frontend**
- React (with functional components and hooks)
- Tailwind CSS (for utility-first styling)
- Recharts (for charts and data visualizations)
- Mui Charts (for charts and data visualizations)
- Schadcn for components (Buttons and cards)
- Firebase Hosting (for deployment)

**Backend**
- Node.js & Express.js (REST API for analytics data)
- MongoDB (data persistence layer)
- Render (backend hosting)

**Development Tools**
- Git & GitHub (version control and repository)
- ESLint & Prettier (code quality and formatting)
- Postman (API testing and validation)

---

## API Walkthrough

The backend API provides structured analytics data consumed by the dashboard.

**Base URL**  
[https://stock-analysis-dashboard-1-88yz.onrender.com/](https://stock-analysis-dashboard-1-88yz.onrender.com/)

**Analytics Endpoint**
GET /analytics
```json
{
  "success": true,
  "payload": {
    "portfolioDetails": {
      "totalInvestment": 39109,
      "availableBalance": 140222.75,
      "dailyChange": -8.5,
      "monthlyChange": 8.5
    },
    "winLossBreakdown": {
      "winRate": 72.4,
      "lossRate": 23.1,
      "neutralRate": 4.5
    },
    "totalWeeklyEarning": {
      "weeklyLabels": ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      "weeklyData": [2.5,-1.2,3.8,-0.5,4.2,3,-2.1],
      "thisWeekEarning": 1645.34,
      "stocks": {
        "numberOfStock": 4,
        "value": "+623.01",
        "change": "+16.23%"
      },
      "dividendProfitValue": "+623.01"
    },
    "tradeSummary": {
      "data": [
        { "day": "Mon", "total": 10, "wins": 7, "losses": 3, "profit": 200, "loss": -50 },
        { "day": "Tue", "total": 15, "wins": 10, "losses": 5, "profit": 300, "loss": -100 },
        ...
      ]
    },
    "recentTradeData": {
      "averageReturn": { "value": 8.5, "history": [5,7,8,6,9,10,8.5] },
      "maxDrawdown": { "value": 12.3, "history": [3,6,8,12,10,11,12.3] },
      "longestWinStreak": { "value": 7, "history": [2,3,5,4,6,7] },
      "longestLossStreak": { "value": 4, "history": [1,2,3,2,4] },
      "sharpeRatio": { "value": 1.45, "history": [0.8,1,1.2,1.4,1.5,1.45] }
    },
    "recentTradesData": [
      { "id": "T001", "stock": "Reliance Industries", "quantity": 50, "price": "2,500.00", "time": "2025-09-15 14:30" },
      { "id": "T002", "stock": "Tata Consultancy", "quantity": 20, "price": "3,200.00", "time": "2025-09-15 14:45" },
      ...
    ]
  },
  "message": "Analytics Data Fetched Successfully"
}
```

GET /ping
```js
pong
```

Key API Features
- Provides portfolio summary including investment, balance, and performance change.
- Returns win/loss breakdown for clear trade outcome tracking.
- Supplies weekly earnings with day-wise performance data.
- Delivers trade summaries including wins, losses, and P/L per day.
- Includes risk & return metrics with historical trends for chart visualizations.
- Lists the recent 10 trades with stock details, prices, and timestamps.

---

## Installation & Setup

Follow these steps to run the project locally:

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- MongoDB instance (local or hosted e.g., MongoDB Atlas)
- Firebase account for frontend deployment

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stock-analysis-dashboard.git ./
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`.

### Deployment
- **Frontend** can be deployed using Firebase Hosting.
- **Backend** can be deployed on Render or any Node.js hosting platform.

---
## Screenshots
<img width="1903" height="1080" alt="image" src="https://github.com/user-attachments/assets/dcc778fd-b588-4dd8-9acf-6d3012b16703" />
<img width="1920" height="2406" alt="image" src="https://github.com/user-attachments/assets/fdd6d919-e5a4-48f5-9e76-aa53d048de36" />
<img width="377" height="4524" alt="image" src="https://github.com/user-attachments/assets/7e2903cd-565d-4bb9-8128-a9fc3e2c72a4" />
<img width="376" height="814" alt="image" src="https://github.com/user-attachments/assets/929a4665-b32f-477e-b877-45d6e43e9ae3" />

---
Thanks if you have any queries please mail me on work.piyushpardeshi@gmail.com

