import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { RecentTrade } from "@/types/AnalyticsTypes";

interface Props {
  recentTradesData: RecentTrade[];
}

const RecentTradesTable: React.FC<Props> = ({ recentTradesData }) => {
  const trades = recentTradesData;

  return (
    <Card className="w-full">
      <CardHeader className=" p-4">
        <h3 className="text-3xl font-semibold">Recent Trades</h3>
        <CardDescription>
          Details of your recent 10 stock market trades
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <Table className="min-w-full table-auto">
          <TableCaption className="text-sm text-gray-600">
            A list of your most recent trades.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-gray-100 text-left px-4 py-2">
                Trade ID
              </TableHead>
              <TableHead className="bg-gray-100 text-left px-4 py-2">
                Stock
              </TableHead>
              <TableHead className="bg-gray-100 text-left px-4 py-2">
                Quantity
              </TableHead>
              <TableHead className="bg-gray-100 text-right px-4 py-2">
                Price (INR)
              </TableHead>
              <TableHead className="bg-gray-100 text-right px-4 py-2">
                Time
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trades.map((trade) => (
              <TableRow key={trade.id} className="border-t hover:bg-gray-50">
                <TableCell className="px-4 py-2 font-medium">
                  {trade.id}
                </TableCell>
                <TableCell className="px-4 py-2">{trade.stock}</TableCell>
                <TableCell className="px-4 py-2">{trade.quantity}</TableCell>
                <TableCell className="px-4 py-2 text-right">
                  ₹{trade.price}
                </TableCell>
                <TableCell className="px-4 py-2 text-right">
                  {trade.time}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <Button>View All Trades</Button>
      </CardFooter>
    </Card>
  );
};

export default RecentTradesTable;
