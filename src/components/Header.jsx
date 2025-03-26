import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  if (location.pathname === "/politika-privatnosti") {
    return null;
  }

  return (
    <div
      className={`${scrolled ? "fixed top-0" : "absolute top-0"} left-0 w-full z-50 py-4 transition-all duration-300`}
      style={{
        backgroundColor: scrolled ? "rgba(17, 24, 39, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`${scrolled ? "bg-opacity-90" : ""} bg-white rounded-full py-2 px-6 flex items-center justify-between`}
        >
          <div className="flex items-center justify-between gap-10">
            {/* Logo */}
            <div className="flex items-center">
              <img className="w-16 h-16" src="./logo as.svg" alt="Vite Logo" />
            </div>
          </div>
          <nav className="flex items-center space-x-6">
            <a
              href="#pocetna"
              className="text-blue-800 font-medium flex items-center"
            >
              <span className="mr-1">•</span>
              Početna
            </a>
            <a href="#usluge" className="text-gray-700 font-medium">
              Usluge
            </a>
            <a href="#o-nama" className="text-gray-700 font-medium">
              O Nama
            </a>
            <a href="#potrazivanja" className="text-gray-700 font-medium">
              Naknada Štete
            </a>
            <a href="#kontakt" className="text-gray-700 font-medium">
              Kontakt
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
