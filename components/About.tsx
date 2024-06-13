import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import TechnologyIcon from "./TechnologyIcon";
library.add(fab);

function About() {
  return (
    <section id="about" className="md:pt-32">
      <h2 className="mb-8 text-3xl font-semibold text-secondary-light md:text-6xl">
        About me.
      </h2>
      <p className="mb-8 max-w-[50rem] text-lg text-secondary">
        My passion for frontend development ignited like wildfire when I watched
        a YouTube video of a developer creating a landing page from scratch
        using just HTML and CSS. The process was mesmerizing, and it opened my
        eyes to the incredible possibilities of web development. For the past
        three years, I've honed my skills working as a Fullstack and Frontend
        Developer for both SaaS startups and a boutique outsourcing company.
        When I'm not coding, you can find me playing tennis once a week,
        exploring new content on YouTube, or indulging in my love for food with
        my fiance.
      </p>
      <div className="flex items-center gap-4">
        <TechnologyIcon icon="html5" name="html" />
        <TechnologyIcon icon="css3-alt" name="css" />
        <TechnologyIcon icon="js-square" name="javascript" />
        <TechnologyIcon icon="react" name="react" />
        <TechnologyIcon icon="vuejs" name="vue" />
        <TechnologyIcon icon="node-js" name="node" />
        <TechnologyIcon icon="git-alt" name="git" />
      </div>
    </section>
  );
}

export default About;
