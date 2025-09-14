// data/dashboardData.ts

export interface PortfolioData {
  totalInvestment: number;
  availableBalance: number;
  dailyChange: number;
  monthlyChange: number;
}

export const portfolioData: PortfolioData = {
  totalInvestment: 39109,
  availableBalance: 140222.75,
  dailyChange: 8.5,
  monthlyChange: 8.5,
};
