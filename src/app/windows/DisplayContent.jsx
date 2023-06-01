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
        <option value="background-ashpika">Pokemon</option>
        <option value="background-dbz1">RoboCop</option>
        <option value="background-robocop">RoboCop Z</option>
        <option value="background-pepe1">Pepe 1</option>
        <option value="background-pepe3">Pepe 2</option>
      </select>
      {/* <p>
        Add your own URL background: <input type="url" />
      </p> */}
    </div>
  );
}
