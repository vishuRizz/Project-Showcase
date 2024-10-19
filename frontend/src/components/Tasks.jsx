import React, { useState } from "react";

const Tasks = () => {
  // State to manage tasks with their completion status
  const [tasks, setTasks] = useState([
    { id: 1, title: "Lunch with Aman", date: "24 Oct 2022", completed: false },
    { id: 2, title: "Team basketball", date: "24 Oct 2022", completed: false },
    { id: 3, title: "Speed run", date: "24 Oct 2022", completed: false },
    {
      id: 4,
      title: "lalalala is lalalala",
      date: "24 Oct 2022",
      completed: false,
    },
    { id: 5, title: "FS assemble", date: "24 Oct 2022", completed: false },
    {
      id: 6,
      title: "Meeting with partners",
      date: "30 Nov 2021",
      completed: false,
    },
    {
      id: 7,
      title: "Web conference agenda",
      date: "24 Dec 2021",
      completed: false,
    },
  ]);

  // Toggle the completion status of a task
  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="p-5 mt-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-indigo-500">Tasks To Do</h3>
      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className="mr-2" // Adds some margin to the right of the checkbox
              />
              <span
                className={`${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
                onClick={() => toggleTaskCompletion(task.id)} // Toggle completion on click
              >
                {task.title}
              </span>
            </div>
            <span>{task.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;