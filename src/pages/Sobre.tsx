
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Zap, Heart, Lightbulb, Eye, CheckCircle, MessageSquare } from "lucide-react";

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

  const values = [
    {
      title: "Comprometimento com Resultados",
      description: "Foco em entregar valor real e mensurável para nossos clientes.",
      icon: <CheckCircle className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Inovação Contínua",
      description: "Busca constante por soluções criativas e eficazes.",
      icon: <Lightbulb className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Transparência",
      description: "Comunicação clara e honesta em todas as etapas do processo.",
      icon: <MessageSquare className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Colaboração",
      description: "Trabalho em equipe para alcançar objetivos comuns.",
      icon: <Users className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Excelência Operacional",
      description: "Padrões elevados de qualidade em tudo o que fazemos.",
      icon: <Target className="h-6 w-6 text-purple-600" />
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
              Criamos canais de vendas que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                geram resultados reais
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Na HUB360+, somos mais do que representantes comerciais. Atuamos como parceiros estratégicos, 
              especializados em desenvolver e gerenciar canais de vendas sob medida para empresas que 
              desejam crescer de forma consistente e inovadora.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Heart className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Nossa Missão
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Capacitar microempreendedores e empresas a expandirem suas vendas no mundo digital, 
                    conectando produtos ao público certo com estratégia, tecnologia e ação.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Eye className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Nossa Visão
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ser reconhecida nacionalmente como a principal parceira estratégica na criação e 
                    gestão de canais de vendas digitais, contribuindo para o sucesso sustentável de nossos clientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nossos Valores
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

      {/* Nossa presença */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa Presença
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Atuamos em todo o território nacional, entregamos projetos personalizados que 
                respeitam as particularidades de cada mercado e negócio.
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
