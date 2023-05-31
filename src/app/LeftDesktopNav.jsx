import React from "react";
//before hover/active
export default function LeftDesktopNav({
  activeComponents,
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
  return (
    <div className="navigation-desktop fixed left-2 top-3 text-white">
      <div className="mb-2 text-center flex flex-col items-center hover:bg-white hover:bg-opacity-25 p-1 cursor-pointer">
        <a href="">
          <img
            src="https://win98icons.alexmeub.com/icons/png/computer_explorer_cool-0.png"
            alt="home"
            width={"28px"}
          />
          <p className="text-white">Home</p>
        </a>
      </div>
      <div
        className={`mb-2 text-center flex flex-col items-center hover:bg-white hover:bg-opacity-25 p-1 cursor-pointer ${
          activeComponents.includes("Projects") ? "active" : ""
        }`}
        onClick={() => handleLinkClick("Projects")}
      >
        <img
          src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png"
          alt="projects"
          width={"28px"}
        />
        <p className="">Projects</p>
      </div>

      {/* CV Link */}
      <div
        className={`mb-2 text-center flex flex-col items-center hover:bg-white hover:bg-opacity-25 p-1 cursor-pointer ${
          activeComponents.includes("Cv") ? "active" : ""
        }`}
        onClick={() => handleLinkClick("Cv")}
      >
        <img
          src="https://win98icons.alexmeub.com/icons/png/message_file-0.png"
          alt="cv"
          width={"28px"}
        />
        <p className="">CV</p>
      </div>

      <div
        className={`mb-2 text-center flex flex-col items-center hover:bg-white hover:bg-opacity-25 p-1 cursor-pointer ${
          activeComponents.includes("Todo") ? "active" : ""
        }`}
        onClick={() => handleLinkClick("Todo")}
      >
        <img
          src="https://win98icons.alexmeub.com/icons/png/notepad-5.png"
          alt="todo"
          width={"28px"}
        />
        <p className="">Todo</p>
      </div>

      <div
        className={`mb-2 text-center flex flex-col items-center hover:bg-white hover:bg-opacity-25 p-1 cursor-pointer ${
          activeComponents.includes("Memes") ? "active" : ""
        }`}
        onClick={() => handleLinkClick("Memes")}
      >
        <img
          src="https://win98icons.alexmeub.com/icons/png/briefcase-2.png"
          alt="memes"
          width={"28px"}
        />
        <p className="">Memes</p>
      </div>

      {/* <div
        className={`mb-2 text-center flex flex-col items-center ${
          activeComponents.includes("Timer") ? "active" : ""
        }`}
        onClick={() => handleLinkClick("Timer")}
      >
        <img
          src="https://win98icons.alexmeub.com/icons/png/clock-1.png"
          alt="timer"
          width={"28px"}
        />
        <p className="">Timer</p>
      </div> */}

      <div className="mb-2 text-center flex flex-col items-center hover:bg-white hover:bg-opacity-25 p-1 cursor-pointer ">
        <a href="https://github.com/cherrydub" target="_blank">
          <img
            src="https://win98icons.alexmeub.com/icons/png/msie1-2.png"
            alt="GitHub"
            width={"28px"}
          />
          <p className="text-white">GitHub</p>
        </a>
      </div>

      {/* <div className="mb-2 text-center flex flex-col items-center ">
        <img
          src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs_2k-4.png"
          alt="other"
          width={"28px"}
        />
        <p className="">Other</p>
      </div>
      <div className="mb-2 text-center flex flex-col items-center">
        <img
          src="https://win98icons.alexmeub.com/icons/png/directory_closed-4.png"
          alt="misc"
          width={"28px"}
        />
        <p className="">Misc</p>
      </div> */}

      <div className="mb-2 text-center flex flex-col items-center hover:bg-white hover:bg-opacity-25 p-1 cursor-pointer ">
        <img
          // onClick={() => {
          //   setWindowDisplayed("Counter");
          // }}
          src="https://win98icons.alexmeub.com/icons/png/outlook_express-4.png"
          alt="email"
          width={"28px"}
        />
        <p className="">Contact</p>
      </div>
    </div>
  );
}
