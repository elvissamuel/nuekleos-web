"use client";

import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-white dark:bg-navy text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div>
            <h3 className="text-xl md:text-2xl mt-28">Who we are</h3>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A fun-loving creative bunch
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              Neukleos is a full-service digital agency. As the digital agency
              of the future, Neukleos focuses on developing strategy and content
              that build brands and create meaningful digital experiences.
            </p>
            <p className="text-sm leading-relaxed mb-6">
              We strongly believe that digital is not a department within
              marketing but that real digital transformation must permeate all
              facets of any organization policy, process, and product with
              C-Level ownership. As leaders in multi-channel marketing, our
              collaborative culture is amplified through our converged creative,
              media, technology, and strategy model. We create experiences that
              transform brands, grow businesses, and make people's lives better.
            </p>
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Card 1 - Red */}
          <div className="relative w-full">
            {/* Front white card */}
            <div className="relative z-10 bg-white dark:bg-navy border-2 border-gray-300 dark:border-gray-700 text-center py-12 px-4">
              <p className="text-sm md:text-2xl">500+ clients</p>
            </div>
            {/* Colored back card */}
            <div
              className="absolute bottom-[-12px] right-[-12px] w-full h-full z-0"
              style={{ backgroundColor: "#EA5253" }}
            />
          </div>

          {/* Card 2 - Yellow */}
          <div className="relative w-full">
            {/* Front white card */}
            <div className="relative z-10 bg-white dark:bg-navy border-2 border-gray-300 dark:border-gray-700 text-center py-12 px-8">
              <p className="text-sm md:text-2xl">Multiple Awards Won</p>
            </div>
            {/* Colored back card */}
            <div
              className="absolute bottom-[-12px] right-[-12px] w-full h-full z-0"
              style={{ backgroundColor: "#FFFF6F" }}
            />
          </div>

          {/* Card 3 - Green */}
          <div className="relative w-full">
            {/* Front white card */}
            <div className="relative z-10 bg-white dark:bg-navy border-2 border-gray-300 dark:border-gray-700 text-center py-12 px-8">
              <p className="text-sm md:text-2xl">1000+ Ad campaigns</p>
            </div>
            {/* Colored back card */}
            <div
              className="absolute bottom-[-12px] right-[-12px] w-full h-full z-0"
              style={{ backgroundColor: "#77C163" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;