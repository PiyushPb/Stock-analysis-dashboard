import type { AnalyticsResponse } from "@/types/AnalyticsTypes";

const fetchAnalyticsData = async (): Promise<AnalyticsResponse> => {
  const response = await fetch("http://localhost:8000/analytics");
  const data: AnalyticsResponse = await response.json();
  return data;
};

export default fetchAnalyticsData;
