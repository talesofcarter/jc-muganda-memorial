import { useState, useEffect } from "react";
import { FaTimes, FaBook, FaHeart, FaImages, FaMonument } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { to: "/", label: "Home", icon: HiHome },
    { to: "/obituary", label: "Obituary", icon: FaBook },
    { to: "/tributes", label: "Tributes", icon: FaHeart },
    { to: "/gallery", label: "Gallery", icon: FaImages },
    { to: "/memorial", label: "Memory Wall", icon: FaMonument },
    { to: "/contact", label: "Contact", icon: MdEmail },
  ];

  return (
    <main>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-md border-b border-white/10 py-2 shadow-lg"
            : "bg-gray-900/80 backdrop-blur-md border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
          <NavLink
            to="/"
            className="text-2xl font-extrabold text-white flex items-center gap-3 group"
          >
            <span className="text-white  transition-transform duration-300 group-hover:scale-105">
              JC Muganda
            </span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "text-orange-300"
                      : "text-white/80 hover:text-white"
                  } group`
                }
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-300 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
            aria-label="Toggle menu"
            onClick={toggleSidebar}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 to-gray-800 backdrop-blur-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } shadow-2xl border-l border-white/10`}
      >
        <div className="flex justify-end p-6">
          <button
            className="text-white p-2 rounded-full hover:bg-white/10 transition-all duration-200"
            aria-label="Close menu"
            onClick={toggleSidebar}
          >
            <FaTimes className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col space-y-4 px-6 pt-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-4 text-lg font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-orange-300 bg-white/5"
                    : "text-white/90 hover:text-blue-300 hover:bg-white/5"
                }`
              }
              onClick={toggleSidebar}
            >
              <item.icon className="w-6 h-6" />
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500"
          onClick={toggleSidebar}
        ></div>
      )}
    </main>
  );
};

export default Navbar;
