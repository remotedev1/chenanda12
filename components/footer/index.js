"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowUp, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const images = [...Array(6).fill("https://picsum.photos/200")];
const smimages = [...Array(2).fill("https://picsum.photos/200")];

const Footer = () => {
  return (
    <footer className="text-black max-w-[80vw] mx-auto">
      {/* Newsletter Section */}
      <section className="flex flex-col items-center justify-center px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get the best blog stories
            <br />
            into your inbox!
          </h2>

          {/* Input + Button inside a rounded container with divider */}
          <div className="flex items-center w-full max-w-2xl bg-white rounded-full overflow-hidden border mt-4">
            <Input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 rounded-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <div className="h-6 w-px bg-gray-300 mx-2" />{" "}
            {/* Vertical divider */}
            <Button className="flex items-center gap-2 rounded-full mr-2">
              <Send size={16} /> Subscribe
            </Button>
          </div>

          <div className="mt-4 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />I agree to the{" "}
              <Link href="#" className="underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="relative p-4">
        {/* Centered Follow Me Button */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <Button className="rounded-full bg-pink-500 hover:bg-pink-600 text-white px-6 py-3">
            Follow Me on Instagram
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          {smimages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-32 md:h-48 overflow-hidden rounded-md group"
            >
              <Image
                src={src}
                alt="Gallery Image"
                fill
                className="object-cover transition-transform duration-300"
              />
              {/* Black hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Links */}
      <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 border-t">
        <p className="text-sm">&copy; 2025 by RemoteDev.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          {["Home", "About", "Sponsors", "Shop", "Contacts"].map(
            (item, idx) => (
              <Link key={idx} href="#" className="text-sm hover:underline">
                {item}
              </Link>
            )
          )}
        </div>
        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 py-4">
          {["facebook", "x", "dribbble", "instagram"].map((icon, idx) => (
            <Button key={idx} size="icon" variant="ghost">
              <span className="capitalize text-lg">{icon[0]}</span>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
