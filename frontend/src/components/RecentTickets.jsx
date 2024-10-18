import React from "react";

const RecentDeals = () => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold">Recent Tickets</h3>
      <ul className="mt-4 space-y-4">
        <li className="flex justify-between">
          <span>319 Haul Road, Glenrock, WY</span>
          <span>$5750</span>
        </li>
        <li className="flex justify-between">
          <span>47 Spruce Drive, Quantico, VA</span>
          <span>$5750</span>
        </li>
        <li className="flex justify-between">
          <span>165 Belmont Drive, Parowan, UT</span>
          <span>$5750</span>
        </li>
        <li className="flex justify-between">
          <span>1538 Hammer Road, Cleveland, OH</span>
          <span>$5750</span>
        </li>
      </ul>
    </div>
  );
};

export default RecentDeals;
