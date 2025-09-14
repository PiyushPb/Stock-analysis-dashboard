import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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

function RecentTradesTable() {
  const trades = [
    {
      id: "T001",
      stock: "Reliance Industries",
      quantity: 50,
      price: "2,500.00",
      time: "2025-09-15 14:30",
    },
    {
      id: "T002",
      stock: "Tata Consultancy",
      quantity: 20,
      price: "3,200.00",
      time: "2025-09-15 14:45",
    },
    {
      id: "T003",
      stock: "Infosys",
      quantity: 10,
      price: "1,450.00",
      time: "2025-09-15 14:50",
    },
    {
      id: "T004",
      stock: "HDFC Bank",
      quantity: 30,
      price: "1,450.00",
      time: "2025-09-15 15:00",
    },
    {
      id: "T005",
      stock: "ICICI Bank",
      quantity: 15,
      price: "900.00",
      time: "2025-09-15 15:15",
    },
    {
      id: "T006",
      stock: "Bajaj Finance",
      quantity: 25,
      price: "7,500.00",
      time: "2025-09-15 15:30",
    },
    {
      id: "T007",
      stock: "Hindustan Unilever",
      quantity: 40,
      price: "2,000.00",
      time: "2025-09-15 15:45",
    },
    {
      id: "T008",
      stock: "Maruti Suzuki",
      quantity: 18,
      price: "8,000.00",
      time: "2025-09-15 16:00",
    },
    {
      id: "T009",
      stock: "Bharti Airtel",
      quantity: 35,
      price: "600.00",
      time: "2025-09-15 16:15",
    },
    {
      id: "T010",
      stock: "Asian Paints",
      quantity: 12,
      price: "2,300.00",
      time: "2025-09-15 16:30",
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader className=" p-4">
        <CardTitle>Recent Trades</CardTitle>
        <CardDescription>
          Details of your recent 10 stock market trades
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
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
      <CardFooter className="bg-gray-100 p-4">
        <CardAction className="text-indigo-600 font-semibold hover:text-indigo-800">
          View All Trades
        </CardAction>
      </CardFooter>
    </Card>
  );
}

export default RecentTradesTable;
