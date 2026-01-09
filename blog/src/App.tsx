import { useState } from "react";
import MainMenu from "./components/navigation/MainMenu";
import RandomRecipes from "./components/content/randomRecipes";

function App() {
  return (
    <div>
      <MainMenu />
      <RandomRecipes />
    </div>
  );
}
export default App;
