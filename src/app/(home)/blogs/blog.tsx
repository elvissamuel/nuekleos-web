"use client";

import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "The sunset faded into twilight",
    date: "11 April, 2022",
    category: "Food",
    excerpt:
      "Let's Work Together. We can help you reach your goals – Let's start a conversation",
    image: "/blog/blog1.png",
    slug: "sunset-faded-into-twilight",
  },
  {
    id: 2,
    title: "Exploring the Creative Process",
    date: "22 April, 2022",
    category: "Design",
    excerpt:
      "Discover how our creative team approaches storytelling and visual identity through innovation.",
    image: "/blog/blog2.png",
    slug: "exploring-creative-process",
  },
  {
    id: 3,
    title: "Building Brands that Inspire",
    date: "30 April, 2022",
    category: "Branding",
    excerpt:
      "How brands can communicate values, connect emotionally, and inspire long-term loyalty.",
    image: "/blog/blog3.png",
    slug: "building-brands-inspire",
  },
  {
    id: 4,
    title: "The Future of Digital Media",
    date: "12 May, 2022",
    category: "Media",
    excerpt:
      "A deep dive into trends shaping digital content and advertising in developing markets.",
    image: "/blog/blog4.png",
    slug: "future-of-digital-media",
  },
  {
    id: 5,
    title: "Human-Centered Innovation",
    date: "24 May, 2022",
    category: "Innovation",
    excerpt:
      "Why design thinking and empathy are key drivers of technology and business growth.",
    image: "/blog/blog5.png",
    slug: "human-centered-innovation",
  },
  {
    id: 6,
    title: "Performance Marketing Science",
    date: "1 June, 2022",
    category: "Marketing",
    excerpt:
      "We help brands maximize value by combining creative strategy with data-driven precision.",
    image: "/blog/blog6.png",
    slug: "performance-marketing-science",
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      {/* Header */}
      <div className="mb-2">
        <p className="text-sm text-gray-600 mb-1">Browse and read the latest stuff</p>
        <h2 className="text-3xl md:text-4xl font-bold">Latest Posts</h2>
      </div>

      {/* Grid layout with proper spacing */}
      <div className="grid md:grid-cols-3 gap-x-6 gap-y-32 mt-12">
        {posts.map((post) => (
          <div key={post.id} className="relative group">
            {/* Blog Image - reduced size */}
            <div className="w-[350px] h-[300px] relative overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Card Overlay - smaller and better positioned */}
            <div className="absolute bottom-0 left-0 bg-white w-[75%] p-3 shadow-lg translate-y-[40%]">
              <h3 className="text-base md:text-lg font-bold mb-2 leading-tight">
                {post.title}
              </h3>

              <div className="flex items-center text-xs text-gray-500 mb-3">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.category}</span>
              </div>

              <p className="text-gray-700 text-xs leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-block border-2 border-black px-5 py-2 text-xs font-medium hover:bg-black hover:text-white transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}