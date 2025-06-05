import BlogLayout from "../components/BlogLayout";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../lib/posts";
import { useParams, Link } from "react-router-dom";

export default function BlogCategories() {
  const { category } = useParams();
  const posts = getAllPosts().filter((post) => post.category === category);

  return (
    <BlogLayout>
      <h1 className="text-3xl font-bold mb-8">Posts na categoria: <span className="text-purple-700">{category}</span></h1>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p>Nenhum post encontrado para esta categoria.</p>
        )}
      </div>
      <div className="mt-8">
        <Link to="/blog" className="text-purple-700 hover:underline">Voltar para o blog</Link>
      </div>
    </BlogLayout>
  );
}
