import React from "react";
import ProjectsContent from "./ProjectsContent";

export default function Projects() {
  return (
    <>
      <div className="window inline-flex flex-col">
        <div className="title-bar">
          <div className="title-bar-text">Projects</div>
          <div className="title-bar-controls">
            <button className="bg-gray-300" aria-label="Minimize"></button>
            <button className="bg-gray-300" aria-label="Maximize"></button>
            <button className="bg-gray-300" aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <div className="bg-white">
            <ProjectsContent />
          </div>
        </div>
      </div>
    </>
  );
}
