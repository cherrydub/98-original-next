import React from "react";
import CvContent from "./CvContent";

export default function Cv({ removeActiveComponent }) {
  const handleLinkClick = (event) => {
    //this prevents any background event clickers to work, such as removing and readding the active component
    event.stopPropagation();
    removeActiveComponent("Cv");
  };
  return (
    <div className="">
      {/* <div className="flex justify-center"> */}
      <div
        className="window flex-col w-auto h-auto"
        style={{ minWidth: "85vw", maxWidth: "100%" }}
      >
        <div className="title-bar">
          <div className="title-bar-text flex">
            <img
              src="https://win98icons.alexmeub.com/icons/png/message_file-1.png"
              alt=""
            />
            CV
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
        <div className="window-body flex-grow">
          <CvContent />
        </div>
      </div>
    </div>
  );
}
