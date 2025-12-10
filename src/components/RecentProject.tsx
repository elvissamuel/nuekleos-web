"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/work/haier-thermocool/hpz-bg.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex",
    link: "/work/haier-thermocool",
  },
  {
    image: "/project-bg-2.png",
    text: "Second project description goes here. Replace this with real data from your designs.",
    link: "/projects/case-study-2",
  },
  {
    image: "/project-bg-3.png",
    text: "Third project description goes here. More placeholder text for the slider functionality.",
    link: "/projects/case-study-3",
  },
];

export default function RecentProjects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); 

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[index];

  // typed Variants — functions receive the `custom` value (our direction)
  const slideVariants: Variants = {
    hidden: (dir: number) => ({
      x: dir === 1 ? 150 : -150,
      opacity: 0,
      scale: 0.99,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: "easeInOut" },
    },
    exit: (dir: number) => ({
      x: dir === 1 ? -150 : 150,
      opacity: 0,
      scale: 0.99,
      transition: { duration: 0.45, ease: "easeInOut" },
    }),
  };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 space-y-16">

      {/* ---------------- MOBILE VERSION ---------------- */}
      <div className="block sm:hidden">
        <div className="relative w-full h-[400px] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={current.image}
                  alt="Recent project background"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content card (on top of bg) */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-black/40 backdrop-blur-md text-white p-6 w-full max-w-sm h-[320px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs tracking-widest font-light uppercase">
                        Recent Projects
                      </p>

                      <div className="flex gap-3 text-gray-200">
                        <button onClick={prevSlide} aria-label="Previous Project">
                          <ArrowLeft size={18} />
                        </button>
                        <button onClick={nextSlide} aria-label="Next Project">
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>

                    <p className="text-gray-200 leading-relaxed text-xs max-w-md mt-24">
                      {current.text}
                    </p>
                  </div>

                  <Link
                    href={current.link}
                    className="text-red-600 text-xs font-semibold transition self-start hover:text-red-700"
                  >
                    Read case study →
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ---------------- DESKTOP VERSION ---------------- */}
      <div className="hidden sm:block">
        <div className="relative w-full h-[550px] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={current.image}
                  alt="Recent project background"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-y-0 left-0 flex items-center">
                <div className="ml-10 md:ml-16 bg-black/40 backdrop-blur-md text-white p-10 md:p-14 w-[75%] h-[75%] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm tracking-widest font-light uppercase">
                        Recent Projects
                      </p>

                      <div className="flex gap-3 text-gray-200">
                        <button onClick={prevSlide} aria-label="Previous Project">
                          <ArrowLeft size={20} />
                        </button>
                        <button onClick={nextSlide} aria-label="Next Project">
                          <ArrowRight size={20} />
                        </button>
                      </div>
                    </div>

                    <p className="text-gray-200 leading-relaxed text-xs md:text-xs max-w-md mt-44">
                      {current.text}
                    </p>
                  </div>

                  <Link
                    href={current.link}
                    className="text-red-600 px-6 py-3 text-sm font-semibold transition self-start hover:text-red-700"
                  >
                    Read case study →
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ---------------- BOTTOM STATIC CARDS ---------------- */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative w-full h-[450px] overflow-hidden group">
          <Image src="/project-1.png" alt="Project 1" fill className="object-cover" />
          <div className="absolute bottom-6 left-6">
            <Link
              href="/projects/project-1"
              className="bg-gradient-to-r from-gray-800/70 to-gray-900/60 text-yellow-300 px-6 py-3 text-sm font-semibold backdrop-blur-md"
            >
              Read case study →
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[450px] overflow-hidden group">
          <Image src="/project-2.png" alt="Project 2" fill className="object-cover" />
          <div className="absolute bottom-6 left-6">
            <Link
              href="/work/golden-morn"
              className="bg-gradient-to-r from-gray-800/70 to-gray-900/60 text-yellow-300 px-6 py-3 text-sm font-semibold backdrop-blur-md"
            >
              Read case study →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
