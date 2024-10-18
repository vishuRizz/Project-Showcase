import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-1/5 p-5 bg-white shadow-md">
      <div className="mb-8 text-xl font-bold">Dashboard</div>
      <ul>
        <li className="flex items-center mb-4 space-x-2">
          <div className="p-2 bg-indigo-500 rounded-full"></div>
          <span>Next Appointment</span>
        </li>
        <li className="flex items-center mb-4 space-x-2">
          <div className="p-2 bg-gray-300 rounded-full"></div>
          <span>Customers</span>
        </li>
        <li className="flex items-center mb-4 space-x-2">
          <div className="p-2 bg-gray-300 rounded-full"></div>
          <span>Deals</span>
        </li>
        <li className="flex items-center mb-4 space-x-2">
          <div className="p-2 bg-gray-300 rounded-full"></div>
          <span>Tasks</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
