import React from "react";
import MemesContent from "./MemesContent";

export default function Memes({ activeComponents, removeActiveComponent }) {
  const handleLinkClick = (event) => {
    //this prevents any background event clickers to work, such as removing and readding the active component
    event.stopPropagation();
    removeActiveComponent("Memes");
  };

  const isActive =
    (activeComponents ?? []).length > 0 && activeComponents[0] === "Memes";
  const titleBarClassName = `title-bar${isActive ? "" : " inactive"}`;

  return (
    <div className="">
      {/* <div className="flex justify-center"> */}
      <div className="window inline-flex flex-col">
        <div className={titleBarClassName}>
          <div className="title-bar-text flex cursor-default">
            <img
              className="btn pr-1"
              src="https://win98icons.alexmeub.com/icons/png/briefcase-1.png"
              alt=""
            />
            Memes
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
          <div className="bg-white">
            <MemesContent />
          </div>
        </div>
      </div>
    </div>
  );
}
