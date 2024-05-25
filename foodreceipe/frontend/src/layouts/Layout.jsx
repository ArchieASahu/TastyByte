import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer2 from "./Footer2";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container p-0">
        <Outlet />
      </div>
      <Footer2 />
    </div>
  );
};

export default Layout;
