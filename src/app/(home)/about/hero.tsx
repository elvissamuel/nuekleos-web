"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] md:h-[90vh] flex items-center overflow-hidden">
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
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide mb-24 ml-10">
          About Us
        </h1>
      </div>
    </section>
  );
}