import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mwkdbppq");

  if (state.succeeded) {
    return (
      <div className="flex flex-col p-6">
        <p>Thank you for your email!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-6">
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" name="name" />

      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message"></textarea>

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>

      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
    </form>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
