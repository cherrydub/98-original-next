import React from "react";
import MemesContent from "./MemesContent";

export default function Memes() {
  return (
    <>
      <div className="window inline-flex flex-col">
        <div className="title-bar">
          <div className="title-bar-text">Memes</div>
          <div className="title-bar-controls">
            <button className="bg-gray-300" aria-label="Minimize"></button>
            <button className="bg-gray-300" aria-label="Maximize"></button>
            <button className="bg-gray-300" aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <div className="bg-white">
            <MemesContent />
          </div>
        </div>
      </div>
    </>
  );
}
