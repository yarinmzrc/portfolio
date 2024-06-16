import NavLink from "./NavLink";
import { useNavBarContext } from "../hooks/useNavBarContext";

const links = [
  { name: "home", label: "Home" },
  { name: "about", label: "About" },
  { name: "experience", label: "Experience" },
  { name: "contact", label: "Contact" },
];

function NavLinks({ shouldToggleMenu = true }: { shouldToggleMenu?: boolean }) {
  const { selected, setSelected, toggleMenu } = useNavBarContext();

  return (
    <>
      {links.map(({ name, label }) => (
        <NavLink
          key={name}
          name={name}
          label={label}
          selected={selected}
          setSelected={setSelected}
          toggleMenu={shouldToggleMenu ? toggleMenu : undefined}
        />
      ))}
    </>
  );
}

export default NavLinks;
