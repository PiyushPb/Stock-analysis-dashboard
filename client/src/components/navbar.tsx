import React from "react";
import navLinks from "@/constant/navlinks";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { FaBell } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";
// import marketIndices from "@/constant/marketIndices";

function Navbar() {
  const location = useLocation();

  return (
    <header>
      <nav className="flex items-center justify-between px-10 py-5 bg-white shadow">
        <div>
          <h1 className="text-xl calSans">Journalyst</h1>
        </div>
        <div>
          <ul className="flex flex-row gap-4">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;

              return (
                <li key={index}>
                  <Link to={link.path}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{link.name}</span>
                    </Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-row items-center gap-5">
          <div className="relative">
            <FaBell size={20} className="relative" />
            <div className="absolute top-[-5px] right-[-3px] w-3 h-3 bg-red-500 rounded-full border-[2px] border-white"></div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
              <img
                src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg"
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <div>
              <BiSolidDownArrow />
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full px-10 py-5">
        {/* {marketIndices.map((marketIndex, index) => {})} */}
      </div>
    </header>
  );
}

export default Navbar;
