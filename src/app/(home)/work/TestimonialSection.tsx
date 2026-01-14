"use client";

import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Leo",
      role: "Lead Designer",
      image: "/testimonials/leo.png",
      quote: "It was a very good experience",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    },
    {
      id: 2,
      name: "Leo",
      role: "Lead Designer",
      image: "/testimonials/leo.png",
      quote: "It was a very good experience",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    },
    {
      id: 3,
      name: "Leo",
      role: "Lead Designer",
      image: "/testimonials/leo.png",
      quote: "It was a very good experience",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - Quote Icon and Heading */}
          <div className="lg:col-span-3">
            {/* Quote Icon */}
            <div className="text-8xl font-bold text-gray-800 leading-none mb-4">
              &#8220;
            </div>
            
            {/* Heading */}
            <h2 className="text-2xl md:text-2xl font-bold leading-tight ">
              What our<br />Clients are<br />saying
            </h2>
          </div>

          {/* Right Side - Testimonial Cards */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="border-2 border-black p-5 bg-white"
                >
                  {/* Client Info */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">{testimonial.name}</h3>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <h4 className="font-bold text-base mb-2">{testimonial.quote}</h4>

                  {/* Testimonial Text */}
                  <p className="text-xs text-gray-700 leading-relaxed text-center">
                    {testimonial.testimonial}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;