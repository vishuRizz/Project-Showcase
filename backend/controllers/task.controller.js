import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
    const { title, description, dueDate } = req.body;
  
    try {
      const newTask = new Task({
        title,
        description,
        dueDate,
      });
      
      await newTask.save();
      res.status(201).json({ message: "Form entry created successfully", task: newTask });
    } catch (error) {
      res.status(500).json({ message: "Error creating form entry", error: error.message });
    }
  };
export const getTask = async (req, res) => {
    try {
      const task = await Task.find();
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error fetching forms", error: error.message });
    }
  };
export const getTaskById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const task = await Task.findById(id);
      if (!task) return res.status(404).json({ message: "Task not found" });
  
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error fetching form", error: error.message });
    }
  };