import { useState } from "react";
import BlogLayout from "../components/BlogLayout";
import { getAllPosts } from "../lib/posts";

export default function BlogAdmin() {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const posts = getAllPosts();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === "hub360admin") {
      setIsAuth(true);
      setMessage("");
    } else {
      setMessage("Senha incorreta!");
    }
  }

  if (!isAuth) {
    return (
      <BlogLayout>
        <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-20 bg-white p-8 rounded-xl shadow">
          <h1 className="text-2xl font-bold mb-4">Área Administrativa</h1>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border p-2 w-full mb-4 rounded"
          />
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded w-full">Entrar</button>
          {message && <div className="text-red-600 mt-2">{message}</div>}
        </form>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <h1 className="text-2xl font-bold mb-6">Administração do Blog</h1>
      <p className="mb-4">(Funcionalidade de criação/edição de posts pode ser implementada aqui)</p>
      <h2 className="text-xl font-semibold mb-2">Posts existentes:</h2>
      <ul className="list-disc ml-6">
        {posts.map(post => (
          <li key={post.slug}>{post.title}</li>
        ))}
      </ul>
    </BlogLayout>
  );
}
