import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BarChart } from "@mui/x-charts/BarChart";

const weeklyLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weeklyData = [2.5, -1.2, 3.8, -0.5, 4.2, 3, -2.1];

function TotalWeeklyEarning() {
  return (
    <section className="md:col-span-2 w-full h-full">
      <Card className="w-full h-full">
        <CardHeader>
          <h3 className="text-3xl font-semibold">Total Weekly Earning</h3>
        </CardHeader>
        <CardContent className="flex flex-col lg:flex-row gap-4 pl-0">
          {/* Chart Container */}
          <div className="w-full lg:w-[60%] flex justify-center items-center">
            <div style={{ width: "100%", height: 300 }}>
              <BarChart
                xAxis={[
                  {
                    data: weeklyLabels,
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: weeklyData,
                  },
                ]}
                yAxis={[
                  {
                    colorMap: {
                      type: "piecewise",
                      thresholds: [0],
                      colors: ["#ef4444", "#22c55e"],
                    },
                  },
                ]}
                margin={{ top: 30, bottom: 0, left: 0, right: 0 }}
                slotProps={{
                  barLabel: {
                    formatter: (value: number) =>
                      value !== null ? value.toFixed(2) : "",
                    position: "top",
                    style: {
                      fill: "#333",
                      fontSize: 12,
                    },
                  },
                }}
                grid={{ horizontal: true }}
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-[40%] p-5">
            {/* Weekly Earning */}
            <div>
              <h3 className="text-3xl font-semibold">₹ 1,645.34</h3>
              <div className="mt-4 text-xl">
                <span className="text-gray-500">Stock (4):</span>
                <span className="text-black">
                  {" "}
                  +623.01 <span className="text-green-500">(+16%)</span>
                </span>
              </div>
              <div className=" text-xl">
                <span className="text-gray-500">Dividend Profit:</span>
                <span className="text-black"> +623.01</span>
              </div>
            </div>
            <div>
              <div className="flex justify-start gap-6 text-gray-700 mt-2  text-xl">
                <div className="flex items-center gap-2">
                  <span className="w-[15px] h-[15px] rounded-full bg-[#10B981]"></span>
                  Profit
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-[15px] h-[15px] rounded-full bg-[#EF4444]"></span>
                  Loss
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default TotalWeeklyEarning;
