import BlogLayout from "../components/BlogLayout";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../lib/posts";
import SEO from "../components/SEO";

export default function BlogHome() {
  const posts = getAllPosts();
  return (
    <BlogLayout>
      <SEO title="Blog Hub360" description="Conteúdo relevante sobre vendas, automação e negócios." />
      <h1 className="text-4xl font-bold mb-8">Últimos Artigos</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map(post => <PostCard key={post.slug} post={post} />)}
      </div>
    </BlogLayout>
  );
}
