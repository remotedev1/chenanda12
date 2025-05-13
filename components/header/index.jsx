"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // To get current URL path

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Pages", href: "/pages" },
  { label: "Sportspress", href: "/sportspress" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Shop", href: "/shop" },
];

export default function Header() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleCloseDrawer = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsDrawerOpen(false);
      setTimeout(() => {
        setShowDrawer(false);
        setIsClosing(false);
      }, (menuItems.length - 1) * 300 + 400);
    }, 400);
  };

  const handleOpenDrawer = () => {
    setShowDrawer(true);
    setIsDrawerOpen(true);
  };

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        setShowMobileMenu(false);
        setIsClosing(false);
      }, (menuItems.length - 1) * 300 + 400);
    }, 400);
  };

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
    setShowMobileMenu(true);
  };

  return (
    <header className="w-full h-28 px-8 py-2 flex items-center justify-between text-black">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={75} height={75} />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden pl-18 xl:flex flex-1 items-center gap-6 text-lg">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <a
              key={item.label}
              href={item.href}
              className="relative group font-semibold uppercase"
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          );
        })}
      </nav>

      {/* Desktop Menu Button */}
      <button
        className="hidden xl:flex cursor-pointer"
        onClick={handleOpenDrawer}
      >
        <Menu size={32} />
      </button>

      {/* Desktop Drawer */}
      <AnimatePresence>
        {showDrawer && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50 w-md ml-auto"
          >
            <motion.button
              onClick={handleCloseDrawer}
              className="absolute top-4 right-4 text-white cursor-pointer"
              aria-label="Close Menu"
              animate={isClosing ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <X size={32} />
            </motion.button>

            <AnimatePresence>
              {isDrawerOpen && (
                <nav className="flex flex-col items-center gap-6 mt-12">
                  {menuItems.map((item, index) => {
                    const delay = index * 0.3;
                    const exitDelay = (menuItems.length - 1 - index) * 0.3;
                    const isActive = pathname === item.href;

                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{
                          delay,
                          exit: { delay: exitDelay },
                        }}
                        className={`text-4xl font-serif text-white ${
                          isActive ? "underline" : ""
                        }`}
                        onClick={handleCloseDrawer}
                      >
                        {item.label}
                      </motion.a>
                    );
                  })}
                </nav>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Button */}
      <button className="xl:hidden" onClick={handleOpenMobileMenu}>
        <Menu size={32} />
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50"
          >
            <motion.button
              onClick={handleCloseMenu}
              className="absolute top-4 right-4 text-white cursor-pointer"
              aria-label="Close Menu"
              animate={isClosing ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <X size={32} />
            </motion.button>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <nav className="flex flex-col items-center gap-6 mt-12">
                  {menuItems.map((item, index) => {
                    const delay = index * 0.3;
                    const exitDelay = (menuItems.length - 1 - index) * 0.3;
                    const isActive = pathname === item.href;

                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{
                          delay,
                          exit: { delay: exitDelay },
                        }}
                        className={`text-4xl font-serif text-white ${
                          isActive ? "underline" : ""
                        }`}
                        onClick={handleCloseMenu}
                      >
                        {item.label}
                      </motion.a>
                    );
                  })}
                </nav>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
