import mongoose from "mongoose";

const CalendarSchema = new mongoose.Schema({
    date: {
      type: Date,
      required: true,
    },
    tickets: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket',
    }],
    roomBookings: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
    }]
  });
  
  module.exports = mongoose.model('Calendar', CalendarSchema);