
import { Building, ShoppingCart, Cog } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Licitações",
      description: "Estruturamos a participação de empresas no setor público, mapeando oportunidades, preparando propostas e gerenciando contratos.",
      features: ["Mapeamento de oportunidades", "Preparação de propostas", "Gerenciamento de contratos"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Desenvolvemos e operamos canais de vendas online, desde lojas virtuais até marketplaces, com estratégias de posicionamento e performance.",
      features: ["Lojas virtuais", "Marketplaces", "Estratégias de performance"]
    },
    {
      icon: Cog,
      title: "Automação de Vendas",
      description: "Implantamos sistemas inteligentes, como CRMs, chatbots e fluxos automatizados, para transformar leads em vendas com agilidade e escala.",
      features: ["CRMs inteligentes", "Chatbots", "Fluxos automatizados"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-purple-900 mb-6">
            Criadores de Canais de Vendas
          </h2>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
            Nosso foco está em construir estruturas comerciais sólidas e eficazes. Atuamos diretamente onde as oportunidades acontecem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-purple-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-purple-600">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
