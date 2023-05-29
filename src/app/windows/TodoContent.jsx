import React, { useState } from "react";

export default function TodoContent() {
  const [tasks, setTasks] = useState([
    "Finish memes dynamic listing",
    "Make contact page",
    "Add btc/eth pricing",
    "Add shadow to text buttons",
    "Positioning, Positioning, Positioning",
    "Status bar field classname",
    "scrollable windows so doesnt make desktop scroll",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleTaskClick = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="flex flex-col flex-wrap p-4 gap-4">
        <div>
          <ol className="pl-5 list-disc">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="border-b"
                onClick={() => handleTaskClick(index)}
                onMouseEnter={(e) => {
                  e.target.style.textDecoration = "line-through";
                  e.target.style.cursor = "pointer";
                }}
                onMouseLeave={(e) => {
                  e.target.style.textDecoration = "none";
                  e.target.style.cursor = "auto";
                }}
              >
                {task}
              </li>
            ))}
          </ol>
        </div>

        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="add task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="bg-gray-300" type="submit">
            +
          </button>
        </form>
      </div>
    </>
  );
}
