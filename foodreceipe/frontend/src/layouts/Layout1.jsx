import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout1 = () => {
  return (
    <div>
      <Navbar />
      <div className="container p-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout1;
