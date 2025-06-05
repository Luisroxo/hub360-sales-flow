
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Target, Users, Zap } from "lucide-react";

const Sobre = () => {
  const services = [
    {
      title: "Licitações Públicas",
      description: "Estruturamos a participação de empresas no setor público, mapeando oportunidades, preparando propostas e gerenciando contratos.",
      icon: <Target className="h-8 w-8 text-purple-600" />
    },
    {
      title: "E-commerce",
      description: "Criamos e operamos lojas virtuais e marketplaces, com estratégias de posicionamento e performance para alcançar seu público.",
      icon: <Zap className="h-8 w-8 text-purple-600" />
    },
    {
      title: "Automação de Vendas",
      description: "Implantamos sistemas inteligentes, como CRMs, chatbots e fluxos automatizados, para transformar leads em vendas com agilidade e escala.",
      icon: <Users className="h-8 w-8 text-purple-600" />
    }
  ];

  const differentials = [
    {
      title: "Parceria Estratégica",
      description: "Mais do que vender, assumimos a responsabilidade pelos resultados."
    },
    {
      title: "Tecnologia de Ponta",
      description: "Utilizamos as melhores ferramentas e práticas do mercado para otimizar suas vendas."
    },
    {
      title: "Foco no Cliente",
      description: "Desenvolvemos soluções personalizadas, alinhadas às necessidades e objetivos de cada cliente."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
              Sobre Nós
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mais que representantes comerciais: somos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                criadores de canais de vendas
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Na HUB360+, nossa missão é clara: transformar oportunidades em resultados reais. 
              Atuamos como parceiros estratégicos de vendas, assumindo a responsabilidade de 
              comercializar seus produtos e serviços por meio de canais eficientes, sustentáveis 
              e orientados a resultados.
            </p>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                O que fazemos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Desenvolvemos e gerenciamos canais de vendas sob medida, atuando em três frentes principais:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-8">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nosso diferencial */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nosso diferencial
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {differentials.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossa presença */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa presença
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Com sede em São Paulo e atuação em todo o território nacional, entregamos 
                projetos personalizados que respeitam as particularidades de cada mercado e negócio.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">HUB360+</h3>
              <p className="text-xl text-purple-100">
                Seu parceiro comercial no mundo digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
