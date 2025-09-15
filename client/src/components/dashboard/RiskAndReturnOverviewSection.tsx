import React from "react";
import { Card } from "../ui/card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
import type { RecentTradeData } from "@/types/AnalyticsTypes";

interface Props {
  recentTradeData: RecentTradeData;
}

const RiskAndReturnOverviewSection: React.FC<Props> = ({ recentTradeData }) => {
  const stats = recentTradeData;

  const StatCard = ({
    title,
    description,
    data,
    isBar = false,
    suffix = "",
  }: {
    title: string;
    description: string;
    data: { value: number; history: number[] };
    isBar?: boolean;
    suffix?: string;
  }) => (
    <Card className="w-full h-full p-6 shadow-sm border rounded-2xl flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <div className="mt-3 text-2xl font-bold text-gray-800">
        {data.value}
        {suffix}
      </div>
      <div className="mt-4 h-20">
        <ResponsiveContainer width="100%" height="100%">
          {isBar ? (
            <BarChart
              data={data.history.map((val, i) => ({ x: i + 1, y: val }))}
            >
              <XAxis dataKey="x" hide />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="y" fill="#121212" radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : (
            <AreaChart
              data={data.history.map((val, i) => ({ x: i + 1, y: val }))}
            >
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#121212" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#121212" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="x" hide />
              <YAxis hide />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="y"
                stroke="#121212"
                strokeWidth={2}
                fill="url(#lineGradient)"
                dot={false}
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  );

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5">
      <StatCard
        title="Average Return (%)"
        description="Average % return per trade"
        data={stats.averageReturn}
        suffix="%"
      />
      <StatCard
        title="Maximum Drawdown (%)"
        description="Largest % drop from peak to trough"
        data={stats.maxDrawdown}
        suffix="%"
        isBar
      />
      <StatCard
        title="Longest Win Streak"
        description="Max consecutive profitable trades"
        data={stats.longestWinStreak}
      />
      <StatCard
        title="Longest Loss Streak"
        description="Max consecutive losing trades"
        data={stats.longestLossStreak}
      />
      <div className="col-span-1 md:col-span-2 xl:col-span-1">
        <StatCard
          title="Sharpe Ratio"
          description="Risk-adjusted return performance"
          data={stats.sharpeRatio}
        />
      </div>
    </section>
  );
};

export default RiskAndReturnOverviewSection;
