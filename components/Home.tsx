"use client";
import Button from "./Button";
import textInfo from "../content/info.json";
import { Link as ScrollLink } from "react-scroll";

const { welcomeTitle, title, subtitle, description, buttonText } = textInfo;

function Home() {
  return (
    <section id="home" className="flex flex-col gap-4 md:pt-24">
      <p className="text-primary">{welcomeTitle}</p>
      <h1 className="text-3xl font-bold text-secondary-light sm:text-4xl md:text-6xl">
        {title}
      </h1>
      <h2 className="text-xl font-semibold text-secondary sm:text-2xl md:text-5xl">
        {subtitle}
      </h2>
      <p className="mb-4 max-w-[33rem] text-secondary">{description}</p>
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        spy={true}
        offset={-100}
        className="max-w-max"
      >
        <Button className="px-4 py-2">{buttonText}</Button>
      </ScrollLink>
    </section>
  );
}

export default Home;
