import { useEffect, useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PerformanceSummary from "@/components/dashboard/PerformanceSummary";
import TradeSummaryRiskSection from "@/components/dashboard/TradeSummaryRiskSection";
import RecentTradeData from "@/components/dashboard/RecentTradsData";
import fetchAnalyticsData from "@/helper/fetchAnalyticsData";
import type { Payload } from "@/types/AnalyticsTypes";
import DashboardSkeleton from "@/components/skeleton/DashboardSkeleton";

function Dashboard() {
  const [data, setData] = useState<Payload>({} as Payload);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const result = await fetchAnalyticsData();
        setData(result.payload);
      } catch (error) {
        setError("Failed to fetch data");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <section className="min-h-[100vh] md:py-5 flex flex-col gap-5">
      <DashboardHeader />
      <PerformanceSummary data={data} />
      <TradeSummaryRiskSection data={data} />
      <RecentTradeData data={data} />
    </section>
  );
}

export default Dashboard;
