import React from "react";
import AddRequestCard from "./AddRequestCard";
import Customers from "./Members";
import Tasks from "./Tasks";

const Dashboard = () => {
  return (
    <div className="w-4/5 p-6 space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <AddRequestCard />
        <Customers />
      </div>
      <Tasks />
    </div>
  );
};

export default Dashboard;
