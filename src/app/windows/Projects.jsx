import React from "react";
import ProjectsContent from "./ProjectsContent";

export default function Projects({ activeComponents, removeActiveComponent }) {
  const handleLinkClick = (event) => {
    //this prevents any background event clickers to work, such as removing and readding the active component
    event.stopPropagation();
    removeActiveComponent("Projects");
  };

  const isActive =
    (activeComponents ?? []).length > 0 && activeComponents[0] === "Projects";
  const titleBarClassName = `title-bar${isActive ? "" : " inactive"}`;

  return (
    <div className="">
      <div className="window inline-flex flex-col">
        <div className={titleBarClassName}>
          <div className="title-bar-text flex">
            <img
              src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-3.png"
              alt=""
            />
            Projects
          </div>
          <div className="title-bar-controls">
            <button className="bg-gray-300" aria-label="Minimize"></button>
            <button className="bg-gray-300" aria-label="Maximize"></button>
            <button
              onClick={handleLinkClick}
              className="bg-gray-300"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="window-body">
          <div className="bg-white">
            <ProjectsContent />
          </div>
        </div>
      </div>
    </div>
  );
}
