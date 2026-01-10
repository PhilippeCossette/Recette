import { useState } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./components/layouts/MainLayout";
import NoMenuLayout from "./components/layouts/NoMenuLayout";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Routes>
      {/* Routes With Menu */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      {/* Routes Without Menu */}
      <Route element={<NoMenuLayout />}>{/* Routes like login */}</Route>
    </Routes>
  );
}
export default App;
