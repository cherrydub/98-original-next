import React from "react";
import Cv from "./windows/Cv.jsx";
import Projects from "./windows/Projects.jsx";
import Memes from "./windows/Memes.jsx";
import Todo from "./windows/Todo.jsx";

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
    <div className="ml-14">
      <div className="mb-8 mt-4">
        {activeComponents.map((componentName, index) => {
          let component = null;

          switch (componentName) {
            case "Projects":
              component = (
                <Projects
                  key={componentName}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              break;
            case "Cv":
              component = (
                <Cv
                  key={componentName}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              break;
            case "Todo":
              component = (
                <Todo
                  key={componentName}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              break;
            default:
              component = (
                <Memes
                  key={componentName}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              break;
          }

          return (
            <div
              key={componentName}
              onClick={() => handleLinkClick(componentName)}
              className="window absolute"
              style={{
                zIndex: activeComponents.length - index,
              }}
            >
              {component}
            </div>
          );
        })}
      </div>
    </div>
  );
}
