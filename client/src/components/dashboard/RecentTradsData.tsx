import React from "react";
import RecentTradesTable from "./cards/RecentTradesTable";

function RecentTradeData() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
        <div className="md:col-span-1 h-full flex">
          <RecentTradesTable />
        </div>
        <div className="md:col-span-1 h-full flex">
          <RecentTradesTable />
        </div>
      </div>
    </section>
  );
}

export default RecentTradeData;
