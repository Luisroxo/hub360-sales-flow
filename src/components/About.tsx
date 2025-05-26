
import { Users, MapPin, Target, CheckCircle } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Users, title: "Especialistas", description: "Profissionais experientes em diversas áreas comerciais e tecnológicas" },
    { icon: MapPin, title: "Atuação Nacional", description: "Sediados em São Paulo com projetos em todo o território nacional" },
    { icon: Target, title: "Foco em Resultados", description: "Soluções personalizadas que respeitam as particularidades de cada negócio" }
  ];

  const differentials = [
    { text: "Não apenas divulgamos", highlight: "Vendemos" },
    { text: "Não apenas planejamos", highlight: "Executamos" },
    { text: "Não apenas prometemos", highlight: "Geramos resultado" }
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Quem Somos
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Nosso Time de{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Especialistas
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Reunimos profissionais com experiência em licitações, e-commerce, inteligência artificial, desenvolvimento de aplicativos e automação inteligente — todos focados em criar soluções inovadoras e de alto impacto.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300 border border-slate-100">
                  <stat.icon className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{stat.title}</h3>
                <p className="text-slate-600 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Differentials */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold mb-12">
                O que fazemos de diferente?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {differentials.map((diff, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-purple-200" />
                    </div>
                    <h4 className="text-lg font-semibold opacity-90">{diff.text}</h4>
                    <p className="text-2xl font-bold">{diff.highlight}</p>
                  </div>
                ))}
              </div>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-xl opacity-90 leading-relaxed">
                  Transformamos produtos, serviços e ideias em negócios sustentáveis, com inteligência, estratégia e execução de ponta a ponta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
