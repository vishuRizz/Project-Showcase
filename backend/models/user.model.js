import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select:true
  },
  role: {
    type: String,
    enum: ['Parent', 'Working', 'Admin'],
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization',
  },
  tickets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ticket',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const User = mongoose.models.user || mongoose.model('user',UserSchema);
export default User;