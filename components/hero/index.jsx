"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero.jpg')`,
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
        <h1 className="text-4xl md:text-6xl text-white font-bold">
          Welcome to the Game
        </h1>
      </div>
    </section>
  );
}
