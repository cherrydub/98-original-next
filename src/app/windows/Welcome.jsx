import React from "react";
import WelcomeContent from "./WelcomeContent";

export default function Welcome({ activeComponents, removeActiveComponent }) {
  const handleLinkClick = (event) => {
    //this prevents any background event clickers to work, such as removing and readding the active component
    event.stopPropagation();
    removeActiveComponent("Welcome");
  };

  const isActive =
    (activeComponents ?? []).length > 0 && activeComponents[0] === "Welcome";
  const titleBarClassName = `title-bar${isActive ? "" : " inactive"}`;

  return (
    <div className="">
      {/* <div className="flex justify-center"> */}
      <div className="window inline-flex flex-col">
        <div className={titleBarClassName}>
          <div className="title-bar-text flex cursor-default">
            <img
              className="btn"
              src="https://win98icons.alexmeub.com/icons/png/console_prompt-1.png"
              alt="welcome"
            />
            C:\WINDOWS\System32.cmd.exe
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
        {/* <div className="window-body"> */}
        <div className="bg-black ">
          <WelcomeContent />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
