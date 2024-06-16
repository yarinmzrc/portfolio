import React, { createContext, useState, useContext } from "react";

export interface NavBarContextType {
  selected: string;
  setSelected: (label: string) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const NavBarContext = createContext<NavBarContextType | undefined>(
  undefined,
);

export const NavBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <NavBarContext.Provider
      value={{ selected, setSelected, isMenuOpen, toggleMenu }}
    >
      {children}
    </NavBarContext.Provider>
  );
};
