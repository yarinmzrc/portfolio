"use client";

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

const links = [
  { name: "home", label: "Home" },
  { name: "about", label: "About" },
  { name: "experience", label: "Experience" },
  { name: "contact", label: "Contact" },
];

function NavBar() {
  const [selected, setSelected] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav
      className={`navbar sticky top-0 z-50 w-full ${!isMenuOpen ? "backdrop-blur-lg" : ""}`}
    >
      <div className="container relative mx-auto flex items-center justify-between px-6 py-6 text-secondary-light md:px-12 lg:px-20">
        <Image src="/logo.svg" alt="portfolio logo" width={30} height={30} />
        <div className="hidden items-center gap-16 md:flex">
          {links.map(({ name, label }) => (
            <NavLink
              key={name}
              name={name}
              label={label}
              selected={selected}
              setSelected={setSelected}
              toggleMenu={toggleMenu}
            />
          ))}
          <Button>Resume</Button>
        </div>
        <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 flex h-screen flex-col items-center justify-center gap-6 text-3xl text-secondary-light backdrop-blur-lg md:hidden"
        >
          {links.map(({ name, label }) => (
            <NavLink
              key={name}
              name={name}
              label={label}
              selected={selected}
              setSelected={setSelected}
              toggleMenu={toggleMenu}
            />
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export default NavBar;
