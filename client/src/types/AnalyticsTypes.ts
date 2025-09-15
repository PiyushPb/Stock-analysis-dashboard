export interface AnalyticsResponse {
  success: boolean;
  payload: Payload;
  message: string;
}

export interface Payload {
  portfolioDetails: PortfolioDetails;
  winLossBreakdown: WinLossBreakdown;
  totalWeeklyEarning: TotalWeeklyEarnings;
  tradeSummary: TradeSummary;
  recentTradeData: RecentTradeData;
  recentTradesData: RecentTrade[];
}

export interface PortfolioDetails {
  totalInvestment: number;
  availableBalance: number;
  dailyChange: number;
  monthlyChange: number;
}

export interface WinLossBreakdown {
  winRate: number;
  lossRate: number;
  neutralRate: number;
}

export interface TotalWeeklyEarnings {
  weeklyLabels: string[];
  weeklyData: number[];
  thisWeekEarning: number;
  stocks: {
    numberOfStock: number;
    value: string;
    change: string;
  };
  dividendProfitValue: string;
}

export interface TradeSummary {
  data: TradeDaySummary[];
  totalTrades: number;
  winningTrades: number;
  losingTrades: number;
  winRatePercentage: number;
  lossRatePercentage: number;
  profitLossRatio: string;
}

export interface TradeDaySummary {
  day: string;
  total: number;
  wins: number;
  losses: number;
  profit: number;
  loss: number;
}

export interface RecentTradeData {
  averageReturn: {
    value: number;
    history: number[];
  };
  maxDrawdown: {
    value: number;
    history: number[];
  };
  longestWinStreak: {
    value: number;
    history: number[];
  };
  longestLossStreak: {
    value: number;
    history: number[];
  };
  sharpeRatio: {
    value: number;
    history: number[];
  };
}

export interface RecentTrade {
  id: string;
  stock: string;
  quantity: number;
  price: string;
  time: string;
}
