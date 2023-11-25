// TaskApp.js

import React, { useState } from "react";
import "./TaskApp.css";

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Task List</h1>

      <ul className="task-list space-y-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item flex justify-between items-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 ${
              task.completed
                ? "line-through text-gray-400 dark:text-gray-600"
                : ""
            }`}
          >
            <span>{task.name}</span>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(index)}
                className="mr-2 form-checkbox"
              />
              <button
                onClick={() => handleDeleteTask(index)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="add-task-container mt-8">
        <label className="block mb-2 text-lg font-medium">Add New Task:</label>
        <div className="flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="add-task-input flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleAddTask}
            className="add-task-button px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
