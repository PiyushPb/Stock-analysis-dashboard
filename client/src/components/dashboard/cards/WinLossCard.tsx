import React from "react";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { PieChart } from "@mui/x-charts/PieChart";

function WinLossCard() {
  // 📊 Values (could be props too)
  const winRate = 72.4;
  const lossRate = 23.1;
  const neutralRate = 4.5;

  const data = [
    { label: "Win", value: winRate, color: "#10B981" },
    { label: "Loss", value: lossRate, color: "#EF4444" },
    { label: "Neutral", value: neutralRate, color: "#9CA3AF" },
  ];

  return (
    <Card className="w-full col-span-1">
      <CardHeader>
        <h3 className="text-3xl font-semibold">Win / Loss Breakdown</h3>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        {/* Pie Chart */}
        <div className="relative w-[220px] h-[220px]">
          <PieChart
            series={[
              {
                innerRadius: 60,
                outerRadius: 100,
                paddingAngle: 3,
                data,
              },
            ]}
            width={220}
            height={220}
            hideLegend
          />

          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm text-gray-500">Win Rate</div>
              <div className="text-2xl font-bold text-green-600">
                {winRate}%
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 text-sm text-gray-700 mt-2">
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] rounded-full bg-[#10B981]"></span>
            Win
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] rounded-full bg-[#EF4444]"></span>
            Loss
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] rounded-full bg-[#9CA3AF]"></span>
            Neutral
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default WinLossCard;
