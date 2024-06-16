"use client";
import { Button } from ".";
import text from "../content/contact.json";

const { title, description, buttonText } = text;

function Contact() {
  function sendEmail() {
    const mailtoLink = `mailto:yarinmzrc@gmail.com`;
    window.location.href = mailtoLink;
  }

  return (
    <section
      id="contact"
      className="flex flex-col items-center pb-20 pt-10 text-center md:pb-32 md:pt-44"
    >
      <h2 className="mb-6 text-3xl font-semibold text-secondary-light md:text-6xl">
        {title}
      </h2>
      <p className="mb-6 text-secondary md:max-w-[620px]">{description}</p>
      <Button className="px-4 py-2" onClick={sendEmail}>
        {buttonText}
      </Button>
    </section>
  );
}

export default Contact;
