import { Helmet } from "react-helmet";

export default function SEO({ title, description, image }: { title: string, description: string, image?: string }) {
  return (
    <Helmet>
      <title>{title} | Hub360 Blog</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {/* Schema.org */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Hub360 Blog",
        description,
      })}</script>
    </Helmet>
  );
}
