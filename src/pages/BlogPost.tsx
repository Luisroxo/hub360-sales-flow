import { useParams, Link } from "react-router-dom";
import BlogLayout from "../components/BlogLayout";
import SEO from "../components/SEO";
import { getAllPosts } from "../lib/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getAllPosts().find((p) => p.slug === slug);

  if (!post) {
    return (
      <BlogLayout>
        <h1 className="text-2xl font-bold text-center mt-20">Post não encontrado</h1>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <SEO title={post.title} description={post.excerpt} image={post.coverImage} />
      <article className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8 mt-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-sm text-slate-500 mb-2">{post.date} • {post.author}</div>
        <img src={post.coverImage} alt="" className="w-full h-64 object-cover rounded mb-6" loading="lazy" />
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="flex flex-wrap gap-2 mt-6">
          {post.tags?.map((tag) => (
            <Link
              key={tag}
              to={`/blog/tags/${tag}`}
              className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs hover:underline"
            >
              #{tag}
            </Link>
          ))}
          {post.category && (
            <Link
              to={`/blog/categorias/${post.category}`}
              className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mb-2 hover:underline mr-2"
            >
              {post.category}
            </Link>
          )}
        </div>
      </article>
    </BlogLayout>
  );
}
