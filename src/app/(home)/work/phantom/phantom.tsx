"use client";

import Image from "next/image";
import { useState } from "react";

const PhantomContent = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const sections = [
    {
      id: 1,
      heading: "The Task",
      content:
        "Develop a content idea that would not only create awareness for the new Tecno Phantom X but also highlight its standout features in a relatable, engaging way.",
      image: "/work/phantom/phantom-task.png",
      imagePosition: "left",
      overlayColor: "bg-[#50A64F]/40",
      type: "image",
    },
    {
      id: 2,
      heading: "The Solution",
      content:
        "We created a mini talk-show series of six episodes featuring Tobi Bakre as host, interviewing key influencers from different industries who shared bold, extraordinary stories that reflected the spirit of the Phantom X.",
      googleDriveUrl: "https://drive.google.com/file/d/1z6ut8rAQ-lzGGk0QUOlaLmG8kZ-Hf1tZ/preview",
      thumbnail: "/work/phantom/solution-thumbnail.png",
      imagePosition: "right",
      overlayColor: "bg-[#EF6F72]/60",
      type: "video",
    },
    {
      id: 3,
      heading: "The Result",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      googleDriveUrl: "https://drive.google.com/file/d/1z6ut8rAQ-lzGGk0QUOlaLmG8kZ-Hf1tZ/preview",
      thumbnail: "/work/phantom/result-thumbnail.png",
      imagePosition: "left",
      overlayColor: "bg-[#50A64F]/40",
      type: "video",
    },
  ];

  const openVideo = (videoUrl: string) => setSelectedVideo(videoUrl);
  const closeVideo = () => setSelectedVideo(null);

  return (
    <div className="w-full bg-white">
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-sm md:text-2xl font-semibold text-center mb-12">
            THE PHANTOM XTRAORDINAIRE – Tecno Phantom
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
                  {/* Media Section */}
                  <div className={isImageLeft ? "lg:order-1" : "lg:order-2"}>
                    <div className="relative w-full max-w-[450px] mx-auto">
                      {/* Main Media */}
                      <div className="relative z-10 w-full h-[180px] sm:h-[200px] md:h-[300px]">
                        {section.type === "image" ? (
                          <Image
                            src={section.image!}
                            alt={section.heading}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div
                            className="relative w-full h-full cursor-pointer group"
                            onClick={() => openVideo(section.googleDriveUrl!)}
                          >
                            <Image
                              src={section.thumbnail!}
                              alt={section.heading}
                              fill
                              className="object-cover"
                            />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-1"></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Colored overlay offset */}
                      <div
                        className={`absolute -bottom-4 -right-4 w-full h-full ${section.overlayColor} z-0`}
                      ></div>
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className={isImageLeft ? "lg:order-2" : "lg:order-1"}>
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

      {/* Video Modal (Google Drive Embed) */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div className="relative w-full max-w-5xl aspect-video">
            <button
              onClick={closeVideo}
              aria-label="Close video"
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
            >
              ✕
            </button>
            <iframe
              src={selectedVideo}
              className="w-full h-full"
              allow="autoplay"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Contact Section */}
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
    </div>
  );
};

export default PhantomContent;
