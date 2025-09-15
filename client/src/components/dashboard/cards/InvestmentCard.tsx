import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";
import { PieChart } from "@mui/x-charts/PieChart";
import { GoInfo } from "react-icons/go";
import ChartLabel from "@/components/ui/chartLabel";
import type { PortfolioDetails } from "@/types/AnalyticsTypes";

interface Props {
  portfolioDetails: PortfolioDetails;
}

const formatCurrency = (value: number) =>
  `₹ ${value.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

const getPieChartData = (totalInvestment: number, availableBalance: number) => [
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

const getGaugeValue = (totalInvestment: number, availableBalance: number) => {
  const total = Math.abs(totalInvestment) + Math.abs(availableBalance);
  return total === 0
    ? 0
    : Math.round((Math.abs(totalInvestment) / total) * 100);
};

const formatChange = (value: number) => {
  const color = value >= 0 ? "text-green-500" : "text-red-500";
  const sign = value > 0 ? "+" : "";
  return {
    text: `${sign}${value}%`,
    color,
  };
};

const InvestmentCard: React.FC<Props> = ({ portfolioDetails }) => {
  const { totalInvestment, availableBalance, dailyChange, monthlyChange } =
    portfolioDetails;

  const gaugeValue = getGaugeValue(totalInvestment, availableBalance);
  const data = getPieChartData(totalInvestment, availableBalance);

  const formattedDailyChange = formatChange(dailyChange);
  const formattedMonthlyChange = formatChange(monthlyChange);

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
              <ChartLabel label="Total Investment" color="#111827" />
              <ChartLabel label="Available Balance" color="#E5E7EB" />
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
                <h4 className={`text-sm ${formattedDailyChange.color}`}>
                  {formattedDailyChange.text}
                </h4>
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
                <h4 className={`text-sm ${formattedMonthlyChange.color}`}>
                  {formattedMonthlyChange.text}
                </h4>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex flex-row gap-2 text-gray-500 items-center">
            <GoInfo />
            <p>These are the portfolio details of your investments</p>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default InvestmentCard;
