
import { Building, ShoppingCart, Cog, ArrowRight, Globe } from "lucide-react";
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
      link: null
    },
    {
      icon: Cog,
      title: "Automação de Vendas",
      description: "Implantamos sistemas inteligentes, como CRMs, chatbots e fluxos automatizados, para transformar leads em vendas com agilidade e escala.",
      features: ["CRMs inteligentes", "Chatbots", "Fluxos automatizados"],
      gradient: "from-emerald-500 to-emerald-600",
      link: null
    },
    {
      icon: Globe,
      title: "Raspagem de Dados",
      description: "Extraímos dados de websites de forma automatizada, especialmente útil para monitoramento de licitações e coleta de informações públicas.",
      features: ["Extração automatizada", "Monitoramento de sites", "Dados estruturados"],
      gradient: "from-orange-500 to-orange-600",
      link: "/raspagem"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Criadores de Canais de{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Vendas
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Nosso foco está em construir estruturas comerciais sólidas e eficazes. Atuamos diretamente onde as oportunidades acontecem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-600">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {service.link ? (
                <Link to={service.link}>
                  <Button 
                    variant="ghost" 
                    className="group-hover:bg-purple-50 group-hover:text-purple-600 transition-all p-0 h-auto font-semibold"
                  >
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              ) : (
                <Button 
                  variant="ghost" 
                  className="group-hover:bg-purple-50 group-hover:text-purple-600 transition-all p-0 h-auto font-semibold"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
