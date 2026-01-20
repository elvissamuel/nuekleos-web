"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getPostBySlug } from "@/lib/api-calls";
import { QUERY_KEY } from "@/lib/rbac";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

// Date formatter
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function BlogDetails({ params }: PageProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.GET_POST_BY_SLUG, params.slug],
    queryFn: async () => {
      const res = await getPostBySlug(params.slug);
      if (res.data) return res.data;
      throw new Error("Post not found");
    },
  });

  if (isLoading) {
    return (
      <section className="w-full px-6 md:px-16 py-16">
        <div className="max-w-4xl mx-auto text-gray-600">
          Loading article...
        </div>
      </section>
    );
  }

  if (error || !data) {
    notFound();
  }

  const {
    title,
    content,
    coverImage,
    publishedAt,
    createdAt,
  } = data;

  const postDate = publishedAt || createdAt;
  const imageSrc = coverImage || "/blog/blog-hero.png";

  return (
    <section className="w-full bg-white px-6 md:px-16 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Date */}
        <p className="text-xs text-gray-500">
          {formatDate(postDate)}
        </p>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
          {title}
        </h1>

        {/* Featured Image */}
        <div className="relative w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          {content
            .split("\n\n")
            .filter(Boolean)
            .map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
        </div>
      </div>
    </section>
  );
}
