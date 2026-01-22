"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] md:h-[100vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/about/about-hero-bg.png"
        alt="Neukleos team collaboration"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Text content */}
      <div className="absolute inset-0 bg-black/50 flex items-end">
        {/* Mobile & Tablet */}
        <div className="md:hidden max-w-7xl mx-auto w-full px-6">
          <h1 className="text-white text-4xl font-bold tracking-wide mb-24 -ml-2">
            Our work
          </h1>
        </div>

        {/* Desktop */}
        <h1 className="hidden md:block text-white text-4xl font-bold tracking-wide mb-24 ml-10">
          Our work
        </h1>
      </div>
    </section>
  );
}