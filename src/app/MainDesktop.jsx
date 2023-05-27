import React from "react";
//backup till here
import CvWindow from "./windows/CvWindow.jsx";
import Projects from "./windows/Projects.jsx";
import Memes from "./windows/Memes.jsx";
import Todo from "./windows/Todo.jsx";

export default function MainDesktop({ activeComponents }) {
  return (
    <div className="ml-14 mb-6">
      <div className="">
        {activeComponents.map((componentName) => {
          switch (componentName) {
            case "Projects":
              return <Projects key={componentName} />;
            case "Cv":
              return <CvWindow key={componentName} />;
            case "Todo":
              return <Todo key={componentName} />;
            default:
              return <Memes key={componentName} />;
          }
        })}
      </div>
    </div>
  );
}
