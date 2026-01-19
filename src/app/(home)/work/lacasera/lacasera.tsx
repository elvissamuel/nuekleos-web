"use client";

import Image from "next/image";

const LacaseraContent = () => {
  const sections = [
    {
      id: 1,
      heading: "The Task",
      content:
        "To Reignite national pride and hope after the emotional toll of COVID-19 by rallying Nigerians through an Independence Day video that positions the brand as patriotic and people-focused.",
      image: "/work/lacasera/lacasera-task.png",
      imagePosition: "left",
      overlayColor: "bg-[#50A64F]/40",
    },
    {
      id: 2,
      heading: "The Solution",
      content:
        "Created a powerful spoken word video that captured the nation's resilience and highlighted the next steps for Nigeria post-pandemic — a message of renewal, unity, and progress.",
      image: "/work/lacasera/solution.png",
      imagePosition: "right",
      overlayColor: "bg-[#EF6F72]/60",
    },
    {
      id: 3,
      heading: "The Result",
      content:
        "The Independence Day spoken word video reached millions of Nigerians, sparking nationwide conversations around unity, resilience, and progress in a post‑pandemic era. By positioning Lacasera as a patriotic force for recovery and renewal, the campaign successfully deepened emotional connection with audiences and reinforced the brand’s role as a symbol of togetherness and hope.",
      image: "/work/lacasera/result.png",
      imagePosition: "left",
      overlayColor: "bg-[#50A64F]/40",
    },
  ];

  return (
    <>
      <section className="w-full bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-sm md:text-xl font-semibold text-center mb-12">
            THIS IS NOT A FULL STOP-Lacasera
          </h1>

          {/* Sections */}
          <div className="space-y-16">
            {sections.map((section) => {
              const isImageLeft = section.imagePosition === "left";

              return (
                <div
                  key={section.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  {/* Image Section */}
                  <div className={`${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative w-full max-w-[450px] mx-auto">
                      {/* Main Image */}
                      <div className="relative z-10 w-full h-[250px] sm:h-[280px] md:h-[300px]">
                        <Image
                          src={section.image}
                          alt={section.heading}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Colored overlay offset at bottom right */}
                      <div
                        className={`absolute bottom-[-16px] right-[-16px] w-full h-full ${section.overlayColor} z-0`}
                      ></div>
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className={`${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
                    <h2 className="text-sm md:text-2xl font-bold mb-4">
                      {section.heading}
                    </h2>
                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-4 lg:mb-28">
                      {section.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-xl font-bold mb-8 text-center">
          Let's Work Together
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Logo */}
            <div className="flex justify-center mb-4 md:mb-20 lg:mb-32 lg:justify-start">
              <div className="relative w-full max-w-[300px] h-[100px] md:h-[200px]">
                <Image
                  src="/contact/logo.svg"
                  alt="Neukleos Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="text"
                placeholder="Company name"
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black transition-colors"
              />
              <div className="flex justify-center lg:justify-start pt-4">
                <button className="bg-black text-white px-12 py-3 font-medium hover:bg-gray-800 transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LacaseraContent;