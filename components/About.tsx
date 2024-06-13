import Button from "./Button";

function About() {
  return (
    <section className="md:pt-32">
      <p className="text-primary mb-4">Hello, my name is</p>
      <h1 className="font-bold text-secondary-light text-4xl md:text-7xl mb-4">
        Yarin Mizrachi
      </h1>
      <h2 className="font-semibold text-secondary text-3xl md:text-6xl mb-8">
        And I’m A Frontend Developer.
      </h2>
      <p className="text-lg max-w-[33rem] mb-8">
        Frontend Developer who transforms ideas into stunning web applications
        by day and scores goals on the football field by night.
      </p>
      <Button className="py-2 px-4">Get to know me better</Button>
    </section>
  );
}

export default About;
