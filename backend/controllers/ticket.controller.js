import Ticket from "../models/ticket.model.js";

export const createTicket = async (req, res) => {
    const { title, content, review } = req.body;
  
    try {
      const newTicket = new Ticket({
        title,
        content,
        review,
      });
      
      await newTicket.save();
      res.status(201).json({ message: "Form entry created successfully", ticket: newTicket });
    } catch (error) {
      res.status(500).json({ message: "Error creating form entry", error: error.message });
    }
  };

export const acceptTicket = async(req,res)=>{
    const { id } = req.params;
 
    try {
        const ticket = await Ticket.findByIdAndUpdate(id, { status: 'accepted' }, { new: true });
        
        if (!ticket) {
          return res.status(404).json({ message: "Form not found" });
        }
    
        res.status(200).json({ message: "Form accepted successfully", ticket });
      } catch (error) {
        res.status(500).json({ message: "Error accepting form", error: error.message });
      }
    };
export const ignoreTicket = async(req,res)=>{
    const { id } = req.params;
     
    try {
        const ticket = await Ticket.findByIdAndUpdate(id, { status: 'ignored' }, { new: true });
        
        if (!ticket) {
          return res.status(404).json({ message: "ticket not found" });
        }
    
        res.status(200).json({ message: "Ticket ignored successfully", ticket });
      } catch (error) {
        res.status(500).json({ message: "Error ignoring ticket", error: error.message });
      }
};
export const getTicket = async (req, res) => {
    try {
      const ticket = await Ticket.find();
      res.status(200).json(ticket);
    } catch (error) {
      res.status(500).json({ message: "Error fetching forms", error: error.message });
    }
  };
    export const getTicketById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const ticket = await Ticket.findById(id);
      if (!form) return res.status(404).json({ message: "Form not found" });
  
      res.status(200).json(ticket);
    } catch (error) {
      res.status(500).json({ message: "Error fetching form", error: error.message });
    }
  };