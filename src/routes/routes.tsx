import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/home-page";
import MenuPage from "../pages/menu-page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  );
};

export default AppRoutes;
