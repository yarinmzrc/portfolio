import Button from "./Button";

function Home() {
  return (
    <section id="home" className="md:pt-32">
      <p className="mb-4 text-primary">Hello, my name is</p>
      <h1 className="mb-4 text-4xl font-bold text-secondary-light md:text-7xl">
        Yarin Mizrachi
      </h1>
      <h2 className="mb-8 text-3xl font-semibold text-secondary md:text-6xl">
        And I’m A Frontend Developer.
      </h2>
      <p className="mb-8 max-w-[33rem] text-lg text-secondary">
        Frontend Developer with 3 years of experience in building responsive
        websites and web applications. Proficient in HTML, CSS, JavaScript, and
        modern libraries and frameworks.
      </p>
      <Button className="px-4 py-2">Get to know me better</Button>
    </section>
  );
}

export default Home;
