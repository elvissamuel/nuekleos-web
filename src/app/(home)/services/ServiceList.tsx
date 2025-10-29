"use client";
import { useState, type MouseEvent } from "react";

const services = [
  {
    id: "01",
    title: "BUSINESS TRANSFORMATION",
    tags: ["Innovation", "Transformation", "Excellence"],
    desc: "We help CEOs and CMOs in developing markets turn digital disruption into sustainable growth through creativity, strategic innovation, and tailored digital roadmaps. Our expertise spans planning, product innovation, experience strategy, and process design to deliver lasting competitive advantage.",
    color: "#CEE3D2",
  },
  {
    id: "02",
    title: "DIGITAL MEDIA INVESTMENT MANAGEMENT",
    tags: ["Strategy", "Reach", "Markets"],
    desc: "We guide the brand’s strategic resource allocation and scheduling of investment across media channels, platforms and partners. Digital drives high reach across core target groups in Nigeria, West Africa and other developing markets who are largely mobile first or mobile only",
    color: "#FFFFBA",
  },
  {
    id: "03",
    title: "PERFORMANCE MARKETING SCIENCE",
    tags: ["Value", "Results", "Impact"],
    desc: "We help brands eliminate wasted spend and maximise value by driving direct response through performance marketing. With integrated analytics and tracking, we deliver measurable results for financial services, ecommerce, and acquisition-focused businesses.",
    color: "#F6D9E6",
  },
  {
    id: "04",
    title: "DIGITAL PRODUCTION ",
    tags: ["Attention", "Creativity", "Impact"],
    desc: " We create iconic digital content that captures fragmented consumer attention and drives engagement. Through strategy, design, and production, we deliver cohesive solutions that meet audience needs and exceed business goals.",
    color: "#D6E8D2",
  },
  {
    id: "05",
    title: "SOCIAL",
    tags: ["Expertise", "Storytelling", "Integration"],
    desc: "Our social media team builds brands through creative storytelling and world-class expertise. By uniting paid, owned, and earned media, we deliver integrated strategies that drive measurable, long-term marketing success.",
    color: "#EF6F72",
  },
  {
    id: "06",
    title: "TECHNOLOGY",
    tags: ["Innovation", "Human-Centered", "Impact"],
    desc: "We design interactive, human-centred brand experiences through code, creativity, and user insight. As part of Tech+, West Africa's largest tech event, we champion innovation as a driver of youth development and economic empowerment.",
    color: "#CBCBCB",
  },
];

export default function ServicesList() {
  const [active, setActive] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) {
      setActive(active === id ? null : id);
    }
  };

  const handleScrollToContact = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full border-t border-gray-300">
      <div className="py-16 max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-lg md:text-3xl font-bold text-left">
          We are proud of what we do
        </h2>
        <p className="text-gray-600 text-xs md:text-lg dark:text-gray-300 mt-2 text-left">
          System Thinking based on principles + methods
        </p>
      </div>

      <div className="divide-y divide-gray-300">
        {services.map((service) => {
          const isActive = active === service.id;
          return (
            <div
              key={service.id}
              onClick={() => handleToggle(service.id)}
              onMouseEnter={() =>
                typeof window !== "undefined" && window.innerWidth >= 768 && setActive(service.id)
              }
              onMouseLeave={() => typeof window !== "undefined" && window.innerWidth >= 768 && setActive(null)}
              className={`transition-all duration-300 cursor-pointer ${
                isActive ? "py-12 md:py-16" : "py-8"
              }`}
              style={{
                backgroundColor: isActive ? service.color : "transparent",
              }}
            >
              <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-start md:justify-between">
                <span className="text-lg font-medium md:w-1/12 mb-4 md:mb-0 md:mr-16">
                  {service.id}
                </span>

                <div className="flex-1 md:w-11/12">
                  <h3 className="text-sm md:text-2xl font-semibold mb-3">{service.title}</h3>

                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300 text-xs md:text-base">
                    {service.tags.map((tag, i) => (
                      <span key={tag + i}>• {tag}</span>
                    ))}
                  </div>

                  {isActive && (
                    <div className="mt-4 md:mt-6">
                      <p className="text-gray-700 dark:text-gray-300 text-xs md:text-base leading-relaxed">
                        {service.desc}
                      </p>

                      <button
                        onClick={handleScrollToContact}
                        className="mt-6 border border-gray-700 text-xs md:text-lg dark:border-gray-300 px-4 py-1 md:px-6 md:py-2 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black transition"
                      >
                        Discuss Project
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
