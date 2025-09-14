import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";
import { PieChart } from "@mui/x-charts/PieChart";
import { GoInfo } from "react-icons/go";

const formatCurrency = (value) =>
  `₹ ${value.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

const getPieChartData = (totalInvestment, availableBalance) => [
  {
    label: "Total Investment",
    value: Math.abs(totalInvestment),
    color: "#111827",
  },
  {
    label: "Available Balance",
    value: Math.abs(availableBalance),
    color: "#E5E7EB",
  },
];

const getGaugeValue = (totalInvestment, availableBalance) => {
  const total = Math.abs(totalInvestment) + Math.abs(availableBalance);
  return total === 0
    ? 0
    : Math.round((Math.abs(totalInvestment) / total) * 100);
};

function InvestmentCard() {
  const totalInvestment = 39109;
  const availableBalance = 140222.75;
  const avgReturn = 8.5;

  const gaugeValue = getGaugeValue(totalInvestment, availableBalance);
  const data = getPieChartData(totalInvestment, availableBalance);

  const returnColor = avgReturn >= 0 ? "text-green-500" : "text-red-500";
  const formattedReturn = `${avgReturn > 0 ? "+" : ""}${avgReturn}%`;

  return (
    <section className="h-full w-full flex">
      <Card className="w-full">
        <CardHeader>
          <h3 className="text-3xl font-semibold">Portfolio Details</h3>
        </CardHeader>

        <CardContent className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 flex-wrap">
          <div className="relative w-fit mx-auto">
            <div className="w-full md:w-[280px] h-[150px]">
              <PieChart
                series={[
                  {
                    startAngle: -90,
                    endAngle: 90,
                    paddingAngle: 3,
                    innerRadius: 80,
                    outerRadius: 120,
                    cy: "70%",
                    data,
                  },
                ]}
                width={300}
                height={200}
                hideLegend
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center top-[50%] left-[50%] transform -translate-x-1/2 h-fit w-fit">
              <span className="text-3xl font-semibold">{gaugeValue}%</span>
            </div>

            <div className="mt-4 space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-[15px] h-[15px] rounded-full bg-[#111827]"></div>
                <span>Total Investment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[15px] h-[15px] rounded-full bg-[#E5E7EB]"></div>
                <span>Available Balance</span>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] flex flex-col gap-6">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <span className="text-lg text-gray-600">Total Investment</span>
                <h4 className="text-3xl font-semibold">
                  {formatCurrency(totalInvestment)}
                </h4>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-400">Today</span>
                <h4 className={`text-sm ${returnColor}`}>{formattedReturn}</h4>
              </div>
            </div>

            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <span className="text-lg text-gray-600">My Balance</span>
                <h4 className="text-3xl font-semibold">
                  {formatCurrency(availableBalance)}
                </h4>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-400">This month</span>
                <h4 className={`text-sm ${returnColor}`}>{formattedReturn}</h4>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-row gap-2 text-gray-500 items-center">
            <GoInfo />
            <p>This are the portfolio details of your investments</p>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}

export default InvestmentCard;
