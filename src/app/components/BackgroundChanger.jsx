import React, { useState } from "react";

// const backgrounds = [
//   "../../../public/backgrounds/ashpika.jpg",
//   "../../../public/backgrounds/robocop.jpeg",
//   "../../../public/backgrounds/dbz1.png",
//   "../../../public/backgrounds/pepe1.png",
//   "../../../public/backgrounds/pepe3.png",
// ];

// const backgrounds = [
//   "https://m.media-amazon.com/images/M/MV5BNDcwZDc2NTEtMzU0Ni00YTQyLWIyYTQtNTI3YjM0MzhmMmI4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
//   "../../../public/backgrounds/ashpika.jpg",
// ];

const backgroundStyles = [
  '{background: #ffffff url("../../public/backgrounds/ashpika.jpg") repeat fixed center; background-size: auto 100vh;}',
  '{background: #ffffff url("../../public/backgrounds/robocop.jpeg") repeat fixed center; background-size: auto 100vh;}',
  '{background: #ffffff url("../../public/backgrounds/dbz1.png") repeat fixed center; background-size: auto 100vh;}',
  '{background: #ffffff url("../../public/backgrounds/pepe1.png") repeat fixed center; background-size: auto 100vh;}',
  '{background: #ffffff url("../../public/backgrounds/pepe3.png") repeat fixed right; background-size: auto 100vh;}',
];

const getRandomBackground = () => {
  const randomIndex = Math.floor(Math.random() * backgroundStyles.length);
  return backgroundStyles[randomIndex];
};

const BackgroundChanger = () => {
  const [background, setBackground] = useState(getRandomBackground());

  const handleDoubleTap = () => {
    setBackground(getRandomBackground());
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-center bg-no-repeat bg-cover"
      style={background}
    >
      <h1 className="text-3xl text-white">
        <button onClick={handleDoubleTap}></button>
        Double tap the background to change
      </h1>
    </div>
  );
};

export default BackgroundChanger;
