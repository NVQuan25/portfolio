"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "@bprogress/next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", labelEn: "About", labelVn: "Giới thiệu" },
  { href: "/projects", labelEn: "Projects", labelVn: "Dự án" },
  { href: "/skills", labelEn: "Skills", labelVn: "Kỹ năng" },
  { href: "/experience", labelEn: "Experience", labelVn: "Kinh nghiệm" },
  { href: "/contact", labelEn: "Contact", labelVn: "Liên hệ" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const navigate = (href: string) => {
    setIsMobileOpen(false);
    router.push(href);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-primary/80 backdrop-blur-lg shadow-lg border-b border-theme"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => navigate("/")}
            className="text-lg font-bold text-gold-500 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            NVQ<span className="text-primary">.</span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => navigate(link.href)}
                className={cn(
                  "text-sm font-medium transition-colors cursor-pointer",
                  pathname === link.href
                    ? "text-gold-500"
                    : "text-secondary hover:text-gold-500",
                )}
              >
                {language === "en" ? link.labelEn : link.labelVn}
              </button>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            {/* Language flags */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "text-xl cursor-pointer transition-opacity",
                  language === "en"
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-70",
                )}
                title="English"
              >
                🇬🇧
              </button>
              <button
                onClick={() => setLanguage("vn")}
                className={cn(
                  "text-xl cursor-pointer transition-opacity",
                  language === "vn"
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-70",
                )}
                title="Tiếng Việt"
              >
                🇻🇳
              </button>
            </div>

            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-primary cursor-pointer"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary/95 backdrop-blur-lg border-t border-theme overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => navigate(link.href)}
                  className={cn(
                    "block w-full text-left text-sm font-medium transition-colors py-2 cursor-pointer",
                    pathname === link.href
                      ? "text-gold-500"
                      : "text-secondary hover:text-gold-500",
                  )}
                >
                  {language === "en" ? link.labelEn : link.labelVn}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
