"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = ["Home", "About", "Services", "Contact"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 py-3 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">MyLogo</div>

        {/* Hamburger Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md text-gray-800">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          {/* todo */}
          {/* `DialogContent` requires a `DialogTitle` for the component to be accessible for screen reader users. */}
          {/* Drawer */}
          <SheetContent side="right" className="w-3/4 sm:w-1/2 bg-white p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            {/* Animated List */}
            <nav>
              <ul>
                <AnimatePresence>
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{
                        delay: index * 0.3, // 300ms between each
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="mb-4 text-lg font-medium text-gray-700"
                    >
                      {item}
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
