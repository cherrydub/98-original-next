import React from "react";

export default function DisplayContent() {
  return (
    <div>
      <p>Choose from these:</p>
      <p></p>
      <select className="pr-5 pl-2">
        <option selected value="option1">
          Default Background
        </option>
        <option value="option2">Pokemon</option>
        <option value="option3">Drangonball Z</option>
        <option value="option4">RoboCop</option>
        <option value="option5">Pepe 1</option>
        <option value="option5">Pepe 2</option>
      </select>
      <p>
        Add your own URL background: <input type="url" />
      </p>
    </div>
  );
}
