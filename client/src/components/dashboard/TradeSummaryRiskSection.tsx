import React from "react";
import TradeSummaryCard from "./cards/TradeSummaryCard";

function TradeSummaryRiskSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-stretch">
        <div className="md:col-span-4 h-full flex">
          <TradeSummaryCard />
        </div>
      </div>
    </section>
  );
}

export default TradeSummaryRiskSection;
