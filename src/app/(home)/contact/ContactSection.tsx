"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
            Let&apos;s Collaborate
          </h2>

          <div className="relative w-[140px] h-[140px] md:w-[220px] md:h-[220px]">
            <Image
              src="/contact/logo.svg" 
              alt="Neukleos logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p className="text-sm text-gray-700 mb-6">
            Let’s work together. We can help you reach your goals – let’s start
            a conversation.
          </p>

          <form className="space-y-5">
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />

            {/* Phone number */}
            <input
              type="text"
              placeholder="Phone number"
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />

            {/* First name */}
            <input
              type="text"
              placeholder="First name"
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />

            {/* Company name */}
            <input
              type="text"
              placeholder="Company name"
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />

            {/* Location group */}
            <div>
              <h4 className="font-semibold text-sm mb-2">
                Where do you need help?
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
                {["Nigeria", "Africa", "Europe", "America"].map((region) => (
                  <label key={region} className="flex items-center gap-2">
                    <input type="radio" name="region" className="accent-black" />
                    <span>{region}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Service group */}
            <div>
              <h4 className="font-semibold text-sm mb-2">Service Requested</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {[
                  "SEO",
                  "Social Media Management",
                  "Digital Marketing",
                  "Website Development",
                  "CRM",
                  "Content Creation",
                  "App Marketing",
                  "Other",
                  "Looking for job",
                ].map((service) => (
                  <label key={service} className="flex items-center gap-2">
                    <input type="radio" name="service" className="accent-black" />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message box */}
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
            ></textarea>

            {/* Submit button */}
            <button
              type="submit"
              className="bg-black text-white font-medium px-10 py-2 hover:bg-gray-900 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
