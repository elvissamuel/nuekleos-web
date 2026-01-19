"use client";

import Image from "next/image";
import { useState } from "react";
import { Maximize2 } from "lucide-react";

const NestleContent = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);

  const sections = [
    {
      id: 1,
      heading: "The Task",
      content:
        "Position our Nestlé Pure Life as a brand that enables well-deserved unwinding moments.",
      image: "/work/nestle/nestle-bg.png",
      imagePosition: "left",
      overlayColor: "bg-[#50A64F]/40",
      type: "image",
    },
    {
      id: 2,
      heading: "The Solution",
      content:
        "The Life of the Party campaign reframed water’s role at social gatherings by sparking playful debates around whether a party could survive without it. This bold cultural insight positioned Nestlé Pure Life as an essential presence at every celebration, marking its first‑ever thematic advertising campaign in Nigeria.",
      googleDriveUrl:
        "https://drive.google.com/file/d/1yIC0KDdq0apvIseaM3wxk_2y5fMgtHz1/preview",
      thumbnail: "/work/nestle/solution-thumbnail.png",
      imagePosition: "right",
      overlayColor: "bg-[#EF6F72]/60",
      type: "video",
    },
    {
  id: 3,
  heading: "The Result",
  content:
    "The campaign reached 5.6 million Nigerians with over 6.9 million impressions, driving 163,222 engagements and 281,843 video views. By sparking conversations and positioning the brand as essential to everyday moments, the campaign deepened consumer connection and reinforced its cultural relevance.",
  googleDriveUrl:
    "https://www.youtube.com/embed/qf_3sNYYnz4",
  thumbnail: "/work/nestle/result-thumbnail.png",
  imagePosition: "left",
  overlayColor: "bg-[#50A64F]/40",
  type: "video",
}
  ];

  const handlePlayClick = (id: number) => setPlayingVideo(id);
  const handleExpandClick = (url: string) => setFullscreenVideo(url);
  const closeFullscreen = () => setFullscreenVideo(null);

  return (
    <div className="w-full bg-white">
      {/* Main Section */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-sm md:text-2xl font-semibold text-center mb-12">
            The life of the party – Nestle Pure Life
          </h1>

          {/* Content Sections */}
          <div className="space-y-16">
            {sections.map((section) => {
              const isImageLeft = section.imagePosition === "left";
              const isPlaying = playingVideo === section.id;

              return (
                <div
                  key={section.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  {/* Media Section */}
                  <div className={isImageLeft ? "lg:order-1" : "lg:order-2"}>
                    <div className="relative w-full max-w-[450px] mx-auto">
                      <div className="relative z-10 w-full h-[250px] sm:h-[200px] md:h-[300px]">
                        {section.type === "image" ? (
                          <Image
                            src={section.image!}
                            alt={section.heading}
                            fill
                            className="object-cover"
                          />
                        ) : !isPlaying ? (
                          <div
                            className="relative w-full h-full cursor-pointer group"
                            onClick={() => handlePlayClick(section.id)}
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
                        ) : (
                          <div className="relative w-full h-full">
                            <iframe
                              src={section.googleDriveUrl!}
                              className="w-full h-full"
                              allow="autoplay"
                            />
                            {/* Expand button */}
                            <button
                              onClick={() =>
                                handleExpandClick(section.googleDriveUrl!)
                              }
                              className="absolute top-2 right-2 bg-black/70 hover:bg-black text-white p-2 rounded transition-colors z-20"
                              aria-label="Expand to fullscreen"
                            >
                              <Maximize2 size={20} />
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Colored Overlay */}
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

      {/* Fullscreen Modal */}
      {fullscreenVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <div className="relative w-full max-w-5xl aspect-video">
            <button
              onClick={closeFullscreen}
              aria-label="Close video"
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
            >
              ✕
            </button>
            <iframe
              src={fullscreenVideo}
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
            {/* Logo */}
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

            {/* Contact Inputs */}
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

export default NestleContent;
