import React from "react";
import CvContent from "./CvContent";

export default function Cv({ activeComponents, removeActiveComponent }) {
  const handleLinkClick = (event) => {
    //this prevents any background event clickers to work, such as removing and readding the active component
    event.stopPropagation();
    removeActiveComponent("Cv");
  };

  const handleSizeClick = () => {};

  const isActive =
    (activeComponents ?? []).length > 0 && activeComponents[0] === "Cv";
  const titleBarClassName = `title-bar${isActive ? "" : " inactive"}`;

  return (
    <div className="">
      {/* <div className="flex justify-center"> */}
      <div
        className="window"
        // style={{ minWidth: "85vw", maxWidth: "100%" }}
      >
        <div className={titleBarClassName}>
          <div className="title-bar-text flex cursor-default">
            <img
              className="btn"
              src="https://win98icons.alexmeub.com/icons/png/message_file-1.png"
              alt=""
            />
            CV
          </div>
          <div className="title-bar-controls">
            <button className="bg-gray-300" aria-label="Minimize"></button>
            <button
              onClick={handleSizeClick}
              className="bg-gray-300"
              aria-label="Maximize"
            ></button>
            <button
              onClick={handleLinkClick}
              className="bg-gray-300 btn"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="window-body">
          <CvContent />
        </div>
      </div>
    </div>
  );
}
