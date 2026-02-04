"use client";

import Image from "next/image";
import { useState } from "react";
import { Maximize2 } from "lucide-react";

const GoldenMornContent = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);

  const sections = [
    {
      id: 1,
      heading: "The Task",
      content:
        "Create a compelling campaign to celebrate World Breakfast Day while reinforcing Golden Morn's position as Nigeria's leading breakfast brand.",
      googleDriveUrl: "https://drive.google.com/file/d/1TCAGxUBQPnfUE8N44nHIWzToAf57RWoE/preview",
      thumbnail: "/work/golden-morn/task-thumbnail.png",
      imagePosition: "left",
      overlayColor: "bg-[#50A64F]/40",
    },
    {
      id: 2,
      heading: "The Solution",
      content:
        'Inspired by the saying "Eat breakfast like a King," we built the campaign around the idea that if breakfast is King, then Golden Morn is the King of Breakfast. We partnered with top influencers — "kings" in their various fields — and culminated the celebration with an engaging breakfast-themed party for fans.',
      googleDriveUrl: "https://drive.google.com/file/d/191BOFNAbjeM5rvP8UCvi3pkYo5-BPBCm/preview",
      thumbnail: "/work/golden-morn/solution-thumbnail.png",
      imagePosition: "right",
      overlayColor: "bg-[#EF6F72]/60",
    },
    {
      id: 3,
      heading: "The Result",
      content:
        "The campaign reached 11.6 million Nigerians with over 56.3 million impressions and generated 1.8 million views/plays, reinforcing Golden Morn’s position as Nigeria’s leading breakfast brand. By partnering with top influencers and celebrating World Breakfast Day with a vibrant breakfast‑themed party, the campaign crowned Golden Morn as the “King of Breakfast” in the hearts of consumers. Its strategic insight and execution were recognized nationally, winning Silver for Insights and Strategy at the Pitchers Awards 2024.",
      googleDriveUrl: "https://drive.google.com/file/d/17XR9cneQsrvFw9NjE43VxrKHf1i6sc_X/preview",
      thumbnail: "/work/golden-morn/result-thumbnail.png",
      imagePosition: "left",
      overlayColor: "bg-[#50A64F]/40",
    },
  ];

  const handlePlayClick = (id: number) => {
    setPlayingVideo(id);
  };

  const handleExpandClick = (videoUrl: string) => {
    setFullscreenVideo(videoUrl);
  };

  const closeFullscreen = () => {
    setFullscreenVideo(null);
  };

  return (
    <div className="w-full bg-white">
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-sm md:text-xl font-semibold text-center mb-12">
            King of Breakfast - GOLDEN MORN
          </h1>

          {/* Sections */}
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
                      {/* Video Frame */}
                      <div className="relative z-10 w-full h-[250px] sm:h-[200px] md:h-[300px]">
                        {!isPlaying ? (
                          <div
                            className="relative w-full h-full cursor-pointer group"
                            onClick={() => handlePlayClick(section.id)}
                          >
                            {/* Video Thumbnail */}
                            <Image
                              src={section.thumbnail}
                              alt={section.heading}
                              fill
                              className="object-cover"
                            />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-1" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="relative w-full h-full">
                            {/* Video playing in frame */}
                            <iframe
                              src={section.googleDriveUrl}
                              className="w-full h-full"
                              allow="autoplay"
                            />
                            {/* Expand button */}
                            <button
                              onClick={() => handleExpandClick(section.googleDriveUrl)}
                              className="absolute top-2 right-2 bg-black/70 hover:bg-black text-white p-2 rounded transition-colors z-20"
                              aria-label="Expand to fullscreen"
                            >
                              <Maximize2 size={20} />
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Colored overlay offset at bottom right */}
                      <div
                        className={`absolute -bottom-4 -right-4 w-full h-full ${section.overlayColor} z-0`}
                      />
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

      {/* Fullscreen Video Modal */}
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

      
    </div>
  );
};

export default GoldenMornContent;