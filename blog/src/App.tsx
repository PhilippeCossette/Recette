import { useState } from "react";
import MainMenu from "./components/navigation/MainMenu";

function App() {
  return (
    <div>
      <MainMenu />
      <p className="text-red-400">Hello</p>
    </div>
  );
}
export default App;
