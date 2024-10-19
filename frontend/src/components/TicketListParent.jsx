import React from "react";
import { useNavigate } from "react-router-dom";

const TicketList = ({ title, tickets }) => {
  const navigate = useNavigate()
  return (
    <div className="p-5 bg-white rounded-lg shadow-lg">
      <h3 className="mb-4 text-lg font-semibold text-indigo-600">{title}</h3>
      <div className="space-y-4">
        {tickets.length > 0 ? (
          tickets.map((ticket, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div>
                <h4 className="font-semibold">{ticket.title}</h4>
                <p className="text-sm text-gray-600">
                  Date: {new Date(ticket.createdAt).toLocaleDateString()} | Type: {ticket.type}
                </p>
                <p className="text-sm text-gray-500">Status: {ticket.status}</p>
              </div>
              <div>
                <button
                onClick={()=>{
                  navigate(`/ticket/${ticket._id}`)
                }}
                 className="px-3 py-1 mr-2 text-xs text-white bg-indigo-500 rounded">
                  View Details
                </button>
                <p className="px-3 py-1 mt-2 text-xs text-white bg-purple-500 rounded">
                  {ticket.status}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No {title.toLowerCase()} yet.</p>
        )}
      </div>
    </div>
  );
};

export default TicketList;
