import text from "../data/contact.json";
import EmailButton from "./EmailButton";

const { title, description, buttonText } = text;

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center pb-32 text-center md:pt-44"
    >
      <h2 className="mb-6 text-3xl font-semibold text-secondary-light md:text-6xl">
        {title}
      </h2>
      <p className="mb-6 text-secondary md:max-w-[620px]">{description}</p>
      <EmailButton email="yarinmzrc@gmail.com" className="px-4 py-2">
        {buttonText}
      </EmailButton>
    </section>
  );
}

export default Contact;
