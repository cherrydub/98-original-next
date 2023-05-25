import React from "react";
import ProjectsContent from "./ProjectsContent";

export default function Projects() {
  return (
    <>
      <div className="window inline-flex flex-col">
        <div className="title-bar">
          <div className="title-bar-text">A Window With Stuff In It</div>
          <div className="title-bar-controls">
            <button className="bg-gray-300" aria-label="Minimize"></button>
            <button className="bg-gray-300" aria-label="Maximize"></button>
            <button className="bg-gray-300" aria-label="Close"></button>
          </div>
        </div>
        <div class="window-body">
          <div className="bg-white">
            <ProjectsContent />
          </div>
        </div>
      </div>
    </>
  );
}
