import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
 
  dueDate: {
     type:String,
     required:true
  },
}, { timestamps: true });

const Task = mongoose.models.task ||mongoose.model('task', taskSchema);
export default Task;