"use client";

import Image from "next/image";
import Link from "next/link";

const WorksSection = () => {
  const projects = [
    {
      id: "lacasera",
      title: "LACASERA",
      description: "The aim of this campaign was to rally Nigerians and free them of the mental shackles post-strike (COVID) and to reawaken and to recover and move forward.",
      image: "/work/lacasera.png",
      overlayColor: "bg-[#BE595C]/70",
      slug: "/work/lacasera",
    },
    {
      id: "maggi",
      title: "MAGGI",
      description: "No matter how you slice and dice it, some food combos are just considered disgusting and are likely to earn you judgment and strange looks. So, please who are these kinds of meals of the crazy team doing?",
      image: "/work/maggi.png",
      overlayColor: "bg-[#50A64F]/40",
      slug: "/work/maggi",
    },
    {
      id: "tecno-phantom",
      title: "TECNO PHANTOM X LAUNCH",
      description: "We produced a six-part talk show with Tee Billz and local influencers, using their stories to showcase the Tecno Phantom X and its standout features.",
      image: "/work/tecno-phantom.png",
      overlayColor: "bg-[#E9C416]/20",
      slug: "/work/phantom",
    },

    {
      id: "golden-morn",
      title: "GOLDEN MORN",
      description: `There's a popular saying "Eat Breakfast like a King. Lunch like a Prince and Dinner like a Pauper." Further driving it home, we said if Breakfast is King, then Golden Morn is King.`,
      image: "/work/golden-morn.png",
      overlayColor: "bg-[#EF6F72]/60",
      slug: "/work/golden-morn",
    },

    {
      id: "nestle-pure-life",
      title: "Nestle Pure Life",
      description: "There are several elements and important personas that make a party, a gathering or an event either fun, exciting or boring. They all play a key role in bringing life to the party.",
      image: "/work/nestle.png",
      overlayColor: "bg-[#50A64F]/40",
      slug: "",
    },

    {
      id: "wema",
      title: "Wema Bank",
      description: "Wema Bank drives real business results by embracing a holistic digital strategy spanning infrastructure, product design, marketing, and brand experiences.",
      image: "/work/wema.png",
      overlayColor: "bg-[#E9C416]/25",
      slug: "",
    },

  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Section */}
                <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative w-full max-w-[500px] mx-auto">
                    {/* Main Image */}
                    <div className="relative z-10 w-full h-[180px] sm:h-[200px] md:h-[300px] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Colored overlay offset at bottom right */}
                    <div
                      className={`absolute bottom-[-16px] right-[-16px] w-full h-full ${project.overlayColor} z-0`}
                    ></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <h2 className="text-sm md:text-2xl font-bold mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 text-sm md:text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Link
                    href={project.slug}
                    className="inline-block border-2 border-black px-6 py-2 font-medium hover:bg-black hover:text-white transition-colors mb-8 md:mb-28 lg:mb-32"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered View More Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="/works"
            className="border-2 border-black px-8 py-3 font-bold text-lg hover:bg-black hover:text-white transition-colors"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;