import { TExperience } from "../types";
import experiencesInfo from "../data/experience.json";
import ExperienceCard from "./ExperienceCard";

const { experiences, title } = experiencesInfo;

function Experience() {
  return (
    <section id="experience" className="md:pt-32">
      <h2 className="mb-8 text-3xl font-semibold text-secondary-light md:text-6xl">
        {title}
      </h2>
      {experiences.map((experience: TExperience) => (
        <ExperienceCard key={experience.title} experience={experience} />
      ))}
    </section>
  );
}

export default Experience;
