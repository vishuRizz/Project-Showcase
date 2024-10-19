// import React from "react";
// import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
// const Tickets = () => {
//   const ticketData = [
//     { title: "Room booking", status: "Accepted" },
//     { title: "Event permission", status: "Accepted" },
//     { title: "Meeting permission", status: "Rejected" },
//     { title: "Event booking II", status: "Rejected" },
//   ];

//   const getStatusStyle = (status) => {
//     return status === "Accepted"
//       ? "text-green-600 bg-green-100"
//       : "text-red-600 bg-red-100";
//   };

//   return (
//     <div className="p-6 mx-auto mt-8 bg-white rounded-lg shadow-xl">
//       <h3 className="text-xl font-semibold text-gray-800">Tickets</h3>
//       <p className="mt-1 text-sm text-gray-500">Manage your recent requests</p>

//       <ul className="mt-6 space-y-4">
//         {ticketData.map((ticket, index) => (
//           <li key={index} className="flex items-center justify-between">
//             <span className="font-medium text-gray-700">{ticket.title}</span>
//             <div className="flex items-center space-x-2">
//               {ticket.status === "Accepted" ? (
//                 <CheckCircleIcon className="w-5 h-5 text-green-500" />
//               ) : (
//                 <XCircleIcon className="w-5 h-5 text-red-500" />
//               )}
//               <span
//                 className={`text-sm font-semibold py-1 px-3 rounded-full ${getStatusStyle(
//                   ticket.status
//                 )}`}
//               >
//                 {ticket.status}
//               </span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Tickets;

import React from "react";

const Tickets = () => {
  const ticketData = [
    { title: "Room booking", status: "Accepted" },
    { title: "Event permission", status: "Accepted" },
    { title: "Meeting permission", status: "Rejected" },
    { title: "Event booking II", status: "Rejected" },
  ];

  const getStatusStyle = (status) => {
    return status === "Accepted"
      ? "text-green-600 bg-green-100"
      : "text-red-600 bg-red-100";
  };

  return (
    <div className="w-full p-4 mx-auto mt-4 bg-white rounded-lg shadow-xl sm:p-6 sm:mt-8 ">
      <h3 className="text-lg font-semibold text-indigo-500 sm:text-xl">
        Tickets
      </h3>
      <p className="mt-1 text-xs text-gray-500 sm:text-sm">
        Manage your recent requests
      </p>

      <ul className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
        {ticketData.map((ticket, index) => (
          <li key={index} className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 sm:text-base">
              {ticket.title}
            </span>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span
                className={`text-xs sm:text-sm font-semibold py-1 px-2 sm:px-3 rounded-full ${getStatusStyle(
                  ticket.status
                )}`}
              >
                {ticket.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tickets;