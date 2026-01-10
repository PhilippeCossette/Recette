import MainMenu from "@/components/navigation/MainMenu";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <MainMenu />
      <Outlet />
    </>
  );
}
