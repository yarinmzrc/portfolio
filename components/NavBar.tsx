"use client";

import Image from "next/image";
import Link from "next/link";
import { useNavBarContext } from "../hooks/useNavBarContext";
import { NavLinks, MobileMenu, Button, HamburgerMenu } from "./index";
import { NavBarProvider } from "../contexts/NavBarContext";

function NavBarContent() {
  const { isMenuOpen } = useNavBarContext();

  return (
    <nav
      className={`navbar sticky top-0 z-50 w-full ${!isMenuOpen ? "backdrop-blur-lg" : ""}`}
    >
      <div className="container relative mx-auto flex items-center justify-between px-6 py-6 text-secondary-light md:px-12 lg:px-20">
        <Image src="/logo.svg" alt="portfolio logo" width={30} height={30} />
        <div className="hidden items-center gap-16 md:flex">
          <NavLinks shouldToggleMenu={false} />
          <Link href="/portfolio.pdf" target="_blank">
            <Button>Resume</Button>
          </Link>
        </div>
        <HamburgerMenu />
      </div>
      {isMenuOpen && <MobileMenu />}
    </nav>
  );
}

function NavBar() {
  return (
    <NavBarProvider>
      <NavBarContent />
    </NavBarProvider>
  );
}

export default NavBar;
