"use client";
import Button from "./Button";
import textInfo from "../data/info.json";
import { Link as ScrollLink } from "react-scroll";

const { welcomeTitle, title, subtitle, description, buttonText } = textInfo;

function Home() {
  return (
    <section id="home" className="md:pt-24">
      <p className="mb-4 text-primary">{welcomeTitle}</p>
      <h1 className="mb-4 text-4xl font-bold text-secondary-light md:text-7xl">
        {title}
      </h1>
      <h2 className="mb-8 text-3xl font-semibold text-secondary md:text-6xl">
        {subtitle}
      </h2>
      <p className="mb-8 max-w-[33rem] text-lg text-secondary">{description}</p>
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        spy={true}
        offset={-100}
      >
        <Button className="px-4 py-2">{buttonText}</Button>
      </ScrollLink>
    </section>
  );
}

export default Home;
