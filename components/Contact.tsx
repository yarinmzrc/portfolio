import Button from "./Button";

function Contact() {
  return (
    <section className="flex flex-col items-center text-center md:pt-32">
      <h2 className="mb-6 text-3xl font-semibold text-secondary-light md:text-6xl">
        Get In Touch.
      </h2>
      <p className="mb-6 text-secondary md:max-w-[620px]">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <Button className="px-4 py-2">Say Hello</Button>
    </section>
  );
}

export default Contact;
