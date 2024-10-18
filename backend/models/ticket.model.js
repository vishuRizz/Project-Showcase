import mongoose from "mongoose";
const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  review: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  type:{
   type:String,
   enum:['meeting','event'],
   required: true,
   default:'meeting',
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'ignored'],  // Allowed values
    default: 'pending',  // Default status is pending
  },
}, { timestamps: true });

const Ticket = mongoose.models.ticket ||mongoose.model('ticket', ticketSchema);
export default Ticket;