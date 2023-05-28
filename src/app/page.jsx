"use client";
import { useState } from "react";
import BottomDesktopBar from "./BottomDesktopBar";
import LeftDesktopNav from "./LeftDesktopNav";
import MainDesktop from "./MainDesktop";

export default function Home() {
  const [activeComponents, setActiveComponents] = useState([]);

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
    <div className="">
      <LeftDesktopNav
        activeComponents={activeComponents}
        addActiveComponent={addActiveComponent}
        removeActiveComponent={removeActiveComponent}
      />
      <MainDesktop
        activeComponents={activeComponents}
        addActiveComponent={addActiveComponent}
        removeActiveComponent={removeActiveComponent}
      />
      <BottomDesktopBar activeComponents={activeComponents} />
    </div>
  );
}
