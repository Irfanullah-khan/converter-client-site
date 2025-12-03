import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Layers, Info, Mail, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: <Home size={18} />, id: "#" },
    { name: "Features", icon: <Layers size={18} />, id: "features" },
    { name: "About Us", icon: <Info size={18} />, id: "about" },
    { name: "Contact", icon: <Mail size={18} />, id: "contact" },
  ];

  const scrollTo = (id, name) => {
    if (name === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white/80 backdrop-blur-lg shadow-md fixed top-0 left-0 z-50 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

          {/* LOGO */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img 
              src={logo}
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FileX Converter
            </h1>
          </div>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            {navItems.map((item, i) => (
              <li
                key={i}
                onClick={() => scrollTo(item.id, item.name)}
                className="relative flex items-center gap-2 cursor-pointer group transition"
              >
                <span className="group-hover:text-blue-600 group-hover:scale-110 transition">
                  {item.icon}
                </span>

                <span className="group-hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 transition">
                  {item.name}
                </span>

                <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          {/* MOBILE HAMBURGER */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <X size={28} className="text-gray-700" />
              ) : (
                <Menu size={28} className="text-gray-700" />
              )}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-64 h-full bg-white/95 backdrop-blur-xl shadow-xl z-50 px-6 py-20 border-l border-gray-200 md:hidden"
          >
            <ul className="flex flex-col gap-6 text-lg font-medium text-gray-700">
              {navItems.map((item, i) => (
                <li
                  key={i}
                  onClick={() => scrollTo(item.id, item.name)}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <span className="text-blue-600 group-hover:scale-110 transition">
                    {item.icon}
                  </span>

                  <span className="group-hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 transition">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
