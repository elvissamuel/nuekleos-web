"use client";

import Image from "next/image";

const BlogPage = () => {
  return (
    <section className="w-full bg-white px-6 md:px-16 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Date */}
        <p className="text-xs text-gray-500">16th August, 2025</p>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
          The sunset faded into twilight and the moon slept
        </h1>

        {/* Featured Image */}
        <div className="relative w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/blog/blog-hero.png" 
            alt="Blog cover"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <p>
            We created a mini talk-show series of six episodes featuring Tobi
            Bakre as host, interviewing key influencers from different industries
            who shared bold, extraordinary stories that reflected the spirit of
            the Phantom X. In 2023, Nigeria was rocked by one of its most intense
            elections ever.
          </p>

          <p>
            Data from social listening done leading up to the independence day
            campaign showed that Nigerians were deeply divided along tribal
            lines, with tensions running high among different groups. But in the
            midst of this chaos, we had an idea.
          </p>

          <p>
            We created a mini talk-show series of six episodes featuring Tobi
            Bakre as host, interviewing key influencers from different industries
            who shared bold, extraordinary stories that reflected the spirit of
            the Phantom X. In 2023, Nigeria was rocked by one of its most intense
            elections ever.
          </p>

          <p>
            Data from social listening done leading up to the independence day
            campaign showed that Nigerians were deeply divided along tribal
            lines, with tensions running high among different groups. But in the
            midst of this chaos, we had an idea.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
