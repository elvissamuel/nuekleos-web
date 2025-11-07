"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/Hero-bg.png"
        alt="Neukleos team working"
        fill
        priority
        className="object-cover object-center"
      />

      

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center h-full pl-4 sm:pl-8 md:pl-16 lg:pl-16 max-w-[650px] pt-32">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-[#FFFF00] to-[#FFFFFF] bg-clip-text text-transparent">The Anti-Default</span>{" "} <br />
          <span className="bg-gradient-to-r from-[#FFFF00] to-[#FFFFFF] bg-clip-text text-transparent">Thinking Agency</span>
        </h1>

        <p className="mt-6 text-sm text-gray-200 leading-relaxed">
          We shape a brand’s identity, helping businesses stand out and 
          connect with their audience.
        </p>

       <Link href="/contact" className="inline-block mt-8 bg-white text-gray-900 font-medium px-6 py-3 hover:bg-gray-100 transition w-fit" > 
          Get in Touch 
          
        </Link>
      </div>
    </section>
  );
}
