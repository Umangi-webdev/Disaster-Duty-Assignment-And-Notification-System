import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">DDANS</h1>
      <div>
        <Link to="/dashboard" className="mx-2">Dashboard</Link>
        <Link to="/officers" className="mx-2">Officers</Link>
        <Link to="/assign-duty" className="mx-2">Duty Assignment</Link>
        <Link to="/notifications" className="mx-2">Notifications</Link>
      </div>
    </nav>
  );
};

export default Navbar;
