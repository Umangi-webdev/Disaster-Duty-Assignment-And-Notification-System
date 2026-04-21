import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-blue-900 text-white w-64 h-screen p-4">
      <h2 className="text-xl font-bold mb-4">DDANS</h2>
      <ul>
        <li className="mb-2"><Link to="/dashboard">🏠 Dashboard</Link></li>
        <li className="mb-2"><Link to="/officers">👮 Officers</Link></li>
        <li className="mb-2"><Link to="/assign-duty">📋 Duty Assignment</Link></li>
        <li className="mb-2"><Link to="/notifications">🔔 Notifications</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
