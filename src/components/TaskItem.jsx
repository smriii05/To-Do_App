const TaskItem = ({ task, toggleComplete, deleteTask }) => (
    <div className="flex items-center bg-darkBg text-primaryText shadow-md p-3 mb-2 rounded-md">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        className="cursor-pointer mr-2"
      />
      <span
        className={`flex-grow ${
          task.completed ? "line-through text-completedText" : "text-primaryText"
        }`}
      >
        {task.title}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        className="ml-auto bg-danger text-white px-3 py-1 rounded-md hover:bg-red-700"
      >
        x
      </button>
    </div>
  );
  
  export default TaskItem;
  