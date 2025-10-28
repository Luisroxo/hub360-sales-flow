
import { Building, ShoppingCart, Cog, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Licitações",
      description: "Estruturamos a participação de empresas no setor público, mapeando oportunidades, preparando propostas e gerenciando contratos.",
      features: ["Mapeamento de oportunidades", "Preparação de propostas", "Gerenciamento de contratos"],
      gradient: "from-blue-500 to-blue-600",
      link: "/licitacoes"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Desenvolvemos e operamos canais de vendas online, desde lojas virtuais até marketplaces, com estratégias de posicionamento e performance.",
      features: ["Lojas virtuais", "Marketplaces", "Estratégias de performance"],
      gradient: "from-purple-500 to-purple-600",
      link: "/ecommerce"
    },
    {
      icon: Cog,
      title: "Automação de Vendas",
      description: "Implantamos sistemas inteligentes, como CRMs, chatbots e fluxos automatizados, para transformar leads em vendas com agilidade e escala.",
      features: ["CRMs inteligentes", "Chatbots", "Fluxos automatizados"],
      gradient: "from-emerald-500 to-emerald-600",
      link: "/automacao-vendas"
    }
  ];

  const neonColors = [
    { border: 'neon-border-blue', text: 'text-neon-blue', glow: 'neon-glow-blue' },
    { border: 'neon-border-purple', text: 'text-neon-purple', glow: 'neon-glow-purple' },
    { border: 'neon-border-green', text: 'text-neon-green', glow: 'neon-glow-green' }
  ];

  return (
    <section id="servicos" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-neon-purple/10 text-neon-purple px-6 py-3 rounded-full text-sm font-medium mb-6 border-2 border-neon-purple/30">
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Criadores de Canais de{" "}
            <span className="gradient-text-neon">
              Vendas
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Nosso foco está em construir estruturas comerciais sólidas e eficazes. Atuamos diretamente onde as oportunidades acontecem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const neonColor = neonColors[index % neonColors.length];
            return (
              <div
                key={index}
                className={`group relative bg-card/30 backdrop-blur-sm p-8 rounded-2xl border-2 ${neonColor.border} hover:${neonColor.glow} transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-transparent border-2 ${neonColor.border} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${neonColor.glow}`}>
                  <service.icon className={`w-8 h-8 ${neonColor.text}`} />
                </div>
                
                <h3 className={`text-2xl font-bold text-foreground mb-4 group-hover:${neonColor.text} transition-colors`}>
                  {service.title}
                </h3>
                
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground/60">
                      <div className={`w-1.5 h-1.5 ${neonColor.border} rounded-full mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to={service.link}>
                  <Button 
                    variant="neonOutline" 
                    className="w-full"
                  >
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
