
import { Search, Target, TrendingUp, BarChart3, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Ecommerce = () => {
  const services = [
    {
      icon: Search,
      title: "Diagnóstico Estratégico",
      items: [
        "Análise Profunda da Operação: Entendemos a fundo seu negócio, identificando oportunidades e pontos de melhoria.",
        "Benchmarking de Mercado: Comparamos sua performance com os principais players do mercado para posicionar sua marca de forma competitiva."
      ]
    },
    {
      icon: Target,
      title: "Execução Orientada por Dados",
      items: [
        "Seleção de Produtos-Chave: Identificamos os produtos com maior potencial de vendas.",
        "Escolha dos Canais Ideais: Priorizamos os canais mais aderentes ao seu público-alvo.",
        "Otimização de Cadastros: Melhoramos títulos, descrições e imagens para aumentar a conversão.",
        "Campanhas de Mídia Paga: Gerenciamos anúncios em plataformas como Google Ads e Meta Ads, focando em ROI positivo."
      ]
    },
    {
      icon: TrendingUp,
      title: "Escala Sustentável",
      items: [
        "Gestão de Mix de Produtos: Ajustamos seu portfólio para maximizar a lucratividade.",
        "Automação de Processos: Implementamos soluções que reduzem custos e aumentam a eficiência operacional.",
        "Análises Financeiras: Monitoramos margens, custos e receitas para garantir saúde financeira."
      ]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence e CRM",
      items: [
        "Dashboards Personalizados: Acompanhamos KPIs em tempo real para tomadas de decisão ágeis.",
        "Segmentação de Clientes: Utilizamos dados comportamentais para campanhas de CRM mais eficazes."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-neon-purple/10 text-neon-purple px-6 py-3 rounded-full text-sm font-medium mb-8 border-2 border-neon-purple/30 backdrop-blur-sm">
              <Users className="w-4 h-4" />
              Especialistas em E-commerce
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
              HUB360+: Estratégia, Performance e{" "}
              <span className="gradient-text-neon">
                Lucratividade
              </span>
              {" "}para o seu E-commerce
            </h1>
            
            <p className="text-xl text-foreground/70 mb-12 leading-relaxed max-w-4xl">
              Na <strong>HUB360+</strong>, acreditamos que um e-commerce de sucesso vai além de campanhas publicitárias. Oferecemos uma abordagem integrada que combina estratégia, gestão eficiente e tecnologia de ponta para transformar desafios em crescimento sustentável.
            </p>
            
            <Button 
              size="lg" 
              variant="neon"
            >
              Começar agora
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-8 border-2 neon-border-purple hover:neon-glow-purple bg-card/30 backdrop-blur-sm transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 border-2 neon-border-pink rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-neon-pink" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-foreground/70 leading-relaxed">
                        <strong className="text-foreground">{item.split(':')[0]}:</strong>
                        {item.split(':').slice(1).join(':')}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-neon-purple/10 text-neon-purple px-6 py-3 rounded-full text-sm font-medium mb-8 border-2 border-neon-purple/30">
              <Settings className="w-4 h-4" />
              Parceria Estratégica
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A HUB360+ é o parceiro ideal para levar seu e-commerce ao próximo nível.
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ecommerce;
