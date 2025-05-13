"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { name: "Google", src: "/google.png" },
  { name: "Facebook", src: "/facebook.png" },
  { name: "Amazon", src: "/amazon.png" },
  { name: "Netflix", src: "/netflix.png" },
  { name: "Microsoft", src: "/microsoft.png" },
  { name: "Apple", src: "/apple.png" },
  { name: "Twitter", src: "/twitter.png" },
  { name: "Spotify", src: "/spotify.png" },
];

export default function BrandsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-12">Our Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center bg-white shadow-sm rounded-lg p-6 transition-all"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={150}
                height={80}
                className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
