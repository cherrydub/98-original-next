import React from "react";

export default function CvContent() {
  return (
    // <div className="w-full h-full">
    <div className="bg-white">
      <iframe
        className="w-full h-full"
        src="/cv/cv.html"
        frameBorder="0"
        style={{ height: "420px" }}
      />
    </div>
    // </div>
  );
}
