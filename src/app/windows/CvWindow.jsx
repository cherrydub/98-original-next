import React from "react";
import CvContent from "./CvContent";

export default function CvWindow() {
  return (
    <div className="">
      {/* <div className="flex justify-center"> */}
      <div
        className="window flex-col w-auto h-auto"
        style={{ minWidth: "80%", maxWidth: "100%" }}
      >
        <div className="title-bar">
          <div className="title-bar-text flex">
            <img
              src="https://win98icons.alexmeub.com/icons/png/notepad-3.png"
              alt=""
            />
            CV
          </div>
          <div className="title-bar-controls">
            <button className="bg-gray-300" aria-label="Minimize"></button>
            <button className="bg-gray-300" aria-label="Maximize"></button>
            <button className="bg-gray-300" aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body flex-grow">
          <CvContent />
        </div>
      </div>
    </div>
  );
}
