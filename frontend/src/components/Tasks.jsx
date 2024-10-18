import React from "react";

const Tasks = () => {
  return (
    <div className="p-5 mt-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold">Tasks To Do</h3>
      <ul className="mt-4 space-y-2">
        <li className="flex justify-between">
          <span>Lunch with Aman</span>
          <span>24 Oct 2022</span>
        </li>
        <li className="flex justify-between">
          <span>Team basketball</span>
          <span>24 Oct 2022</span>
        </li>
        <li className="flex justify-between">
          <span>Speed run</span>
          <span>24 Oct 2022</span>
        </li>
        <li className="flex justify-between">
          <span>lalalala is lalalala</span>
          <span>24 Oct 2022</span>
        </li>
        <li className="flex justify-between">
          <span>FS assemble</span>
          <span>24 Oct 2022</span>
        </li>
        <li className="flex justify-between">
          <span>Meeting with partners</span>
          <span>30 Nov 2021</span>
        </li>
        <li className="flex justify-between">
          <span>Web conference agenda</span>
          <span>24 Dec 2021</span>
        </li>
      </ul>
    </div>
  );
};

export default Tasks;
