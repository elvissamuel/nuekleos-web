"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 space-y-16">
      {/* Mobile Version - Only visible on small screens */}
      <div className="block sm:hidden">
        <div className="relative w-full h-[400px] overflow-hidden">
          {/* Background Image */}
          <Image
            src="/project-bg.png"
            alt="Recent project background"
            fill
            className="object-cover"
          />

          {/* Blurred Card */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-black/40 backdrop-blur-md text-white p-6 w-full max-w-sm h-[320px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-xs tracking-widest font-light uppercase">
                    Recent Projects
                  </p>

                  {/* Arrows */}
                  <div className="flex gap-3 text-gray-200">
                    <Link
                      href="#"
                      className="hover:text-white transition flex items-center"
                      aria-label="Previous Project"
                    >
                      <ArrowLeft size={18} />
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-white transition flex items-center"
                      aria-label="Next Project"
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                {/* Paragraph */}
                <p className="text-gray-200 leading-relaxed text-xs max-w-md mt-24">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
                  consectetur adipiscing elit quisque faucibus ex
                </p>
              </div>

              {/* Read Case Study */}
              <Link
                href="/projects/case-study"
                className="text-red-600 text-xs font-semibold transition self-start hover:text-red-700"
              >
                Read case study →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Version - Hidden on small screens */}
      <div className="hidden sm:block">
        <div className="relative w-full h-[550px] overflow-hidden">
          {/* Background Image */}
          <Image
            src="/project-bg.png"
            alt="Recent project background"
            fill
            className="object-cover"
          />

          {/* Blurred Card */}
          <div className="absolute inset-y-0 left-0 flex items-center justify-start">
            <div className="ml-10 md:ml-16 bg-black/40 backdrop-blur-md text-white p-10 md:p-14 w-[75%] h-[75%] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm tracking-widest font-light uppercase">
                    Recent Projects
                  </p>

                  {/* Arrows */}
                  <div className="flex gap-3 text-gray-200">
                    <Link
                      href="#"
                      className="hover:text-white transition flex items-center"
                      aria-label="Previous Project"
                    >
                      <ArrowLeft size={20} />
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-white transition flex items-center"
                      aria-label="Next Project"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>

                {/* Paragraph */}
                <p className="text-gray-200 leading-relaxed text-xs md:text-xs max-w-md mt-44">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
                  consectetur adipiscing elit quisque faucibus ex
                </p>
              </div>

              {/* Read Case Study */}
              <Link
                href="/projects/case-study"
                className="text-red-600 px-6 py-3 text-sm font-semibold transition self-start hover:text-red-700"
              >
                Read case study →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="relative w-full h-[450px] overflow-hidden group">
          <Image
            src="/project-1.png"
            alt="Project 1"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6">
            <Link
              href="/projects/project-1"
              className="bg-gradient-to-r from-gray-800/70 to-gray-900/60 backdrop-blur-md text-yellow-300 px-6 py-3 text-sm font-semibold hover:from-gray-700/80 hover:to-gray-900/70 transition"
            >
              Read case study →
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-full h-[450px] overflow-hidden group">
          <Image
            src="/project-2.png"
            alt="Project 2"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6">
            <Link
              href="/projects/project-2"
              className="bg-gradient-to-r from-gray-800/70 to-gray-900/60 backdrop-blur-md text-yellow-300 px-6 py-3 text-sm font-semibold hover:from-gray-700/80 hover:to-gray-900/70 transition"
            >
              Read case study →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;