import React, { useState } from "react";

export default function DisplayContent({
  backgroundChoice,
  setBackgroundChoice,
}) {
  const handleBackgroundChange = (event) => {
    setBackgroundChoice(event.target.value);
  };

  return (
    <div>
      <p>Update background:</p>
      <select
        className="pr-5 pl-2"
        value={backgroundChoice}
        onChange={handleBackgroundChange}
      >
        <option value="background-default">Default: Green</option>
        <option value="background-ashpika">Pokemon</option>
        <option value="background-dbz1">DragonBall Z</option>
        <option value="background-robocop">Robocop</option>
        <option value="background-pepe1">Pepe 1</option>
        <option value="background-pepe3">Pepe 2</option>
      </select>
      {/* <p>
        Add your own URL background: <input type="url" />
      </p> */}
    </div>
  );
}
