import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <nav className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">DDANS</h2>
        <ul>
          <li className="mb-2">
            <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
          </li>
          <li className="mb-2">
            <Link to="/officers" className="hover:text-blue-400">Officers</Link>
          </li>
          <li className="mb-2">
            <Link to="/assign-duty" className="hover:text-blue-400">Duty Assignment</Link>
          </li>
          <li className="mb-2">
            <Link to="/notifications" className="hover:text-blue-400">Notifications</Link>
          </li>
        </ul>
      </nav>

      {/* Page Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
