import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaClock, FaEdit, FaTag, FaCalendarAlt } from 'react-icons/fa';

const Ticket = () => {
  const { id } = useParams(); 
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/tickets/singleticket/${id}`);
        setTicket(res.data); 
      } catch (error) {
        console.error("Error fetching the ticket:", error);
      }
    };
    fetchTicket();
  }, [id]);

  const handleApprove = async () => {
    try {
      await axios.post(`http://localhost:3000/api/tickets/acceptticket/${id}`);
      alert("Ticket approved!"); 
      
    } catch (error) {
      console.error("Error approving ticket:", error);
      alert("Error approving ticket.");
    }
  };

  const handleDeny = async () => {
    try {
      await axios.post(`http://localhost:3000/api/tickets/ignoreticket/${id}`);
      alert("Ticket denied!"); 
      
    } catch (error) {
      console.error("Error denying ticket:", error);
      alert("Error denying ticket.");
    }
  };

  if (!ticket) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold">Loading...</p> {/* Loading state */}
      </div>
    );
  }

  const { title, content, review, status, type, createdAt, updatedAt } = ticket;

  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-xl">
        <h1 className="mb-4 text-3xl font-extrabold text-center text-gray-800">{title}</h1>
        
        <div className="space-y-6">
          {/* Ticket Type */}
          <div className="flex items-center space-x-3">
            <FaTag className="text-gray-500" />
            <div>
              <span className="block text-sm text-gray-500">Type</span>
              <p className="text-lg font-semibold text-gray-700">{type}</p>
            </div>
          </div>
          
          {/* Ticket Content */}
          <div className="flex items-center space-x-3">
            <FaEdit className="text-gray-500" />
            <div>
              <span className="block text-sm text-gray-500">Content</span>
              <p className="text-lg font-semibold text-gray-700">{content}</p>
            </div>
          </div>

          {/* Ticket Review */}
          <div className="flex items-center space-x-3">
            <FaClock className="text-gray-500" />
            <div>
              <span className="block text-sm text-gray-500">Review</span>
              <p className="text-lg font-semibold text-gray-700">{review}/5</p>
            </div>
          </div>

          {/* Ticket Status */}
          <div className="flex items-center space-x-3">
            <div>
              <span className="block text-sm text-gray-500">Status</span>
              <p className={`text-lg font-semibold ${status === 'pending' ? 'text-yellow-500' : 'text-green-500'}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </p>
            </div>
          </div>

          {/* Created At */}
          <div className="flex items-center space-x-3">
            <FaCalendarAlt className="text-gray-500" />
            <div>
              <span className="block text-sm text-gray-500">Created At</span>
              <p className="text-lg font-semibold text-gray-700">{new Date(createdAt).toLocaleString()}</p>
            </div>
          </div>

          {/* Updated At */}
          <div className="flex items-center space-x-3">
            <FaCalendarAlt className="text-gray-500" />
            <div>
              <span className="block text-sm text-gray-500">Updated At</span>
              <p className="text-lg font-semibold text-gray-700">{new Date(updatedAt).toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-around mt-6">
          <button
            onClick={handleApprove}
            className="flex items-center justify-center px-4 py-2 text-white transition duration-300 bg-green-500 rounded-lg shadow-lg hover:bg-green-600"
          >
            Approve
          </button>
          <button
            onClick={handleDeny}
            className="flex items-center justify-center px-4 py-2 text-white transition duration-300 bg-red-500 rounded-lg shadow-lg hover:bg-red-600"
          >
            Deny
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute p-3 transform -translate-x-1/2 rounded-full shadow-md -top-10 left-1/2 bg-gradient-to-r from-pink-500 to-purple-600">
          <span className="text-4xl font-bold text-white">#</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
