import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function MainMenu() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopMenu />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </>
  );
}
