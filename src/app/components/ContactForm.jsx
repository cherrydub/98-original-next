import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const formID = process.env.NEXT_PUBLIC_FORM_ID;

export default function ContactForm({ removeActiveComponent }) {
  const [state, handleSubmit] = useForm(formID);
  const [name, setName] = useState("");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (state.succeeded) {
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(countdownInterval);
        removeActiveComponent("Contact");
      }, 5000);

      return () => clearInterval(countdownInterval);
    }
  }, [state.succeeded, removeActiveComponent]);

  return (
    <div className="flex flex-col p-1">
      {state.succeeded ? (
        <div>
          <p className="font-bold">Thank you for your email, {name}!</p>
          <p>Closing in {countdown}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col p-1">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            className="h-40 resize-y p-2"
          ></textarea>

          <button type="submit" disabled={state.submitting}>
            Submit
          </button>

          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </form>
      )}
    </div>
  );
}
