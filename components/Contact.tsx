import Button from "./Button";
import text from "../data/contact.json";

const { title, description, buttonText } = text;

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center text-center md:pt-32"
    >
      <h2 className="mb-6 text-3xl font-semibold text-secondary-light md:text-6xl">
        {title}
      </h2>
      <p className="mb-6 text-secondary md:max-w-[620px]">{description}</p>
      <Button className="px-4 py-2">{buttonText}</Button>
    </section>
  );
}

export default Contact;
