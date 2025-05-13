"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const players = [
  { id: 5, name: "Elijah Thornton", role: "Quarterback", src: "/player1.jpg" },
  { id: 4, name: "Nicholas Crawford", role: "Fullback", src: "/player2.jpg" },
  { id: 6, name: "Jeetan Patel", role: "Wide receiver", src: "/player3.jpg" },
  { id: 11, name: "Paul Collingwood", role: "Fullback", src: "/player4.jpg" },
  { id: 6, name: "Brendon McCullum", role: "Quarterback", src: "/player5.jpg" },
  { id: 7, name: "Chris Gayle", role: "Fullback", src: "/player6.jpg" },
  { id: 8, name: "AB De Villiers", role: "Wide receiver", src: "/player7.jpg" },
];

export default function TeamCarousel() {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(5);
  const [isTransitioning, setIsTransitioning] = useState(true);
  //comment
  const containerRef = useRef(null);

  const updateCardsToShow = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setCardsToShow(5);
    } else if (width >= 768) {
      setCardsToShow(3);
    } else {
      setCardsToShow(1);
    }
  };

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const totalSlides = players.length;
  const slides = [...players, ...players.slice(0, cardsToShow)]; // clone first few

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (index === totalSlides) {
      setIsTransitioning(false);
      setIndex(0);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50); // small delay to re-enable transition
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () =>
      setIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const calculateTranslateX = () => {
    return `-${(index * 100) / cardsToShow}%`;
  };

  const calculateProgress = () => {
    const progressIndex = index % totalSlides;
    return (progressIndex / (totalSlides - 1)) * 100;
  };

  return (
    <section className="bg-[#121914] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-gray-400 tracking-widest mb-4">
          PLAYERS
        </p>
        <h2 className="text-center text-4xl font-bold text-white mb-12">
          Our main team
        </h2>

        <div
          {...swipeHandlers}
          className="relative overflow-hidden cursor-grab"
        >
          <motion.div
            ref={containerRef}
            animate={{ x: calculateTranslateX() }}
            transition={
              isTransitioning
                ? { type: "tween", duration: 0.5 }
                : { duration: 0 }
            }
            className="flex"
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((player, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / cardsToShow}%` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={player.src}
                      alt={player.name}
                      fill
                      className="object-cover rounded-md"
                    />
                    <span className="absolute top-4 left-4 text-3xl font-bold text-white">
                      {player.id}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {player.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{player.role}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-700 overflow-hidden">
            <motion.div
              animate={{ width: `${calculateProgress()}%` }}
              transition={{ ease: "linear", duration: 0.5 }}
              className="h-full bg-red-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
