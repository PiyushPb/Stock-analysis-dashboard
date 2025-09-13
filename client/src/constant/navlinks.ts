import { GoGraph, GoLog } from "react-icons/go";
import { BsWallet2 } from "react-icons/bs";

const navLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: GoGraph,
  },
  {
    name: "Wallets",
    path: "/wallets",
    icon: BsWallet2,
  },
  {
    name: "History",
    path: "/history",
    icon: GoLog,
  },
];

export default navLinks;
