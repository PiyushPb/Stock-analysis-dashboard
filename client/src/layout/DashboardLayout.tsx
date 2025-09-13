import React from "react";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
  );
}

export default DashboardLayout;
