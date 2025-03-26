import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("pocetna");

  const sections = [
    { id: "pocetna", label: "Početna" },
    { id: "usluge", label: "Usluge" },
    { id: "o-nama", label: "O Nama" },
    { id: "potrazivanja", label: "Naknada Štete" },
    { id: "kontakt", label: "Kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      const currentPosition = window.scrollY + 100;

      const sectionElements = sections
        .map((section) => ({
          id: section.id,
          element: document.getElementById(section.id),
        }))
        .filter((section) => section.element !== null);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element.offsetTop <= currentPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, sections]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  if (location.pathname !== "/") {
    return null;
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div
        className={`${
          scrolled ? "fixed top-0" : "absolute top-0"
        } left-0 w-full z-50 py-4 transition-all duration-300`}
        style={{
          backgroundColor: scrolled ? "rgba(17, 24, 39, 0.5)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`${
              scrolled ? "bg-opacity-90" : ""
            } bg-white rounded-full py-2 px-6 flex items-center justify-between`}
          >
            <div className="flex items-center">
              <img className="w-16 h-16" src="./logo as.svg" alt="AS Logo" />
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`font-medium relative transition-all duration-200 ${
                    activeSection === section.id
                      ? "text-blue-800"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800 -mb-1"></span>
                  )}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 cursor-pointer" />
              ) : (
                <Menu className="h-6 w-6 cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900 bg-opacity-90 md:hidden"
          style={{ paddingTop: "90px" }}
        >
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col items-center space-y-6">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`font-medium text-xl w-full text-center py-3 relative
                    ${index !== sections.length - 1 ? "border-b border-gray-800" : ""}
                    ${
                      activeSection === section.id
                        ? "text-teal-300"
                        : "text-white hover:text-teal-200"
                    } transition-colors duration-200`}
                  onClick={toggleMobileMenu}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-teal-300 mb-0"></span>
                  )}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
