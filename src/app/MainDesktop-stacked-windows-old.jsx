import React from "react";
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

          switch (componentName) {
            case "Projects":
              component = (
                <Projects
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              break;
            case "Cv":
              component = (
                <Cv
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              break;
            case "Todo":
              component = (
                <Todo
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              break;
            case "Timer":
              component = (
                <Timer
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              break;
            case "Memes":
              component = (
                <Memes
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              break;
            default:
              component = (
                <Welcome
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              break;
          }

          return (
            <div
              key={componentName} // Add the key prop to the surrounding div
              onClick={() => handleLinkClick(componentName)}
              className="ml-14 absolute"
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
          );
        })}
      </div>
    </div>
  );
}
