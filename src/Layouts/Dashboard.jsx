import React from "react";
import { Outlet } from "react-router-dom";
import Fixedmenu from "../Pages/DashboardPage/Fixedmenu/Fixedmenu";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-56 min-h-screen bg-gold-600 text-white">
        <Fixedmenu></Fixedmenu>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
