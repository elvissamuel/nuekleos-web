"use client";

import { useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const services = [
    {
      id: 1,
      title: "Business Transformation",
      bullets: ["Innovation", "Transformation", "Excellence"],
    },
    {
      id: 2,
      title: "Digital Media Investment Management",
      bullets: ["Strategy", "Reach", "Market"],
    },
    {
      id: 3,
      title: "Performing Marketing Science",
      bullets: ["Value", "Results", "Impact"],
    },
    {
      id: 4,
      title: "Digital Production",
      bullets: ["Attention", "Creativity", "Impact"],
    },
    {
      id: 5,
      title: "Social",
      bullets: ["Expertise", "Storytelling", "Integration"],
    },
    {
      id: 6,
      title: "Technology",
      bullets: ["Innovation", "Human-Centered", "Impact"],
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-24 px-6 md:px-16 flex flex-col md:flex-row justify-between gap-12">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-xl text-gray-300">What we do</p>
        <h2 className="text-3xl md:text-5xl font-bold">Our Services</h2>
        <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
          Using digital marketing, digital content and technology, we create
          digital business strategy. We build brands through creative
          storytelling. We are your one-stop digital shop.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 space-y-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-sm font-medium">
                  {String(service.id).padStart(2, "0")}
                </span>
                <h3 className="text-sm md:text-xl font-medium">
                  {service.title}
                </h3>
              </div>

              <ArrowDownRight
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              />
            </div>

            {/* Animated Bullet Points */}
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden mt-4 ml-14 space-y-3"
                >
                  {service.bullets.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center gap-3 text-gray-400 text-sm"
                    >
                      {/* Custom Bullet */}
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                      <span>{point}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
