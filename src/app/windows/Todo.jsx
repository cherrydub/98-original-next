import React from "react";
import TodoContent from "./TodoContent";

export default function Todo({ activeComponents, removeActiveComponent }) {
  const handleLinkClick = (event) => {
    //this prevents any background event clickers to work, such as removing and readding the active component
    event.stopPropagation();
    removeActiveComponent("Todo");
  };

  const isActive =
    (activeComponents ?? []).length > 0 && activeComponents[0] === "Todo";
  const titleBarClassName = `title-bar${isActive ? "" : " inactive"}`;

  return (
    <div className="">
      <div className="window inline-flex flex-col">
        <div className={titleBarClassName}>
          <div className="title-bar-text flex">
            <img
              src="https://win98icons.alexmeub.com/icons/png/notepad-3.png"
              alt=""
            />
            Todo
          </div>
          <div className="title-bar-controls">
            <button className="bg-gray-300" aria-label="Minimize"></button>
            <button className="bg-gray-300" aria-label="Maximize"></button>
            <button
              onClick={handleLinkClick}
              className="bg-gray-300 btn"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="window-body">
          <div className="bg-white font-bold">
            <TodoContent />
          </div>
        </div>
      </div>
    </div>
  );
}
