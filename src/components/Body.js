import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex mt-3 content-stretch">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
