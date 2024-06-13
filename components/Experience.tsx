import { TExperience } from "../types";
import experiences from "../data/experience.json";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <section className="md:pt-32">
      <h2 className="mb-8 text-3xl font-semibold text-secondary-light md:text-6xl">
        Experience.
      </h2>
      {experiences.map((experience: TExperience) => (
        <ExperienceCard key={experience.title} experience={experience} />
      ))}
    </section>
  );
}

export default Experience;
