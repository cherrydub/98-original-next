import React from "react";
// const fileListPromise = require("./extractMemeFolder");

export default function MemesContent() {
  const fileNames = [
    // { path: "./memes/1.png", text: "one" },
    // { path: "./memes/2.png", text: "two" },
  ];

  //   for (let index = 1; index <= 2; index++) {
  //     // const element = array[index];
  //     fileNames.push({ path: `./memes/${index}.png`, text: `${index}` });
  //   }

  return (
    <div className="flex flex-wrap p-4 gap-4">
      {fileNames.map((file) => {
        return (
          <div className="flex flex-col items-center">
            <img src={file.path} alt={file.text} />
            <div className="text-center">{file.text}</div>
          </div>
        );
      })}
    </div>
  );
}

// console.log("slkdfjlkdsjlfd", createFileList);
