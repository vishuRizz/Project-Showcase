import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    roomNumber: {
      type: String,
      required: true,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
    bookedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: function() {
        return this.isBooked;
      },
    },
    bookingDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket',
    }
  });
  
  module.exports = mongoose.model('Room', RoomSchema);