import React from "react";
import Draggable from "react-draggable";
import Cv from "./windows/Cv.jsx";
import Projects from "./windows/Projects.jsx";
import Memes from "./windows/Memes.jsx";
import Todo from "./windows/Todo.jsx";
import Timer from "./windows/Timer.jsx";
import Welcome from "./windows/Welcome.jsx";

export default function MainDesktop({
  activeComponents,
  removeActiveComponent,
  addActiveComponent,
}) {
  const handleLinkClick = (componentName) => {
    removeActiveComponent(componentName);
    addActiveComponent(componentName);
  };

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
              containerClassName = "ml-14 mt-2 absolute"; // Positioning for Projects component
              break;
            case "Cv":
              component = (
                <Cv
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              containerClassName = "ml-14 mt-8 absolute"; // Positioning for Cv component
              break;
            case "Todo":
              component = (
                <Todo
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              containerClassName =
                "left-1/4 top-1/4 transform -translate-x-1/4 -translate-y-1/4 absolute "; // Centering for Todo component
              break;
            case "Memes":
              component = (
                <Memes
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              containerClassName =
                "left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute"; // Centering for Memes component
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
              containerClassName = "ml-14 mt-22 absolute";
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
