import { useState } from "react";

export default function ContactContent() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to the back-end API route
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, subject, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Handle the response from the API
    if (response.ok) {
      // Display success message or perform further actions
      console.log("Email sent successfully!");
    } else {
      // Display error message or handle the error
      console.error("Error sending email");
    }
  };

  return (
    <div className=" bg-white flex flex-col p-4">
      <form onSubmit={handleSubmit}>
        <p></p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <p></p>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
        />
        <p></p>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Email body"
        ></textarea>
        <p></p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
