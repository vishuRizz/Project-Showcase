import React, { useState } from "react";
import {
  FaHome,
  FaTicketAlt,
  FaChild,
  FaCalendarAlt,
  FaBell,
  FaUser,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  // State to control sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:relative md:translate-x-0 md:w-64  bg-gradient-to-br from-black via-indigo-800 to-purple-800 text-white w-64 h-screen`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-bold"> Dashboard</h2>
          <FaTimes
            className="cursor-pointer md:hidden"
            onClick={toggleSidebar}
          />
        </div>
        <nav className="mt-10">
          <ul className="space-y-4">
            <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-indigo-800">
              <FaHome className="mr-2" /> Home
            </li>
            <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-indigo-800">
              <FaTicketAlt className="mr-2" /> Tickets
            </li>
            <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-indigo-800">
              <FaChild className="mr-2" /> Parent Performance
            </li>
            <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-indigo-800">
              <FaCalendarAlt className="mr-2" /> Task Assignments
            </li>
            <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-indigo-800">
              <FaBell className="mr-2" /> Alerts
            </li>
            <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-indigo-800">
              <FaUser className="mr-2" /> Profile
            </li>
          </ul>
        </nav>
      </div>
      {/* Menu Button for Mobile (to open the sidebar) */}
      <button
        className="p-2 text-white bg-indigo-500 rounded-md md:hidden"
        onClick={toggleSidebar}
      >
        Menu
      </button>
    </div>
  );
};

export default Sidebar;