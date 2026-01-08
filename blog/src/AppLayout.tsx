import MainMenu from "./components/navigation/MainMenu";
// import Footer from "./Footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainMenu />

      <main className="pt-16 pb-16">{children}</main>

      {/* <Footer /> */}
    </>
  );
}
