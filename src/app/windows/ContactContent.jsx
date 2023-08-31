import { useState } from "react";
import ContactForm from "../components/ContactForm";

export default function ContactContent() {
  return (
    <div className=" bg-white flex flex-col p-4">
      <ContactForm />
    </div>
  );
}
