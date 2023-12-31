// TaskApp.js

import React, { useState } from "react";
import "./App.css"; // Importing custom styles
import mySvg from "./TaskDone.svg";
import AddTask from "./components/AddTask"; // Importing the AddTask component

const App = () => {
  // State for managing tasks
  const [tasks, setTasks] = useState([]);

  // Function to handle toggling task completion status
  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Function to handle deleting a task
  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    // Main container grid
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 h-full gap-5 m-1 mt-5 p-5 md:p-10 justify-items-center">
      {/* Title and AddTask section */}
      <div className="text-center">
        {/* Main title */}
        <h1 className="lg:text-7xl text-4xl text-yellow-500 font-bold mb-5">
          Get Things Done✅
        </h1>
        {/* AddTask component */}
        <AddTask tasks={tasks} setTasks={setTasks} />
        {/* Image */}
        <img
          src={mySvg}
          alt="Image_TaskDone"
          className="lg:w-96 sm:ml-2 lg:ml-28 pic"
        />
      </div>
      {/* List of Tasks section */}
      <div className="second w-full h-full lg:mx-5 px-5 rounded">
        {/* Task List Title */}
        <h1 className="text-3xl text-yellow-300 mb-10 mt-5 font-bold">
          {tasks.length === 0 ? "Don't have any Task today?" : "Task List 📃"}
        </h1>
        {/* Task List */}
        <ul className="list-none">
          {/* Individual Task */}
          {tasks.map((task, index) => (
            <li key={index} className="mb-3">
              <div className="flex items-center">
                {/* Checkbox for task completion */}
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(index)}
                  className="mr-2 h-5 w-5 text-blue-500"
                />
                {/* Task name */}
                <span
                  className={`flex-initial md:w-96 text-yellow-300 md:text-xl px-2 py-1 ${
                    task.completed ? "line-through" : ""
                  }`}
                >
                  {task.name}
                </span>
                {/* Delete button */}
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="ml-auto text-red-500 font-bold px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
