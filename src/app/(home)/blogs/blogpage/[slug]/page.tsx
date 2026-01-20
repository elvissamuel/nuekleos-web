interface PageProps {
  params: {
    slug: string
  }
}

export default function BlogDetails({ params }: PageProps) {
  return (
    <section className="px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">
        Blog: {params.slug}
      </h1>

      <p className="text-gray-600">
        This is where the full article content will render.
      </p>
    </section>
  )
}
