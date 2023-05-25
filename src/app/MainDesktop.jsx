import React from "react";
import Welcome from "./windows/Welcome.jsx";
//why the fuck isnt it using the new window page on main in vercel

export default function MainDesktop() {
  return (
    <div className="ml-14 mb-6">
      <p>testing again</p>
      <Welcome />
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <div className="window" style={{ width: "300px" }}>
        <div className="title-bar">
          <div className="title-bar-text">A Window With Stuff In It</div>
          <div className="title-bar-controls">
            <button className="bg-gray-300" aria-label="Minimize"></button>
            <button className="bg-gray-300" aria-label="Maximize"></button>
            <button className="bg-gray-300" aria-label="Close"></button>
          </div>
        </div>
        <div class="window-body">
          <p>There's so much room for activities!</p>
        </div>
      </div>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
      <p>testing</p>
    </div>
  );
}
