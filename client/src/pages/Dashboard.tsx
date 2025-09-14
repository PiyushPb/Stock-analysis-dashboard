import React from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PerformanceSummary from "@/components/dashboard/PerformanceSummary";
import TradeSummaryRiskSection from "@/components/dashboard/TradeSummaryRiskSection";
import RecentTradeData from "@/components/dashboard/RecentTradsData";

function Dashboard() {
  return (
    <section className="min-h-[100vh] md:py-5 flex flex-col gap-5">
      <DashboardHeader />
      <PerformanceSummary />
      <TradeSummaryRiskSection />
      <RecentTradeData />
    </section>
  );
}

export default Dashboard;
