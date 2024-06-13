"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { motion } from "framer-motion";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="flex justify-between items-center py-4 bg-base-100 z-50">
      <Image src="/logo.svg" alt="portfolio logo" width={30} height={30} />
      <div className="hidden md:flex items-center gap-16">
        {links.map(({ name, label }) => (
          <NavLink key={name} name={name} label={label} />
        ))}
        <Button>Resume</Button>
      </div>
      <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-0 backdrop-blur-xl flex flex-col gap-6 items-center justify-center z-40"
        >
          {links.map(({ name, label }) => (
            <NavLink key={name} name={name} label={label} />
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export default NavBar;
