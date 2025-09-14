import React from "react";
import { Card } from "../ui/card";
import InvestmentCard from "./cards/InvestmentCard";
import WinLossCard from "./cards/WinLossCard";
import TotalWeeklyEarning from "./cards/TotalWeeklyEarning";

function PerformanceSummary() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-stretch">
        <div className="md:col-span-2 h-full flex">
          <InvestmentCard />
        </div>
        <div className="md:col-span-1 h-full flex">
          <WinLossCard />
        </div>
        <div className="md:col-span-2 h-full flex">
          <TotalWeeklyEarning />
        </div>
      </div>
    </section>
  );
}

export default PerformanceSummary;
