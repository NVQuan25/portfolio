"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme");
    if (stored === "dark") {
      setIsDark(true);
      document.body.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggle = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.body.setAttribute("data-theme", newDark ? "dark" : "light");
    localStorage.setItem("portfolio-theme", newDark ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggle}
      className="relative w-16 h-8 rounded-full p-1 transition-colors duration-300 cursor-pointer"
      style={{
        backgroundColor: isDark ? "#353535" : "#baaa80",
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md"
        animate={{ x: isDark ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon size={14} className="text-dark-500" />
        ) : (
          <Sun size={14} className="text-gold-600" />
        )}
      </motion.div>
    </motion.button>
  );
}
