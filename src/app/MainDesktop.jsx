import React from "react";
//backup till here
import CvWindow from "./windows/CvWindow.jsx";
import Projects from "./windows/Projects.jsx";
import Memes from "./windows/Memes.jsx";
import Todo from "./windows/Todo.jsx";

export default function MainDesktop({ activeComponents }) {
  return (
    <div className="ml-14">
      <div className="mb-8 mt-4">
        {/* <div className="mb-8 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
        {activeComponents.map((componentName) => {
          let component = null;

          switch (componentName) {
            case "Projects":
              component = <Projects key={componentName} />;
              break;
            case "Cv":
              component = <CvWindow key={componentName} />;
              break;
            case "Todo":
              component = <Todo key={componentName} />;
              break;
            default:
              component = <Memes key={componentName} />;
              break;
          }

          return <div key={componentName}>{component}</div>;
        })}
      </div>
    </div>
  );
}
