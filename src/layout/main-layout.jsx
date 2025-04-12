import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../layout/header/header";
import { Footer } from "../layout/footer/footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
