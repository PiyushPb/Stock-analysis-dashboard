import React from "react";
import InvestmentCard from "./cards/InvestmentCard";
import WinLossCard from "./cards/WinLossCard";
import TotalWeeklyEarning from "./cards/TotalWeeklyEarning";
import type { Payload } from "@/types/AnalyticsTypes";

interface Props {
  data: Payload;
}

const PerformanceSummary: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-5 items-stretch">
        <div className="md:col-span-2 h-full flex">
          <InvestmentCard portfolioDetails={data.portfolioDetails} />
        </div>
        <div className="md:col-span-2 xl:col-span-1 h-full flex">
          <WinLossCard winLossBreakdown={data.winLossBreakdown} />
        </div>
        <div className="md:col-span-4 xl:col-span-2 h-full flex">
          <TotalWeeklyEarning weeklyEarning={data.totalWeeklyEarning} />
        </div>
      </div>
    </section>
  );
};

export default PerformanceSummary;
