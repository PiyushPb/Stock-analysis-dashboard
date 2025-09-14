import React, { useState, useEffect } from "react";
import navLinks from "@/constant/navlinks";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { FaBell, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import marketIndices from "@/constant/marketIndices";
import MarketIndiceCard from "./ui/MarketIndiceCard";
import Marquee from "react-fast-marquee";

function Navbar() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow md:px-10">
        <div className="text-xl font-semibold calSans">Journalyst</div>

        <ul className="hidden md:flex flex-row gap-4">
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

        <div className="flex items-center gap-4">
          <div className="relative">
            <FaBell size={20} />
            <div className="absolute top-[-5px] right-[-3px] w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <BiSolidDownArrow />
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-3">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;

              return (
                <li key={index}>
                  <Link to={link.path} onClick={() => setMenuOpen(false)}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className="w-full flex items-center gap-2 justify-start"
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
      )}

      <div className="w-full px-6 py-3 md:px-10 bg-white shadow">
        <Marquee pauseOnHover={true} gradient={true}>
          {marketIndices.map((marketIndex, index) => (
            <MarketIndiceCard marketIndex={marketIndex} key={index} />
          ))}
        </Marquee>
      </div>
    </header>
  );
}

export default Navbar;
