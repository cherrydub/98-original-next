import React from "react";

export default function LeftDesktopNav({ addActiveComponent }) {
  const handleLinkClick = (componentName) => {
    addActiveComponent(componentName);
  };

  return (
    <div className="navigation-desktop fixed left-3 top-5 space-y-3 text-white">
      <div className="mb-2 text-center flex flex-col items-center">
        <a href="">
          <img
            src="https://win98icons.alexmeub.com/icons/png/computer_explorer_cool-0.png"
            alt="home"
            width={"28px"}
          />
          <p className="">Home</p>
        </a>
      </div>
      <div
        className="mb-2 text-center flex flex-col items-center"
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
        className="mb-2 text-center flex flex-col items-center"
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
        className="mb-2 text-center flex flex-col items-center"
        onClick={() => handleLinkClick("Todo")}
      >
        <img
          src="https://win98icons.alexmeub.com/icons/png/notepad-5.png"
          alt="todo"
          width={"28px"}
        />
        <p className="">Todo</p>
      </div>
    </div>
  );
}
