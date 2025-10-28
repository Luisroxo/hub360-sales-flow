
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

  const neonIcons = [
    { icon: Users, color: 'text-neon-pink', border: 'neon-border-pink' },
    { icon: MapPin, color: 'text-neon-cyan', border: 'border-neon-cyan' },
    { icon: Target, color: 'text-neon-orange', border: 'neon-border-orange' }
  ];

  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full filter blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full filter blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-neon-purple/10 text-neon-purple px-6 py-3 rounded-full text-sm font-medium mb-6 border-2 border-neon-purple/30">
              Quem Somos
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Nosso Time de{" "}
              <span className="gradient-text-neon">
                Especialistas
              </span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              Reunimos profissionais com experiência em licitações, e-commerce, inteligência artificial, desenvolvimento de aplicativos e automação inteligente — todos focados em criar soluções inovadoras e de alto impacto.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => {
              const IconComponent = neonIcons[index].icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 bg-card/30 backdrop-blur-sm rounded-2xl border-2 ${neonIcons[index].border} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className={`w-10 h-10 ${neonIcons[index].color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{stat.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{stat.description}</p>
                </div>
              );
            })}
          </div>

          {/* Differentials */}
          <div className="bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 backdrop-blur-sm rounded-3xl p-12 md:p-16 text-center relative overflow-hidden border-2 border-neon-purple/30">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 rounded-full filter blur-[80px] -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-neon-blue/20 rounded-full filter blur-[80px] translate-y-24 -translate-x-24" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-12">
                O que fazemos de <span className="text-neon-purple">diferente</span>?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {differentials.map((diff, index) => {
                  const colors = ['text-neon-blue', 'text-neon-purple', 'text-neon-green'];
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-center mb-4">
                        <CheckCircle className={`w-8 h-8 ${colors[index]}`} />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground/80">{diff.text}</h4>
                      <p className={`text-2xl font-bold ${colors[index]}`}>{diff.highlight}</p>
                    </div>
                  );
                })}
              </div>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-foreground/80 leading-relaxed">
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
