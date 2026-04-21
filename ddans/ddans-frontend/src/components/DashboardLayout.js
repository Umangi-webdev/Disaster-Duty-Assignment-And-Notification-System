import React from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
