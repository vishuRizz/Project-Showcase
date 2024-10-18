import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    eventName: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    approved: {
      type: Boolean,
      default: false,
    },
    approvalTicket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket',
    }
  });
  
  module.exports = mongoose.model('Event', EventSchema);