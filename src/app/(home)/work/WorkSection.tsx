"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WorksSection = () => {
  const projects = [
    {
      id: "lacasera",
      title: "LACASERA",
      description:
        "The aim of this campaign was to rally Nigerians and free them of the mental shackles post-strike (COVID) and to reawaken and to recover and move forward.",
      image: "/work/lacasera.png",
      overlayColor: "bg-[#BE595C]/70",
      slug: "/work/lacasera",
    },
    {
      id: "maggi",
      title: "MAGGI",
      description:
        "In 2023, amidst Nigeria's most divisive election with deep tribal tensions, we discovered a unifying truth: food. The 'United by Taste' campaign spotlighted how certain dishes and eating habits transcend our differences, showcasing food as the common language all Nigerians speak regardless of origin—a powerful reminder that shared flavors can bridge even the widest divides.",
      image: "/work/maggi.png",
      overlayColor: "bg-[#50A64F]/40",
      slug: "/work/maggi",
    },
    {
      id: "tecno-phantom",
      title: "TECNO PHANTOM X LAUNCH",
      description:
        "We developed a content idea that would not only create awareness for the new Tecno Phantom X phone but also showcase its features",
      image: "/work/tecno-phantom.png",
      overlayColor: "bg-[#E9C416]/20",
      slug: "/work/phantom",
    },
    {
      id: "golden-morn",
      title: "GOLDEN MORN",
      description:
        "Building on the saying Eat Breakfast like a King, we positioned Golden Morn as Nigeria's undisputed King of Breakfast. The campaign featured influential 'kings' from various fields celebrating the brand's number one breakfast cereal status, culminating in a breakfast-themed party where fans joined the royal celebration—reinforcing Golden Morn's reign as the ultimate morning choice.",
      image: "/work/golden-morn.png",
      overlayColor: "bg-[#EF6F72]/60",
      slug: "/work/golden-morn",
    },
    {
      id: "nestle-pure-life",
      title: "Nestle Pure Life",
      description:
        "We sparked fun, controversial debates asking 'Can a party survive without water?' to reposition Nestlé Pure Life from a background necessity to an essential party element. By highlighting how water plays a vital role alongside other key party personas, we launched the brand's first-ever thematic advertising campaign in Nigeria, successfully establishing Nestlé Pure Life as 'The Life of the Party.'",
      image: "/work/nestle.png",
      overlayColor: "bg-[#50A64F]/40",
      slug: "/work/nestle",
    },
    {
      id: "haier",
      title: "Haier Thermocool",
      description:
        "Haier Thermocool needed to address Nigeria's biggest daily worry—power and energy costs—while justifying premium pricing through the Big Brother Naija platform. We launched 'One Less Worry. One More Reason to Feel at Home,' combining TVCs with real family scenarios, a BBN scavenger hunt, and Stan Nze-led influencer storytelling. The fully integrated campaign successfully repositioned inverter appliances from functional machines into emotional family essentials that bring comfort and ease daily stress.",
      image: "/work/Hpz.jpg",
      overlayColor: "bg-[#E9C416]/25",
      slug: "/work/haier-thermocool",
    },

    // Extra projects
    
  ];

  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore ? projects : projects.slice(0, 6);

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {visibleProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative w-full max-w-[500px] mx-auto">
                    <div className="relative z-10 w-full h-[250px] sm:h-[200px] md:h-[300px] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div
                      className={`absolute bottom-[-16px] right-[-16px] w-full h-full ${project.overlayColor} z-0`}
                    ></div>
                  </div>
                </div>

                <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <h2 className="text-sm md:text-2xl font-bold mb-4">{project.title}</h2>
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

        {/* View More / View Less */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowMore(!showMore)}
            className="border-2 border-black px-8 py-3 font-bold text-lg hover:bg-black hover:text-white transition-colors"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
