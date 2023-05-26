import React from "react";
// import { useClient } from "next/client";
// useClient();
import LocalTime from "./components/LocalTime";

export default function BottomDesktopBar() {
  return (
    <div className="start-bar flex">
      <div className="flex-initial start-button-wrapper text-center justify-center items-center self-center">
        <img
          src="https://win98icons.alexmeub.com/images/start-button.png"
          width={"35px"}
          alt=""
        />
      </div>
      <div className="flex-auto mx-2">testing</div>
      <div className="start-bar-time flex-initial text-center justify-center items-center">
        <LocalTime />
      </div>
    </div>
  );
}
