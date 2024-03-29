import React, { useState } from "react";
import Draggable from "react-draggable";
import Cv from "./windows/Cv.jsx";
import Projects from "./windows/Projects.jsx";
import Memes from "./windows/Memes.jsx";
import Todo from "./windows/Todo.jsx";
import Timer from "./windows/Timer.jsx";
import Welcome from "./windows/Welcome.jsx";
import IE from "./windows/IE.jsx";
import Contact from "./windows/Contact.jsx";
// import SpeechRecognition from "./components/SpeechRecognition.jsx";
// import ChatGPT from "./components/ChatGPT.jsx";
// import displayicon from "../../public/icons/display.png"
import Display from "./windows/Display.jsx";

export default function MainDesktop({
  activeComponents,
  removeActiveComponent,
  addActiveComponent,
  backgroundChoice,
  setBackgroundChoice,
}) {
  const handleLinkClick = (componentName) => {
    removeActiveComponent(componentName);
    addActiveComponent(componentName);
  };
  //chat gpt and speech stuff below
  // const [transcript, setTranscript] = useState("");

  // const handleTranscript = (newTranscript) => {
  //   setTranscript(newTranscript);
  // };

  return (
    <div className="">
      <div className="">
        {activeComponents.map((componentName, index) => {
          let component = null;
          let containerClassName = "ml-14 absolute"; // Default container class name

          switch (componentName) {
            case "Projects":
              component = (
                <Projects
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              containerClassName = "absolute ml-14 top-1/4"; // UPDATING THIS SO MAYBE USE PADDING INSTAED OF MARGIN FOR RESIZING
              break;
            case "Cv":
              component = (
                <Cv
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              containerClassName = "ml-14 absolute"; // Positioning for Cv component
              break;
            case "Todo":
              component = (
                <Todo
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              containerClassName = "left-1/4 top-1/2 absolute"; // Centering for Todo component
              break;
            case "Memes":
              component = (
                <Memes
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              containerClassName = "ml-14 top-3/4 absolute"; // Centering for Memes component
              break;
            case "IE":
              component = (
                <IE
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              containerClassName = "ml-14 absolute"; // Positioning for Cv component
              break;
            case "Display":
              component = (
                <Display
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                  backgroundChoice={backgroundChoice}
                  setBackgroundChoice={setBackgroundChoice}
                />
              );
              containerClassName = "ml-14 bottom-1/4 right-1/2 absolute"; // Positioning for Cv component
              break;
            case "Contact":
              component = (
                <Contact
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              containerClassName = "ml-14 top-1/4 absolute"; // Positioning for Cv component
              break;
            case "Timer":
              component = (
                <Timer
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              containerClassName = "ml-14 mt-12 absolute"; // Positioning for Timer component
              break;
            default:
              component = (
                <Welcome
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              containerClassName = "left-1/4 mt-6 absolute";
              break;
          }

          return (
            <Draggable
              cancel=".btn"
              key={componentName}
              defaultPosition={{ x: 0, y: 0 }}
              handle=".title-bar"
            >
              <div
                onClick={() => handleLinkClick(componentName)}
                className={containerClassName}
                style={{
                  zIndex: activeComponents.length - index,
                }}
              >
                {component}
                <div>
                  <br />
                  <br />
                </div>
              </div>
            </Draggable>
          );
        })}
      </div>
    </div>
  );
}
