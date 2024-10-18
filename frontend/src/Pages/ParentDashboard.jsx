import React, { useEffect, useState } from "react";
import TicketList from "../components/TicketListParent";
import axios from "axios";

const ParentDashboard = () => {
  const [tickets, setTickets] = useState([]); // Use plural for better clarity

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/tickets/alltickets");
        setTickets(res.data); // Update state with fetched tickets
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };
    fetchTicket();
  }, []);

  return (
    <div className="w-4/5 p-6 space-y-6">
      <div className="grid grid-cols-2 gap-6">
        {/* Pass the tickets array and title */}
        <TicketList title="Tickets" tickets={tickets} />
      </div>
    </div>
  );
};

export default ParentDashboard;
