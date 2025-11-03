"use client";

import { useState } from "react";
import { ArrowDownRight } from "lucide-react";

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
        <p className="text-xl sm:text-xl md:text-xl text-gray-300">What we do</p>
        <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold">Our Services</h2>
        <p className="text-gray-400 text-sm sm:text-lg md:text-lg leading-relaxed">
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
                <h3 className="text-sm sm:text-xl md:text-xl font-medium">{service.title}</h3>
              </div>
              <ArrowDownRight
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              />
            </div>

            {/* Bullet points */}
            {activeIndex === index && service.bullets.length > 0 && (
              <ul className="mt-3 ml-14 space-y-1 text-gray-400 list-disc">
                {service.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
