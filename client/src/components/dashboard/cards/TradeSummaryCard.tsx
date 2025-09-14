import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", total: 10, wins: 7, losses: 3, profit: 200, loss: -50 },
  { day: "Tue", total: 15, wins: 10, losses: 5, profit: 300, loss: -100 },
  { day: "Wed", total: 12, wins: 0, losses: 12, profit: 250, loss: -60 },
  { day: "Thu", total: 18, wins: 12, losses: 6, profit: 350, loss: -120 },
  { day: "Fri", total: 20, wins: 15, losses: 5, profit: 400, loss: -90 },
  { day: "Sat", total: 25, wins: 17, losses: 8, profit: 500, loss: -150 },
  { day: "Sun", total: 22, wins: 14, losses: 8, profit: 450, loss: -130 },
];

// Calculate totals and dynamic metrics
const totalTrades = data.reduce((acc, curr) => acc + curr.total, 0);
const winningTrades = data.reduce((acc, curr) => acc + curr.wins, 0);
const losingTrades = data.reduce((acc, curr) => acc + curr.losses, 0);
const totalProfit = data.reduce((acc, curr) => acc + curr.profit, 0);
const totalLoss = data.reduce((acc, curr) => acc + curr.loss, 0);

// Calculate additional metrics
const winRate = ((winningTrades / totalTrades) * 100).toFixed(2);
const lossRate = ((losingTrades / totalTrades) * 100).toFixed(2);
const profitLossRatio = (totalProfit / Math.abs(totalLoss)).toFixed(2);

function TradeSummaryCard() {
  return (
    <section className="md:col-span-4 w-full">
      <Card className="w-full">
        <CardHeader>
          <h3 className="text-3xl font-semibold">Trade Summary</h3>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <div className="w-full">
            <ResponsiveContainer width="100%" height={450}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Bar dataKey="total" fill="#2196F3" barSize={60} />

                <Line type="monotone" dataKey="wins" stroke="#4CAF50" />

                <Line type="monotone" dataKey="losses" stroke="#F44336" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Info Display */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-center w-full">
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-sm font-medium">Total Trades</p>
              <p className="text-xl font-bold text-blue-600">{totalTrades}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-sm font-medium">Winning Trades</p>
              <p className="text-xl font-bold text-green-600">
                {winningTrades}
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-3">
              <p className="text-sm font-medium">Losing Trades</p>
              <p className="text-xl font-bold text-red-600">{losingTrades}</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3">
              <p className="text-sm font-medium">Win Rate (%)</p>
              <p className="text-xl font-bold text-yellow-600">{winRate}</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-3">
              <p className="text-sm font-medium">Loss Rate (%)</p>
              <p className="text-xl font-bold text-orange-600">{lossRate}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <p className="text-sm font-medium">Profit/Loss Ratio</p>
              <p className="text-xl font-bold text-purple-600">
                {profitLossRatio}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default TradeSummaryCard;
