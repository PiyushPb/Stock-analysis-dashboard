import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <main>
      <Navbar />
      <section className="mt-[140px] md:mt-[120px] px-5 md:px-10">
        <Outlet />
      </section>
    </main>
  );
}

export default DashboardLayout;
