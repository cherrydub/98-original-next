import React from "react";

export default function LeftDesktopNav() {
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
      <div className="mb-2 text-center flex flex-col items-center">
        <img
          // onClick={() => {
          //   setWindowDisplayed("Projects");
          // }}
          src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png"
          alt="projects"
          width={"28px"}
        />
        <p className="">Projects</p>
      </div>
      <div className="mb-2 text-center flex flex-col items-center">
        <img
          // onClick={() => {
          //   setWindowDisplayed("Cv");
          // }}
          src="https://win98icons.alexmeub.com/icons/png/notepad-5.png"
          alt="cv"
          width={"28px"}
        />
        <p className="">CV</p>
      </div>
      <div className="mb-2 text-center flex flex-col items-center">
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
      </div>
      <div className="mb-2 text-center flex flex-col items-center">
        <img
          // onClick={() => {
          //   setWindowDisplayed("Counter");
          // }}
          src="https://win98icons.alexmeub.com/icons/png/briefcase-2.png"
          alt="folder"
          width={"28px"}
        />
        <p className="">Memes</p>
      </div>
      <div className="mb-2 text-center flex flex-col items-center">
        <img
          // onClick={() => {
          //   setWindowDisplayed("Counter");
          // }}
          src="https://win98icons.alexmeub.com/icons/png/msie1-2.png"
          alt="website"
          width={"28px"}
        />
        <p className="">Website</p>
      </div>
      <div className="mb-2 text-center flex flex-col items-center">
        <img
          // onClick={() => {
          //   setWindowDisplayed("Counter");
          // }}
          src="https://win98icons.alexmeub.com/icons/png/outlook_express-4.png"
          alt="email"
          width={"28px"}
        />
        <p className="">E-mail</p>
      </div>
    </div>
  );
}
