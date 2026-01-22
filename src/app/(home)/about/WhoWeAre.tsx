"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 900; 
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = Math.floor(progress * value);

      setCount(eased);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, value]);

  return (
  <span ref={ref}>
    {count}
  </span>
);
};

const WhoWeAre = () => {
  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-white dark:bg-navy text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div>
            <h3 className="text-xl md:text-2xl mt-0 md:mt-28 font-semibold">
              Who we are
            </h3>
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
              C-Level ownership.
            </p>
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Card 1 */}
          <div className="relative w-full">
            <div className="relative z-10 bg-white dark:bg-navy border-2 border-gray-300 dark:border-gray-700 text-center py-12 px-4">
              <p className="text-sm md:text-2xl">
                <AnimatedNumber value={500} />+ clients
              </p>
            </div>
            <div
              className="absolute bottom-[-12px] right-[-12px] w-full h-full z-0"
              style={{ backgroundColor: "#EA5253" }}
            />
          </div>

          {/* Card 2 */}
          <div className="relative w-full">
            <div className="relative z-10 bg-white dark:bg-navy border-2 border-gray-300 dark:border-gray-700 text-center py-12 px-8">
              <p className="text-sm md:text-2xl">Multiple Awards Won</p>
            </div>
            <div
              className="absolute bottom-[-12px] right-[-12px] w-full h-full z-0"
              style={{ backgroundColor: "#FFFF6F" }}
            />
          </div>

          {/* Card 3 */}
          <div className="relative w-full">
            <div className="relative z-10 bg-white dark:bg-navy border-2 border-gray-300 dark:border-gray-700 text-center py-12 px-8">
              <p className="text-sm md:text-2xl">
                <AnimatedNumber value={1000} />+ Ad campaigns
              </p>
            </div>
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
