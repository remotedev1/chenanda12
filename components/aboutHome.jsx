"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutHome() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/header-new.jpg" // Place your uploaded image inside public/ folder
        alt="Football Hero"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-4xl px-6 text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm uppercase tracking-widest mb-4">Welcome</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Experience the true <br /> joy of <br /> hockey games!
        </h1>
        <Button variant="default" className="rounded-full px-8 py-4 text-lg">
          About Us
        </Button>
      </motion.div>
    </section>
  );
}
