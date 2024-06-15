import text from "../data/about.json";
import { IconName, IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import TechnologyIcon from "./TechnologyIcon";
library.add(fab);

const { title, description } = text;

const icons = [
  { icon: "html5", name: "html" },
  { icon: "css3-alt", name: "css" },
  { icon: "js-square", name: "javascript" },
  { icon: "react", name: "react" },
  { icon: "vuejs", name: "vue" },
  { icon: "node-js", name: "node.js" },
  { icon: "git-alt", name: "git" },
];

function About() {
  return (
    <section id="about" className="md:pt-32">
      <h2 className="mb-4 text-3xl font-semibold text-secondary-light md:mb-8 md:text-6xl">
        {title}
      </h2>
      <p className="mb-8 max-w-[50rem] text-base text-secondary md:text-lg">
        {description}
      </p>
      <div className="flex items-center gap-4">
        {icons.map(({ icon, name }) => (
          <TechnologyIcon key={icon} icon={icon as IconName} name={name} />
        ))}
      </div>
    </section>
  );
}

export default About;
