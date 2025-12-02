
import { Search, Target, TrendingUp, BarChart3, Users, Settings, CheckCircle } from "lucide-react";
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
              <strong className="text-neon-purple">Criamos e operamos juntos canais de vendas online.</strong> Não apenas montamos sua loja — vendemos com você, dividindo estratégias, custos e resultados. Oferecemos uma abordagem integrada que combina estratégia, gestão eficiente e tecnologia de ponta para transformar desafios em crescimento sustentável.
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

      {/* Como Funciona - JV Model Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full filter blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Modelo <span className="text-neon-purple">Joint Venture</span> em E-commerce
              </h2>
              <p className="text-xl text-foreground/70">
                Uma parceria estruturada para escalar suas vendas online
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 border-neon-purple/30 bg-card/30 backdrop-blur-sm">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-neon-purple flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-lg">
                    <strong className="text-foreground">HUB360+ assume</strong> criação, operação e marketing das lojas/marketplaces
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-neon-purple flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-lg">
                    <strong className="text-foreground">Parceiro fornece</strong> produtos e suporte pós-venda
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-neon-purple flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-lg">
                    <strong className="text-foreground">Investimentos</strong> em anúncios e ferramentas são compartilhados
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-neon-purple flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-lg">
                    <strong className="text-foreground">Receitas de vendas online</strong> são divididas conforme revenue share acordado
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full filter blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-10 rounded-2xl border-2 border-neon-purple/30 bg-gradient-to-br from-neon-purple/5 to-neon-pink/5 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pronto para Escalar Vendas Online em <span className="text-neon-purple">Parceria</span>?
              </h2>
              <p className="text-xl text-foreground/70 mb-8">
                Agende uma reunião e descubra como estruturar uma JV focada em e-commerce e marketplaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="neon">
                  Agendar reunião
                </Button>
                <Button size="lg" variant="outline" className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10">
                  Saiba mais sobre JV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ecommerce;
