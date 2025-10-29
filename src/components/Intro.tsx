"use client";

import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Text Section */}
        <div className="self-start">
          <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            A fun–loving <br /> creative bunch
          </h2>

          <p className="mt-6 text-sm md:text-sm text-gray-700 leading-relaxed max-w-md">
            Neukleos is a full-service digital agency. As the digital agency of
            the future, Neukleos focuses on developing strategy and content that
            build brands and creating meaningful digital experiences.
          </p>

          {/* Read More Button */}
          <Link
            href="/about"
            className="inline-block mt-8 bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
          >
            Read More
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full max-w-[420px] mx-auto md:mx-0">
          {/* Main image */}
          <div className="relative z-10 w-full h-[300px] sm:h-[400px] md:h-[410px] overflow-hidden">
            <Image
              src="/intro-main.png"
              alt="Neukleos team member"
              fill
              className="object-cover"
            />
          </div>

          {/* Offset layer */}
          <div className="absolute bottom-[-16px] right-[-16px] w-full h-full bg-[#F9B9C3] z-0" />
        </div>
      </div>
    </section>
  );
}