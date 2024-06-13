import { IconName, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TechnologyIconProps {
  icon: IconName;
  name: string;
}

function TechnologyIcon({ icon, name }: TechnologyIconProps) {
  const myIcon: IconProp = ["fab", icon];

  return (
    <div className="relative group">
      <FontAwesomeIcon
        icon={myIcon}
        width={24}
        className="transform hover:scale-110 transition-transform  hover:text-primary"
      />
      <span className="absolute top-full mt-2 px-2 py-1 text-xs text-primary-dark bg-primary rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
        {name}
      </span>
    </div>
  );
}

export default TechnologyIcon;
