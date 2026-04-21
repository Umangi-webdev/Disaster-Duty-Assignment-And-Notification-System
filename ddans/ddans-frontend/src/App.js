import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Officers from "./pages/Officers";
import DutyAssignment from "./pages/DutyAssignment";
import Notifications from "./pages/Notifications";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 w-full">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/assign-duty" element={<DutyAssignment />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
