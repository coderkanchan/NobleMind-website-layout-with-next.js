"use client";

import { createContext, useContext, useState } from "react";

// No interface here (TS only)
const NavContext = createContext(null);

export function NavProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <NavContext.Provider
      value={{ isOpen, setIsOpen, openMenu, closeMenu, toggleMenu }}
    >
      {children}
    </NavContext.Provider>
  );
}

// Custom hook
export const useNav = () => useContext(NavContext);
