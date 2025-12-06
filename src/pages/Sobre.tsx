
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Zap, Heart, Lightbulb, Eye, CheckCircle, MessageSquare, Handshake, Check, Calendar } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";

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
      title: "Parceria Real",
      description: "Compartilhamos riscos e resultados em todas as operações.",
      icon: <Handshake className="h-6 w-6 text-neon-purple" />
    },
    {
      title: "Comprometimento com Resultados",
      description: "Foco em entregar valor real e mensurável para nossos parceiros.",
      icon: <CheckCircle className="h-6 w-6 text-neon-purple" />
    },
    {
      title: "Inovação Contínua",
      description: "Busca constante por soluções criativas e eficazes.",
      icon: <Lightbulb className="h-6 w-6 text-neon-purple" />
    },
    {
      title: "Transparência",
      description: "Comunicação clara e honesta em todas as etapas do processo.",
      icon: <MessageSquare className="h-6 w-6 text-neon-purple" />
    },
    {
      title: "Colaboração",
      description: "Trabalho em equipe para alcançar objetivos comuns.",
      icon: <Users className="h-6 w-6 text-neon-purple" />
    },
    {
      title: "Excelência Operacional",
      description: "Padrões elevados de qualidade em tudo o que fazemos.",
      icon: <Target className="h-6 w-6 text-neon-purple" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-background relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        >
          <source src="/videos/background-stars.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/60 z-0" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-[120px] z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-neon-purple/10 text-neon-purple hover:bg-neon-purple/20 border-2 border-neon-purple/30">
              Parceiros em Joint Venture
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Construímos parcerias comerciais que{" "}
              <span className="gradient-text-neon">
                geram resultados compartilhados
              </span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Não vendemos para você — vendemos COM você. Atuamos como parceiros estratégicos através de Joint Ventures Operacionais, 
              dividindo responsabilidades, riscos e resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-2 neon-border-purple bg-card/30 backdrop-blur-sm hover:neon-glow-purple transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Heart className="h-8 w-8 text-neon-pink" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Nossa Missão
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Criar parcerias comerciais de sucesso, unindo expertise em vendas e tecnologia com produtos de nossos parceiros.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 neon-border-blue bg-card/30 backdrop-blur-sm hover:neon-glow-blue transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Eye className="h-8 w-8 text-neon-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Nossa Visão
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Ser a principal parceira de Joint Venture para expansão comercial no Brasil.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos Valores
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-card/30 backdrop-blur-sm border-2 border-neon-purple/30 rounded-2xl p-6 hover:neon-glow-purple transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-foreground/60 text-sm leading-relaxed">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                O que fazemos
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Desenvolvemos e gerenciamos canais de vendas sob medida, atuando em três frentes principais:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const colors = ['neon-border-purple neon-glow-purple', 'neon-border-blue neon-glow-blue', 'neon-border-green neon-glow-green'];
                return (
                  <Card key={index} className={`border-2 ${colors[index]} bg-card/30 backdrop-blur-sm transition-all duration-300 group`}>
                    <CardContent className="p-8">
                      <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {service.description}
                      </p>
                  </CardContent>
                </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Como Funciona a Parceria JV */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full filter blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-neon-purple/30 bg-gradient-to-br from-neon-purple/5 to-neon-blue/5 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Como Funciona a Parceria JV?
                  </h2>
                  <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                    Nosso modelo de Joint Venture é estruturado para criar crescimento sustentável e compartilhado. Definimos juntos:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Divisão de responsabilidades operacionais",
                    "Estrutura de investimentos e custos",
                    "Modelo de revenue share (parte fixa + variável)",
                    "Metas, KPIs e governança da parceria",
                    "Diferenciais: representante comercial/consultoria vs operação compartilhada"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center">
                        <Check className="h-4 w-4 text-neon-green" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-lg text-foreground/70 mb-6">
                    Quer entender como isso funciona na prática para o seu negócio?
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 text-white"
                      onClick={() => (window as any).Calendly?.initPopupWidget({url: 'https://calendly.com/hub360plus-lww/reuniao-45-mim'})}
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Agendar reunião com nosso time
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10"
                      asChild
                    >
                      <a 
                        href="https://wa.me/5511953470544?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20HUB360%2B" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <WhatsAppIcon className="mr-2" size={20} />
                        Falar com especialista
                      </a>
                    </Button>
                  </div>
                  
                  <p className="text-sm text-foreground/50">
                    Em 30 minutos, mostramos como estruturar uma JV comercial para sua empresa.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa presença */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-neon-orange/10 rounded-full filter blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nossa Presença
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                Atuamos em todo o território nacional, entregamos projetos personalizados que 
                respeitam as particularidades de cada mercado e negócio.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 backdrop-blur-sm border-2 border-neon-purple/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-neon-purple">HUB360+</h3>
              <p className="text-xl text-foreground/80">
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
