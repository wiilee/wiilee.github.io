import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToggleThemeButton } from "./ToggleThemeButton";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // if open in sm to md -> close dropdown
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setIsOpen(false);
      }
    };

    handleResize(mediaQuery);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // prevent scroll when header is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-bg-main ${isOpen && "h-full"}`}
    >
      <div className="flex flex-wrap items-center justify-between max-w-5xl mx-auto px-5 py-4">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <h1 className="text-text-h text-xl">Willy Cai</h1>
        </Link>
        <div className="flex gap-4 md:hidden">
          <ToggleThemeButton />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer focus:outline-none"
            aria-label="Menü umschalten"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 hover:text-accent-hover text-text-h" />
            ) : (
              <Bars3Icon className="h-6 w-6 hover:text-accent-hover text-text-h" />
            )}
          </button>
        </div>

        {/* navigator */}
        <nav
          className={`
            grid transition-all duration-300 ease-in-out w-full 
            ${
              isOpen
                ? "grid-rows-[1fr] opacity-100 pt-4"
                : "grid-rows-[0fr] opacity-0 pt-0"
            }
            md:flex md:flex-row md:items-center md:w-auto md:opacity-100 md:pt-0 md:gap-6
          `}
        >
          <div className="overflow-hidden flex flex-col items-center gap-3 w-full md:flex-row md:gap-6">
            <Link
              to="/"
              className={`max-md:text-center max-md:m-3 transition-colors ${
                location.pathname === "/"
                  ? "text-accent-main border-b border-accent-main"
                  : "text-text-h hover:text-accent-main"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <h1>Home</h1>
            </Link>

            <Link
              to="/projects"
              className={`max-md:text-center max-md:m-3 transition-colors ${
                location.pathname === "/projects"
                  ? "text-accent-main border-b border-accent-main"
                  : "text-text-h hover:text-accent-main"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <h1>Projekte</h1>
            </Link>
            <div className="max-md:hidden flex items-center">
              <ToggleThemeButton />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
