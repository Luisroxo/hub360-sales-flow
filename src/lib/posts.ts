// Mock de posts para o blog Hub360
export function getAllPosts() {
  return [
    {
      slug: "primeiro-post",
      title: "Bem-vindo ao Blog Hub360",
      excerpt: "Descubra as novidades, dicas e tendências do universo de vendas, automação e negócios digitais.",
      content: `<p>Este é o primeiro post do nosso blog! Em breve, traremos conteúdos relevantes para impulsionar seu negócio.</p>`,
      coverImage: "/lovable-uploads/6395007d-7a45-4bab-81d6-de70f799376d.png",
      date: "05/06/2025",
      author: "Equipe Hub360",
      tags: ["novidades", "vendas", "automação"],
      category: "novidades"
    },
    {
      slug: "tendencias-automacao-2025",
      title: "Tendências em Automação para 2025",
      excerpt: "Veja o que esperar do mercado de automação comercial no próximo ano.",
      content: `<p>O mercado de automação está em constante evolução. Confira as principais tendências para 2025 e como preparar sua empresa.</p>`,
      coverImage: "/lovable-uploads/6395007d-7a45-4bab-81d6-de70f799376d.png",
      date: "01/06/2025",
      author: "Equipe Hub360",
      tags: ["tendencias", "automação"],
      category: "automacao"
    },
    {
      slug: "como-vender-mais",
      title: "Como vender mais usando tecnologia",
      excerpt: "Dicas práticas para aumentar suas vendas com ferramentas digitais.",
      content: `<p>Descubra como a tecnologia pode impulsionar suas vendas e trazer melhores resultados para seu negócio.</p>`,
      coverImage: "/lovable-uploads/6395007d-7a45-4bab-81d6-de70f799376d.png",
      date: "28/05/2025",
      author: "Equipe Hub360",
      tags: ["vendas", "tecnologia"],
      category: "vendas"
    }
  ];
}
