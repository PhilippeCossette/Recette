import Home from "../ui/home-icon";
import Search from "../ui/magnifier-icon";
import Heart from "../ui/heart-icon";
import AlignCenterIcon from "../ui/align-center-icon";
import KeyframesIcon from "../ui/keyframes-icon";
export const MENU_ITEMS = [
  {
    label: "Home",
    path: "/",
    icon: Home,
  },
  {
    label: "Search",
    path: "/search",
    icon: Search,
  },
  {
    label: "Plan",
    path: "/plan",
    icon: KeyframesIcon,
  },
  {
    label: "Favorites",
    path: "/favorites",
    icon: Heart,
  },
  {
    label: "More",
    path: "/more",
    icon: AlignCenterIcon,
  },
];
