import React, { useState } from "react";

export default function DisplayContent({ setBackgroundChoice }) {
  const handleBackgroundChange = (event) => {
    setBackgroundChoice(event.target.value);
  };

  return (
    <div>
      <p>Update background:</p>
      <select
        className="pr-5 pl-2"
        value={null}
        onChange={handleBackgroundChange}
      >
        <option value="null">Default: Green</option>
        <option value="background-one">Pokemon</option>
        <option value="background-two">Dragonball Z</option>
        <option value="background-three">RoboCop</option>
        <option value="background-four">Pepe 1</option>
        <option value="background-five">Pepe 2</option>
      </select>
      {/* <p>
        Add your own URL background: <input type="url" />
      </p> */}
    </div>
  );
}
