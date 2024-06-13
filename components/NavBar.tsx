import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const links = [
  { name: "home", label: "Home" },
  { name: "about", label: "About" },
  { name: "experience", label: "Experience" },
  { name: "contact", label: "Contact" },
];

interface NavLinkProps {
  name: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name, label }) => {
  const classes = `${name === "home" ? "text-primary" : ""} hover:text-primary`;

  return (
    <Link href={`#${name}`} className={classes}>
      {label}
    </Link>
  );
};

function NavBar() {
  return (
    <div className="flex items-center justify-between">
      <Image src="/logo.svg" alt="portfolio logo" width={30} height={30} />
      <div className="flex items-center gap-16">
        {links.map((link) => (
          <NavLink key={link.name} name={link.name} label={link.label} />
        ))}
        <Button>Resume</Button>
      </div>
    </div>
  );
}

export default NavBar;
