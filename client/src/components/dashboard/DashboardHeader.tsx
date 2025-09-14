import React from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function DashboardHeader() {
  return (
    <section className="w-full flex flex-col md:flex-row justify-start md:justify-between md:items-center gap-5">
      <h1 className="text-3xl font-semibold">Dashboard Overview</h1>
      <div className="flex flex-row gap-4 items-center">
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Todays" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Todays">Todays</SelectItem>
              <SelectItem value="This Week">Weekly</SelectItem>
              <SelectItem value="This Month">Monthly</SelectItem>
              <SelectItem value="This Year">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>View Report</Button>
      </div>
    </section>
  );
}

export default DashboardHeader;
