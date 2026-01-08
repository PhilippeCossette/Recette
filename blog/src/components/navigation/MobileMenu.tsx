import { MENU_ITEMS } from "./menu.config";
import MenuItem from "./MenuItem";

export default function MobileMenu() {
  return (
    <nav className="fixed bottom-0 w-full h-20 bg-white border-t z-50">
      <ul className="grid grid-cols-5 h-full">
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item.path} item={item} mobile />
        ))}
      </ul>
    </nav>
  );
}
