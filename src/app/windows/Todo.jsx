import React from "react";
import TodoContent from "./TodoContent";

export default function Todo() {
  return (
    <>
      <div className="window inline-flex flex-col">
        <div className="title-bar">
          <div className="title-bar-text">Todo List</div>
          <div className="title-bar-controls">
            <button className="bg-gray-300" aria-label="Minimize"></button>
            <button className="bg-gray-300" aria-label="Maximize"></button>
            <button className="bg-gray-300" aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <div className="bg-white">
            <TodoContent />
          </div>
        </div>
      </div>
    </>
  );
}
