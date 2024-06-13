interface NavLinkProps {
  name: string;
  label: string;
  selected: string;
  setSelected: (label: string) => void;
  toggleMenu: () => void;
}
import { Link as ScrollLink } from "react-scroll";

const NavLink: React.FC<NavLinkProps> = ({
  name,
  label,
  selected,
  setSelected,
  toggleMenu,
}) => {
  const classes = `${label === selected ? "text-primary" : ""} hover:text-primary cursor-pointer`;

  return (
    <ScrollLink
      key={label}
      to={name}
      smooth={true}
      duration={500}
      spy={true}
      offset={-100}
      className={classes}
      onSetActive={() => setSelected(label)}
      onClick={toggleMenu}
    >
      {label}
    </ScrollLink>
  );
};

export default NavLink;
