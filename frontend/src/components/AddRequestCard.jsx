import axios from "axios";
import React, { useEffect, useState } from "react";

const AddRequestCard = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("")
  const [review, setReview] = useState(2)
console.log(title, content, review)

    const postreq = async () =>{
      try {
        const res =  await axios.post("http://localhost:3000/api/tickets/addticket", 
          {title, content, review}
        )
        console.log(res, "worked")
        alert("done")
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
      }
    }
  
  const submitButton=()=>{
    postreq()
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedType(null); 
  };

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <div className="p-5 text-white bg-indigo-500 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Add New Request</h3>
        <button
          onClick={openModal}
          className="px-4 py-2 mt-6 text-indigo-500 bg-white rounded"
        >
          Add Request
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blurred background */}
          <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>

          {/* Modal Content */}
          <div className="relative z-10 flex p-6 bg-white rounded-lg shadow-lg w-[700px] space-x-6">
            <div className="flex flex-col w-1/2">
              <h2 className="mb-4 text-lg font-semibold">Select Request Type</h2>
              <button
                onClick={() => handleTypeSelection("Event")}
                className={`p-3 mb-4 text-white rounded ${
                  selectedType === "Event"
                    ? "bg-indigo-600"
                    : "bg-indigo-400 hover:bg-indigo-500"
                }`}
              >
                Event
              </button>
              <button
                onClick={() => handleTypeSelection("Meeting")}
                className={`p-3 mb-4 text-white rounded ${
                  selectedType === "Meeting"
                    ? "bg-indigo-600"
                    : "bg-indigo-400 hover:bg-indigo-500"
                }`}
              >
                Meeting
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 mt-6 text-gray-700 bg-gray-200 rounded"
              >
                Cancel
              </button>
            </div>

            {/* Side Popup Form */}
            {selectedType && (
              <div className="flex flex-col w-1/2 space-y-4">
                <h2 className="text-lg font-semibold">{selectedType} Details</h2>
                
                {/* Title */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Title</label>
                  <input
                  onChange={(e)=>{
                    setTitle(e.target.value)
                  }}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter title of the request"
                  />
                </div>

                {/* Description */}
                <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">Description</label>
                <textarea
                  onChange={(e) => {
                    setContent(e.target.value); 
                  }}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Describe your request"
                />
              </div>

                {/* Date */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Date</label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Time */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Time</label>
                  <input
                    type="time"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* File Upload */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Upload File</label>
                  <input
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Additional Requests */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">
                    Additional Requests
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter any additional requests"
                  />
                </div>

                <button
                onClick={submitButton}
                className="px-4 py-2 text-white bg-indigo-500 rounded">
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddRequestCard;
