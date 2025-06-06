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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Automação de Vendas
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Transforme Leads em{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Clientes
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-600 mb-8 font-medium">
              com Inteligência e Automação
            </h2>
            
            <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Potencialize seu processo comercial com sistemas inteligentes que operam 24/7 para maximizar suas conversões
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Sua Empresa Precisa de uma Solução que{" "}
              <span className="text-purple-600">Realmente Funciona</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Imagine sua equipe de vendas livre de tarefas repetitivas, focada exclusivamente no que realmente importa: fechar negócios. Nossa solução de automação de vendas torna essa visão uma realidade, integrando CRMs inteligentes, chatbots e fluxos automatizados que capturam, nutrem e convertem leads em clientes com precisão e escala.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Em um mercado onde cada segundo conta, sua empresa não pode se dar ao luxo de perder oportunidades devido a processos manuais e ineficientes. Nossos sistemas inteligentes eliminam as barreiras entre o interesse inicial e a decisão de compra, criando uma jornada fluida que aumenta suas taxas de conversão e potencializa seu faturamento.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Nossa Solução{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Completa
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Três pilares fundamentais que transformam sua operação de vendas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-slate-600">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-12 h-12 text-purple-200 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Resultados Comprovados
              </h2>
            </div>
            
            <p className="text-xl text-purple-100 mb-12">
              Empresas que implementaram nossa solução de automação de vendas observaram:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-white font-medium leading-relaxed">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutomacaoVendas;
