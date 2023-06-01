"use client";
import { useState } from "react";
import BottomDesktopBar from "./BottomDesktopBar";
import LeftDesktopNav from "./LeftDesktopNav";
import MainDesktop from "./MainDesktop";

// import BackgroundChanger from "./components/BackgroundChanger";

export default function Home() {
  const [activeComponents, setActiveComponents] = useState(["Welcome"]);
  const [backgroundChoice, setBackgroundChoice] =
    useState("background-default");

  const addActiveComponent = (componentName) => {
    setActiveComponents((prevActiveComponents) => [
      componentName,
      ...prevActiveComponents.filter((name) => name !== componentName),
    ]);
  };

  const removeActiveComponent = (componentName) => {
    setActiveComponents((prevActiveComponents) =>
      prevActiveComponents.filter((name) => name !== componentName)
    );
  };

  return (
    <div className={`${backgroundChoice} h-screen`}>
      {/* <BackgroundChanger /> */}
      <LeftDesktopNav
        activeComponents={activeComponents}
        addActiveComponent={addActiveComponent}
        removeActiveComponent={removeActiveComponent}
      />
      <MainDesktop
        activeComponents={activeComponents}
        addActiveComponent={addActiveComponent}
        removeActiveComponent={removeActiveComponent}
        setBackgroundChoice={setBackgroundChoice}
      />
      <BottomDesktopBar
        activeComponents={activeComponents}
        setActiveComponents={setActiveComponents}
        addActiveComponent={addActiveComponent}
        backgroundChoice={backgroundChoice}
        removeActiveComponent={removeActiveComponent}
      />
    </div>
  );
}
