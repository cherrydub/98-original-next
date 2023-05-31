import React, { useState, useEffect } from "react";

export default function ChatGPT({ prompt }) {
  const [chatInput, setChatInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  const handleChatInputChange = (event) => {
    setChatInput(event.target.value);
  };

  const handleSendMessage = () => {
    // Send chat message to ChatGPT API and update chatResponse state
    // Replace with your actual code to communicate with the ChatGPT API
    // For demonstration purposes, we will simply set a static response string
    const response = "This is the response from ChatGPT.";
    setChatResponse(response);
  };

  useEffect(() => {
    if (chatInput !== "") {
      handleSendMessage();
    }
  }, [chatInput]);

  return (
    <div>
      <div>
        <input type="text" value={chatInput} onChange={handleChatInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <div>
        <p>ChatGPT Response: {chatResponse}</p>
      </div>
    </div>
  );
}
