import { NavLink } from "react-router-dom";

export default function MenuItem({
  item,
  mobile = false,
}: {
  item: {
    label: string;
    path: string;
    icon: React.ComponentType<{ size?: number }>;
  };
  mobile?: boolean;
}) {
  const Icon = item.icon;

  return (
    <li className="hover:bg-gray-100 transition-all duration-200">
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `flex flex-col items-center justify-center h-full transition-all duration-200 ${
            isActive ? "text-primary" : "text-gray-400"
          }`
        }
      >
        <Icon size={32} />
        {mobile && <span className="text-xs">{item.label}</span>}
      </NavLink>
    </li>
  );
}
