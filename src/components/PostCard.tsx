import { Link } from "react-router-dom";

export default function PostCard({ post }: { post: any }) {
  return (
    <div className="rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white overflow-hidden">
      <Link to={`/blog/${post.slug}`}>
        <img src={post.coverImage} alt="" className="w-full h-48 object-cover" loading="lazy" />
      </Link>
      <div className="p-6">        <Link to={`/blog/${post.slug}`}
          className="text-2xl font-bold text-purple-700 hover:underline block mb-2">
          {post.title}
        </Link>
        {post.category && (
          <a
            href={`/blog/categorias/${post.category}`}
            className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mb-2 hover:underline mr-2"
          >
            {post.category}
          </a>
        )}
        <div className="text-sm text-slate-500 mb-2">{post.date} • {post.author}</div>
        <p className="text-slate-700 mb-4">{post.excerpt}</p>        <div className="flex flex-wrap gap-2">
          {post.tags?.map((tag: string) => (
            <a
              key={tag}
              href={`/blog/tags/${tag}`}
              className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs hover:underline"
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
