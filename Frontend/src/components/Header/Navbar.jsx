import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ navItems, handleScroll }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-navy-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Hamburger button - Mobile / Tablet */}
          <button
            className="lg:hidden flex items-center gap-2 py-3 text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
            <span className="text-sm font-semibold tracking-wide">Menu</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-wrap justify-center items-center w-full">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={(e) => {
                  handleScroll(e, item.to);
                  closeMenu();
                }}
                className="relative px-2.5 xl:px-4 py-4 text-[12px] xl:text-[13px] 2xl:text-sm font-semibold tracking-wide text-slate-200 hover:text-white transition-colors
                           after:absolute after:inset-x-2.5 xl:after:inset-x-4 after:bottom-0 after:h-0.5 after:bg-orange-500
                           after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile / Tablet Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 lg:hidden bg-navy-800 border-t border-navy-700 shadow-xl z-40 max-h-[70vh] overflow-y-auto">
              <div className="flex flex-col py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={(e) => {
                      handleScroll(e, item.to);
                      closeMenu();
                    }}
                    className="px-6 py-3.5 text-sm font-semibold tracking-wide text-slate-200 hover:text-white hover:bg-navy-700 border-l-4 border-transparent hover:border-orange-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}