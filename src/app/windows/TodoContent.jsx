import React, { useState } from "react";

export default function TodoContent({ setTaskTheme }) {
  const [tasks, setTasks] = useState([
    "Finish memes dynamic listing",
    "Make contact page",
    "Fix status bar squish on mobile, right-side component especially",
    "Personal 98 login for diff desktops",
    "Allow additional todo's and notes",
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
      <div
        className="flex flex-col flex-wrap p-2 gap-2"
        style={{
          fontFamily: "RobotoMonoRegular",
          // minWidth: "300px",
        }}
      >
        <div>
          <div className="flex flex-row">
            {/* <div className="">theme color:</div> */}
          </div>

          <ol className="pl-5 list-disc">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="border-b border-black"
                style={{}}
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
          <div className="flex">
            <div>
              {" "}
              <input
                className=""
                type="text"
                placeholder="add task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button className="bg-gray-300" type="submit">
                +
              </button>
            </div>

            <div className="flex flex-row flex-grow justify-around items-center">
              <div
                onClick={() => setTaskTheme("bg-red-200")}
                className="w-2 h-2 bg-red-200 border border-black cursor-pointer m-1"
              ></div>
              <div
                onClick={() => setTaskTheme("bg-orange-200")}
                className="w-2 h-2 bg-orange-200 border border-black cursor-pointer m-1"
              ></div>
              <div
                onClick={() => setTaskTheme("bg-yellow-100")}
                className="w-2 h-2 bg-yellow-100 border border-black cursor-pointer m-1"
              ></div>
              <div
                onClick={() => setTaskTheme("bg-green-200")}
                className="w-2 h-2 bg-green-200 border border-black cursor-pointer m-1"
              ></div>
              <div
                onClick={() => setTaskTheme("bg-blue-200")}
                className="w-2 h-2 bg-blue-200 border border-black cursor-pointer m-1"
              ></div>
              <div
                onClick={() => setTaskTheme("bg-indigo-200")}
                className="w-2 h-2 bg-indigo-200 border border-black cursor-pointer m-1"
              ></div>
              <div
                onClick={() => setTaskTheme("bg-violet-200")}
                className="w-2 h-2 bg-violet-200 border border-black cursor-pointer m-1"
              ></div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
