import React, { useState } from "react";

export default function SpeechRecognition({ onTranscript }) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const handleStartListening = () => {
    setIsListening(true);
    setTranscript("");
    // Start speech recognition code...
  };

  const handleStopListening = () => {
    setIsListening(false);
    // Stop speech recognition code...
  };

  // Update transcript state as speech recognition results come in
  const updateTranscript = (newTranscript) => {
    setTranscript(newTranscript);
    onTranscript(newTranscript); // Pass the transcript to parent component
  };

  return (
    <div>
      <button onClick={handleStartListening} disabled={isListening}>
        Start Speech Recognition
      </button>
      <button onClick={handleStopListening} disabled={!isListening}>
        Stop Speech Recognition
      </button>
      <p>{transcript}</p>
    </div>
  );
}
