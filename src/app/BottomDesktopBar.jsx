import React, { useState } from "react";
import LocalTime from "./components/LocalTime";
import displayicon from "../../public/icons/16x16/display-tab.png";

export default function BottomDesktopBar({
  activeComponents,
  setActiveComponents,
  addActiveComponent,
  removeActiveComponent,
}) {
  const handleLinkClick = (componentName) => {
    if (activeComponents.includes(componentName)) {
      removeActiveComponent(componentName);
      addActiveComponent(componentName);
    } else {
      addActiveComponent(componentName);
    }
  };

  const icons = {
    Welcome: "https://win98icons.alexmeub.com/icons/png/console_prompt-1.png",
    Contact: "https://win98icons.alexmeub.com/icons/png/message_file-1.png",
    Cv: "https://win98icons.alexmeub.com/icons/png/message_file-1.png",
    IE: "https://win98icons.alexmeub.com/icons/png/message_file-1.png",
    Memes: "https://win98icons.alexmeub.com/icons/png/briefcase-1.png",
    Projects:
      "https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-3.png",
    Timer: "https://win98icons.alexmeub.com/icons/png/clock-0.png",
    Todo: "https://win98icons.alexmeub.com/icons/png/notepad-3.png",
    Display:
      "https://win98icons.alexmeub.com/icons/png/display_properties-1.png",
  };

  const [switchOn, setSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setSwitchOn((prevState) => !prevState);
    if (switchOn) {
      setActiveComponents([]);
    } else {
      addActiveComponent("Cv");
      addActiveComponent("Projects");
      addActiveComponent("Todo");
      addActiveComponent("Memes");
      // addActiveComponent("Contact");
      addActiveComponent("Welcome");
    }
  };

  return (
    <div className="start-bar flex">
      <div className="flex-initial start-button-wrapper text-center justify-center items-center self-center ">
        <img
          onClick={toggleSwitch}
          className=""
          src="https://win98icons.alexmeub.com/images/start-button.png"
          width={"35px"}
          alt=""
        />
      </div>
      <div className="flex-auto mx-2 flex">
        <div
          className={` ${activeComponents.includes("Display") ? "active" : ""}`}
          onClick={() => handleLinkClick("Display")}
        >
          <img
            className=""
            src={displayicon.src}
            alt="displayicon"
            width={"14px"}
            style={{ marginRight: "5px" }}
            title="Display Settings"
          />
        </div>

        {activeComponents.map((window) => {
          if (window === "Display") {
            return null; // Skip rendering "Display" component
          }
          return activeComponents[0] === window ? (
            <div
              className=" bg-gray-300 start-bar-tabs-active flex-auto text-center justify-center items-center inline cursor-default"
              key={window}
            >
              <img
                className="inline"
                src={icons[window]}
                alt=""
                width={"14px"}
              />{" "}
              <span className="font-bold ">{window}</span>
            </div>
          ) : (
            <div
              className="start-bar-tabs-inactive flex-auto text-center justify-center items-center inline cursor-default"
              key={window}
            >
              <img
                className="inline"
                src={icons[window]}
                alt=""
                width={"14px"}
              />{" "}
              {window}
            </div>
          );

          // <div
          //   className="start-bar-tabs flex-auto text-center justify-center items-center"
          //   key={window}
          // >
          //   {window}
          // </div>
        })}
      </div>
      <div
        className="start-bar-time flex-initial text-center justify-center items-center"
        onClick={() => handleLinkClick("Timer")}
      >
        <LocalTime />
      </div>
    </div>
  );
}
