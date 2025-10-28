import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Bot, Database, Zap, TrendingUp, Clock, Target, ArrowRight, CheckCircle } from "lucide-react";

const AutomacaoVendas = () => {
  const features = [
    {
      icon: Database,
      title: "CRMs Inteligentes",
      description: "Nossos CRMs vão além de simples bancos de dados — são parceiros estratégicos que aprendem com cada interação. Eles identificam padrões, priorizam leads com maior potencial de conversão e fornecem insights valiosos para que sua equipe tome decisões baseadas em dados concretos.",
      benefits: [
        "Dashboards personalizados",
        "Alertas em tempo real", 
        "Priorização automática de leads",
        "Insights baseados em dados"
      ]
    },
    {
      icon: Bot,
      title: "Chatbots Inteligentes",
      description: "Imagine ter um vendedor incansável, disponível 24 horas por dia, 7 dias por semana, qualificando leads e respondendo dúvidas instantaneamente. Nossos chatbots inteligentes fazem exatamente isso, criando conversas personalizadas que engajam visitantes no momento crítico de decisão.",
      benefits: [
        "Disponível 24/7",
        "Qualificação automática de leads",
        "Respostas personalizadas",
        "Otimização por página e comportamento"
      ]
    },
    {
      icon: Zap,
      title: "Fluxos Automatizados",
      description: "Por trás de cada venda bem-sucedida existe um processo meticulosamente orquestrado. Nossos fluxos automatizados conectam todos os pontos de contato, garantindo que nenhum lead seja esquecido e que cada interação aconteça no momento perfeito.",
      benefits: [
        "E-mails personalizados",
        "Notificações automáticas",
        "Ciclos de venda mais curtos",
        "Experiência consistente"
      ]
    }
  ];

  const results = [
    "Aumento de até 300% nas conversões em 90 dias",
    "Redução significativa no tempo de resposta aos leads",
    "Melhoria na eficiência operacional da equipe de vendas"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-neon-orange/10 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-neon-green/10 text-neon-green px-6 py-3 rounded-full text-sm font-medium mb-8 border-2 border-neon-green/30 backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              Automação de Vendas
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              Transforme Leads em{" "}
              <span className="text-neon-green">
                Clientes
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-foreground/80 mb-8 font-medium">
              com Inteligência e Automação
            </h2>
            
            <p className="text-lg text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Potencialize seu processo comercial com sistemas inteligentes que operam 24/7 para maximizar suas conversões
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Sua Empresa Precisa de uma Solução que{" "}
              <span className="text-neon-green">Realmente Funciona</span>
            </h2>
            
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Imagine sua equipe de vendas livre de tarefas repetitivas, focada exclusivamente no que realmente importa: fechar negócios. Nossa solução de automação de vendas torna essa visão uma realidade, integrando CRMs inteligentes, chatbots e fluxos automatizados que capturam, nutrem e convertem leads em clientes com precisão e escala.
            </p>
            
            <p className="text-lg text-foreground/70 leading-relaxed">
              Em um mercado onde cada segundo conta, sua empresa não pode se dar ao luxo de perder oportunidades devido a processos manuais e ineficientes. Nossos sistemas inteligentes eliminam as barreiras entre o interesse inicial e a decisão de compra, criando uma jornada fluida que aumenta suas taxas de conversão e potencializa seu faturamento.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossa Solução{" "}
              <span className="gradient-text-neon">
                Completa
              </span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Três pilares fundamentais que transformam sua operação de vendas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const colors = ['neon-border-green neon-glow-green', 'neon-border-orange neon-glow-orange', 'neon-border-purple neon-glow-purple'];
              const iconColors = ['text-neon-green', 'text-neon-orange', 'text-neon-purple'];
              return (
                <div
                  key={index}
                  className={`bg-card/30 backdrop-blur-sm p-8 rounded-2xl transition-all duration-300 border-2 ${colors[index]}`}
                >
                  <div className={`w-16 h-16 border-2 ${colors[index].split(' ')[0]} rounded-2xl flex items-center justify-center mb-6`}>
                    <feature.icon className={`w-8 h-8 ${iconColors[index]}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-foreground/70">
                        <CheckCircle className={`w-5 h-5 ${iconColors[index]} mr-3 flex-shrink-0`} />
                        {benefit}
                      </li>
                  ))}
                  </ul>
                </div>
              );
            })}
            </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 backdrop-blur-sm border-y-2 border-neon-purple/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-12 h-12 text-neon-green mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Resultados Comprovados
              </h2>
            </div>
            
            <p className="text-xl text-foreground/80 mb-12">
              Empresas que implementaram nossa solução de automação de vendas observaram:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {results.map((result, index) => {
                const colors = ['neon-border-green', 'neon-border-orange', 'neon-border-purple'];
                return (
                  <div key={index} className={`bg-card/30 backdrop-blur-sm rounded-xl p-6 border-2 ${colors[index]}`}>
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-12 h-12 border-2 ${colors[index]} rounded-full flex items-center justify-center`}>
                        <span className="text-2xl font-bold text-foreground">{index + 1}</span>
                      </div>
                    </div>
                    <p className="text-foreground/80 font-medium leading-relaxed">
                      {result}
                    </p>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutomacaoVendas;
