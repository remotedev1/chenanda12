// components/VideoHero.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function VideoHero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/video-thumbnail.jpg" // Replace with your image
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Play Button */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="z-10 flex items-center justify-center w-28 h-28 text-white -tracking-tight rounded-full  backdrop-blur-md border border-white shadow-xl hover:scale-105 transition-transform"
          >
            {/* <Play className="w-8 h-8 text-black" /> */}
            PLAY
          </motion.button>
        </DialogTrigger>

        {/* Modal Content */}
        <DialogContent className="max-w-4xl w-full p-0 aspect-video overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/tE5PMxhPngI?autoplay=1"
            title="Chenanda Ainmane"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>
    </section>
  );
}
