"use client";

import Image from "next/image";

interface HeroProps {
  backgroundImage: string;
  projectTitle: string;
  caseStudyLabel?: string;
}

const Hero = ({ 
  backgroundImage, 
  projectTitle, 
  caseStudyLabel = "Case Study",
}: HeroProps) => {
  return (
    <section className="relative w-full h-[300px] md:h-[300px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={projectTitle}
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Case Study Label */}
        <p className="text-white text-sm md:text-base font-medium mb-2">
          {caseStudyLabel}
        </p>

        {/* Project Title */}
        <h1 className="text-white text-xl md:text-2xl lg:text-2xl font-bold mb-6 max-w-4xl">
          {projectTitle}
        </h1>

        
      </div>
    </section>
  );
};

export default Hero;