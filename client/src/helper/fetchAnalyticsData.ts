import type { AnalyticsResponse } from "@/types/AnalyticsTypes";

const fetchAnalyticsData = async (): Promise<AnalyticsResponse> => {
  const response = await fetch(
    "https://stock-analysis-dashboard-1-88yz.onrender.com/analytics"
  );
  const data: AnalyticsResponse = await response.json();
  return data;
};

export default fetchAnalyticsData;
