'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const staffPicks = [
  {
    id: 1,
    title: 'The sunset faded into twilight and the moon slept',
    description:
      'We decided to shine a spotlight on something that brings us all together: food.',
    image: '/blog/blog7.png',
  },
  {
    id: 2,
    title: 'The sunset faded into twilight and the moon slept',
    description:
      'We decided to shine a spotlight on something that brings us all together: food.',
    image: '/blog/blog7.png',
  },
  {
    id: 3,
    title: 'The sunset faded into twilight and the moon slept',
    description:
      'We decided to shine a spotlight on something that brings us all together: food.',
    image: '/blog/blog7.png',
  },
]

export default function StaffPicks() {
  return (
    <section className="px-6 py-12">
      <p className="text-sm text-gray-500">You have to read these</p>
      <h2 className="text-2xl font-semibold mb-8">Staff Picks</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left - Main Featured */}
        <div className="border rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              The sunset faded into twilight and the moon slept
            </h3>
            <p className="text-gray-600 mb-4">
              We decided to shine a spotlight on something that brings us all together: food.
            </p>
          </div>

          <div className="relative w-full h-64 mb-4">
            <Image
              src="/blog/blog7.png"
              alt="Featured post"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <button className="self-start border border-gray-300 text-sm px-3 py-1 rounded hover:bg-gray-100 transition">
            Read More
          </button>
        </div>

        {/* Right - Smaller Picks */}
        <div className="flex flex-col gap-4">
          {staffPicks.map((post) => (
            <a
              key={post.id}
              href="#"
              className="flex items-center gap-4 border rounded-xl p-4 hover:shadow transition"
            >
              <div className="relative w-24 h-20 flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">{post.title}</h4>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {post.description}
                </p>
              </div>
              <ArrowRight className="text-gray-500 flex-shrink-0" size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
