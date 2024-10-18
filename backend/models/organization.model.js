import mongoose from "mongoose";


const OrganizationSchema = new mongoose.Schema({

    username:{
      type:String,
      unique:true,
      required:true
    },
    password:{
      type:String,
      required:true,
      select:true
    },

    organizationType: {
      type: String,
      enum: ['Parent', 'Working'],
      required: true,
      default:'Working'
    },
    members: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    tickets: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket',
    }],
    createdAt: {
      type: Date,
      default: Date.now,
    }
  });
  
  const Organization = mongoose.models.organization || mongoose.model('organization',OrganizationSchema)
export default Organization;