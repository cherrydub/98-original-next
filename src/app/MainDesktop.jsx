import React from "react";
//backup till here
import Cv from "./windows/Cv.jsx";
import Projects from "./windows/Projects.jsx";
import Memes from "./windows/Memes.jsx";
import Todo from "./windows/Todo.jsx";
import Timer from "./windows/Timer.jsx";

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
      {/* <div className="pb-8 pt-4"> */}
      <div className="">
        {/* <div className="mb-8 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
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
            default:
              component = (
                <Memes
                  key={componentName}
                  activeComponents={activeComponents}
                  removeActiveComponent={removeActiveComponent}
                />
              );
              break;
          }

          return (
            <>
              <div
                key={componentName}
                onClick={() => handleLinkClick(componentName)}
                //commenting out the classname and style, this would then make them stack ontop of eachother
                // className="ml-14 absolute border-2 border-pink-600"
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
            </>
          );
        })}
      </div>
    </div>
  );
}
