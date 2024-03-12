import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/home-page";
import MenuPage from "../pages/menu-page";
import OrderPage from "../pages/order-page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  );
};

export default AppRoutes;
