import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className="flex gap-2 mb-4 w-full max-w-md">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
        className="border border-gray-700 bg-gray-800 text-white rounded-md p-2 w-full placeholder-gray-400 focus:outline-none"
      />
      <button
        onClick={handleAddTask}
        className="bg-[#57A16D] text-helvetica text-white px-4 py-2 rounded-md hover:bg-[#F0B142]"
      >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
      </svg>
      </button>
    </div>
  );
};

export default TaskInput;
