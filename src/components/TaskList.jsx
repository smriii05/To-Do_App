import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleComplete, deleteTask }) => (
  <div className="w-full max-w-md">
    {tasks.length ? (
      tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))
    ) : (
      <p className="text-gray-500 text-center">No tasks yet!</p>
    )}
  </div>
);

export default TaskList;
