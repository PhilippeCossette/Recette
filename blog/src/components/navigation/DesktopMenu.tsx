import { MENU_ITEMS } from "./menu.config";
import MenuItem from "./MenuItem";

export default function DesktopMenu() {
  return (
    <nav className="fixed top-0 w-full h-16 bg-white border-b z-50">
      <ul className="flex h-full items-center gap-8 px-8">
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item.path} item={item} />
        ))}
      </ul>
    </nav>
  );
}
