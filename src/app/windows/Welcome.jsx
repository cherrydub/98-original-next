import React from "react";
// import { useState } from "react";

export default function Welcome() {
  //   const [count, setCount] = useState(0);
  //   const [windowSize, setWindowSize] = useState({
  //     width: null,
  //     height: null,
  //   });
  const windowSize = { width: null, height: null };
  return (
    <>
      <div style={windowSize} className="window">
        <div className="title-bar">
          <div className="title-bar-text flex">
            <img
              src="https://win98icons.alexmeub.com/icons/png/notepad-0.png"
              alt=""
            />{" "}
            {"Welcome"}
          </div>
          <div className="title-bar-controls">
            <button className="bg-gray-300" aria-label="Minimize" />
            <button
              className="bg-gray-300"
              aria-label="Maximize"
              //   onClick={handleWindowIconClick}
            />
            <button
              className="bg-gray-300"
              //   onClick={() => setWindowDisplayed(null)}
              aria-label="Close"
            />
          </div>
        </div>

        <div className="window-body">
          <div>
            <p style={{ textAlign: "center" }}>Current:</p>
            <div
              className="field-row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              {/* <button onClick={() => setCount(count + 1)}>+</button>
              <button onClick={() => setCount(count - 1)}>-</button>
              <button onClick={() => setCount(0)}>0</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
