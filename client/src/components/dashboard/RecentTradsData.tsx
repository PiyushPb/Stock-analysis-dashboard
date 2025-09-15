import React from "react";
import RecentTradesTable from "./cards/RecentTradesTable";
import RiskAndReturnOverviewSection from "./RiskAndReturnOverviewSection";
import type { Payload } from "@/types/AnalyticsTypes";

interface Props {
  data: Payload;
}

const RecentTradeData: React.FC<Props> = ({ data }) => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-5 items-stretch">
        <div className="md:col-span-1 h-full flex">
          <RiskAndReturnOverviewSection
            recentTradeData={data.recentTradeData}
          />
        </div>
        <div className="md:col-span-1 h-full flex">
          <RecentTradesTable recentTradesData={data.recentTradesData} />
        </div>
      </div>
    </section>
  );
};

export default RecentTradeData;
