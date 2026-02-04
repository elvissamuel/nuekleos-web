"use client";

import Image from "next/image";
import { useState } from "react";
import { Maximize2 } from "lucide-react";

const MaggiContent = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);

  const sections = [
    {
      id: 1,
      heading: "The Task",
      content:
        "To Reignite national pride and hope after the emotional toll of COVID-19 by rallying Nigerians through an Independence Day video that positions the brand as patriotic and people-focused.",
      image: "/work/maggi/maggi-task.png",
      imagePosition: "left",
      overlayColor: "bg-[#50A64F]/40",
    },
    {
      id: 2,
      heading: "The Solution",
      content:
        "Created a powerful spoken word video that captured the nation's resilience and highlighted the next steps for Nigeria post-pandemic — a message of renewal, unity, and progress.",
      image: "/work/maggi/solution.png",
      imagePosition: "right",
      overlayColor: "bg-[#EF6F72]/60",
    },
    {
      id: 3,
      heading: "The Result",
      content:
        "The campaign reached 7.2 million Nigerians with 26.9 million impressions, generating 482,928 engagements and inspiring 27,600 people to use the AR filter. By delivering a powerful spoken word video that reignited national pride and hope after COVID-19, Maggi successfully positioned itself as a patriotic, people-focused brand — deepening emotional connection with Nigerians and reinforcing unity, renewal, and progress.",
      imagePosition: "left",
      overlayColor: "bg-[#50A64F]/40",
      type: "video",
      googleDriveUrl:
        "https://drive.google.com/file/d/1qfl2IM3BfN-Xy79kATJeFV6Z70bV1JtR/preview",
      thumbnail: "/work/maggi/result.png",
    },
  ];

  return (
    <>
      {/* Title Section */}
      <section className="w-full h-[20vh] bg-white py-8 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-xl md:text-2xl font-semibold mt-3">
            United by taste - Maggi
          </h1>
        </div>
      </section>

    

      {/* Main Sections */}
      <section className="w-full bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {sections.map((section) => {
            const isImageLeft = section.imagePosition === "left";

            return (
              <div
                key={section.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                {/* Media */}
                <div className={isImageLeft ? "lg:order-1" : "lg:order-2"}>
                  <div className="relative w-full max-w-[450px] mx-auto">
                    <div className="relative z-10 w-full h-[250px] sm:h-[200px] md:h-[300px]">
                      {section.type === "video" ? (
                        playingVideo === section.id ? (
                          <div className="relative w-full h-full">
                            <iframe
                              src={section.googleDriveUrl}
                              className="w-full h-full"
                              allow="autoplay"
                            />
                            <button
                              onClick={() =>
                                setFullscreenVideo(section.googleDriveUrl!)
                              }
                              className="absolute top-2 right-2 bg-black/70 text-white p-2 rounded"
                            >
                              <Maximize2 size={20} />
                            </button>
                          </div>
                        ) : (
                          <div
                            onClick={() => setPlayingVideo(section.id)}
                            className="relative w-full h-full cursor-pointer group"
                          >
                            <Image
                              src={section.thumbnail!}
                              alt={section.heading}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1" />
                              </div>
                            </div>
                          </div>
                        )
                      ) : (
                        <Image
                          src={section.image!}
                          alt={section.heading}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>

                    {/* Offset Overlay */}
                    <div
                      className={`absolute bottom-[-16px] right-[-16px] w-full h-full ${section.overlayColor} z-0`}
                    />
                  </div>
                </div>

                {/* Text */}
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
      </section>

      {/* Fullscreen Video */}
      {fullscreenVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setFullscreenVideo(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video">
            <button
              className="absolute -top-10 right-0 text-white text-3xl"
              onClick={() => setFullscreenVideo(null)}
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
    </>
  );
};

export default MaggiContent;
