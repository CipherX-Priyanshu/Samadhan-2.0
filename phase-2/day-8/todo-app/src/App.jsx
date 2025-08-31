import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task Function
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  // Toggle Complete
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Delete Task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Handle Enter Key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6"> TO-DO List</h1>

      {/* Input + Button */}
      <div className="flex gap-2 mb-6 w-full max-w-md">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a task..."
          className="flex-1 px-4 py-2 rounded-lg text-black focus:outline-none"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="w-full max-w-md">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-800 px-4 py-2 mb-2 rounded-lg"
          >
            <span
              onClick={() => toggleComplete(index)}
              className={`cursor-pointer ${
                t.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {t.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded-lg text-sm"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
