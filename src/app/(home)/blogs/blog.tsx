"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getPublishedPosts } from "@/lib/api-calls";
import { QUERY_KEY } from "@/lib/rbac";
import { IPost } from "@/lib/models/models";

// Format date helper
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function BlogPage() {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.GET_ALL_PUBLISHED_POSTS],
    queryFn: async () => {
      const response = await getPublishedPosts();
      if (response.data) {
        return response.data;
      }
      throw new Error("Failed to fetch posts");
    },
  });

  if (isLoading) {
    return (
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="mb-2">
          <p className="text-sm text-gray-600 mb-1">Browse and read the latest stuff</p>
          <h2 className="text-3xl md:text-4xl font-bold">Latest Posts</h2>
        </div>
        <div className="flex items-center justify-center h-64 mt-12">
          <div className="text-lg text-gray-600">Loading posts...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="mb-2">
          <p className="text-sm text-gray-600 mb-1">Browse and read the latest stuff</p>
          <h2 className="text-3xl md:text-4xl font-bold">Latest Posts</h2>
        </div>
        <div className="flex items-center justify-center h-64 mt-12">
          <div className="text-lg text-red-600">Error loading posts. Please try again later.</div>
        </div>
      </section>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="mb-2">
          <p className="text-sm text-gray-600 mb-1">Browse and read the latest stuff</p>
          <h2 className="text-3xl md:text-4xl font-bold">Latest Posts</h2>
        </div>
        <div className="flex items-center justify-center h-64 mt-12">
          <div className="text-lg text-gray-600">No posts available yet.</div>
        </div>
      </section>
    );
  }
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      {/* Header */}
      <div className="mb-2">
        <p className="text-sm text-gray-600 mb-1">Browse and read the latest stuff</p>
        <h2 className="text-3xl md:text-4xl font-bold">Latest Posts</h2>
      </div>

      {/* Grid layout with proper spacing */}
      <div className="grid md:grid-cols-3 gap-x-6 gap-y-32 mt-12">
        {posts.map((post: IPost) => {
          const postDate = post.publishedAt || post.createdAt;
          const categoryName = post.categories && post.categories.length > 0 
            ? post.categories[0].name 
            : "Uncategorized";
          const postImage = post.coverImage || "/blog/blog1.png"; // Fallback to default image
          const postExcerpt = post.excerpt || post.content.substring(0, 150) + "...";

          return (
            <div key={post.id} className="relative group">
              {/* Blog Image - reduced size */}
              <div className="w-[350px] h-[300px] relative overflow-hidden">
                <Image
                  src={postImage}
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
                  <span>{formatDate(postDate)}</span>
                  <span className="mx-2">•</span>
                  <span>{categoryName}</span>
                </div>

                <p className="text-gray-700 text-xs leading-relaxed mb-4">
                  {postExcerpt}
                </p>

               <Link
  href={`/blogs/blogpage/${post.slug}`}
  className="inline-block border-2 border-black px-5 py-2 text-xs font-medium hover:bg-black hover:text-white transition"
>
  Read More
</Link>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}