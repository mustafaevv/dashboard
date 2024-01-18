import {
  MdOutlineSignalCellularAlt,
  MdShoppingCart,
  MdShoppingBag,
  MdMessage,
  MdOutlineSettings,
  MdOutlineIncompleteCircle,
} from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { PiSignOutBold } from "react-icons/pi";

const links = [
  {
    icon: <MdOutlineIncompleteCircle />,
    title: "Dashboard",
    path: "/dashboard/overview",
  },
  {
    icon: <MdOutlineSignalCellularAlt />,
    title: "Leaderboard",
    path: "/dashboard/leaderboard",
  },
  { icon: <MdShoppingCart />, title: "Order", path: "/dashboard/order" },
  { icon: <MdShoppingBag />, title: "Products", path: "/dashboard/products" },
  {
    icon: <GiProgression />,
    title: "Sales Report",
    path: "/dashboard/sales-report",
  },
  { icon: <MdMessage />, title: "Messages", path: "/dashboard/messages" },
  {
    icon: <MdOutlineSettings />,
    title: "Settings",
    path: "/dashboard/settings",
  },
  { icon: <PiSignOutBold />, title: "Sign Out", path: "/dashboard/sign-out" },
];

export default links;
