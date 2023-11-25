// AddTask.js

import { useState } from "react";

// Functional component for adding tasks
export default function AddTask({ tasks, setTasks }) {
  // State for managing the new task input
  const [newTask, setNewTask] = useState("");

  // Function to handle adding a new task
  const handleAddTask = () => {
    // Check if the new task is not empty
    if (newTask.trim() !== "") {
      // Add the new task to the tasks array
      setTasks([...tasks, { name: newTask, completed: false }]);
      // Clear the input field after adding the task
      setNewTask("");
    }
  };

  return (
    // AddTask component container
    <div className="m-2 sm:p-2 text-center">
      {/* Input field for new task */}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border border-blue-500 px-3 py-2 rounded"
        placeholder="Enter your task..."
      />
      {/* Button to add a new task */}
      <button
        onClick={handleAddTask}
        className="ml-2 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Add Task
      </button>
    </div>
  );
}
