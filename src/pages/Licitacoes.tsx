
import { Building, CheckCircle, TrendingUp, Users, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Licitacoes = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Acesso estratégico a editais",
      description: "Conectamos sua empresa aos maiores contratos públicos do país"
    },
    {
      icon: Users,
      title: "Foco em oportunidades exclusivas para ME/EPP",
      description: "R$ 7 bilhões destinados a Micro e Pequenas Empresas no 1º Trim/25"
    },
    {
      icon: FileText,
      title: "Elaboração de propostas técnicas e comerciais competitivas",
      description: "Propostas vencedoras preparadas por especialistas"
    },
    {
      icon: Shield,
      title: "Navegação simplificada pela Nova Lei de Licitações",
      description: "Compliance total com a Lei nº 14.133/2021"
    },
    {
      icon: CheckCircle,
      title: "Gestão eficiente de contratos e acompanhamento pós-venda",
      description: "Suporte completo durante toda a execução do contrato"
    }
  ];

  const stats = [
    { value: "R$ 217", label: "bilhões em compras homologadas no 1º Semestre/25" },
    { value: "R$ 54", label: "bilhões destinados a ME/EPP" },
    { value: "119", label: "mil processos" },
    { value: "100%", label: "compliance com a Nova Lei de Licitações" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-background relative overflow-hidden">
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
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[120px] animate-pulse z-0" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full filter blur-[120px] animate-pulse z-0" style={{ animationDelay: '1s' }} />
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-neon-blue/10 text-neon-blue px-6 py-3 rounded-full text-sm font-medium mb-8 border-2 border-neon-blue/30 backdrop-blur-sm">
              <Building className="w-4 h-4" />
              Especialistas em Licitações
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
              Licitações: Seu Caminho para{" "}
              <span className="text-neon-cyan">
                Vender ao Maior Comprador
              </span>
              {" "}do Brasil
            </h1>
            
            <p className="text-xl text-foreground/70 mb-12 leading-relaxed max-w-4xl">
              Desbloqueie um mercado de bilhões! O governo brasileiro é o maior comprador do país, movimentando cifras impressionantes – como os R$ 217 bilhões em compras homologadas no primeiro semestre de 2025, com mais de 119 mil processos. Destes, R$ 54 bilhões foram destinados a Micro e Pequenas Empresas (ME/EPP), demonstrando um vasto campo de oportunidades para negócios de todos os portes.
            </p>

            <p className="text-lg text-foreground/70 mb-12 leading-relaxed max-w-4xl">
              <strong className="text-neon-cyan">Estruturamos parcerias para atuação no setor público, dividindo responsabilidades e resultados.</strong> Não apenas preparamos licitações — operamos juntos para vencer. Deixe a burocracia conosco e concentre-se em entregar seus produtos e serviços para um cliente com grande escala e potencial de crescimento.
            </p>
            
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-8">
            Compras Homologadas - 1º Semestre/25
          </h3>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const colors = ['text-neon-blue', 'text-neon-cyan', 'text-neon-purple', 'text-neon-green'];
              return (
                <div key={index} className="text-center">
                  <div className={`text-4xl md:text-5xl font-bold ${colors[index]} mb-2`}>
                    {stat.value}
                  </div>
                  <p className="text-foreground/70 text-lg">
                    {stat.label}
                  </p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Principais Vantagens
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Nossa expertise em licitações garante que sua empresa tenha acesso às melhores oportunidades do mercado público
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 border-2 neon-border-blue hover:neon-glow-blue bg-card/30 backdrop-blur-sm transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 border-2 neon-border-cyan rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona - JV Model Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full filter blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Modelo <span className="text-neon-cyan">Joint Venture</span> em Licitações
              </h2>
              <p className="text-xl text-foreground/70">
                Uma parceria estruturada para maximizar suas chances de vitória
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 border-neon-cyan/30 bg-card/30 backdrop-blur-sm">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-lg">
                    <strong className="text-foreground">HUB360+ assume</strong> mapeamento, preparação e gestão de propostas
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-lg">
                    <strong className="text-foreground">Parceiro fornece</strong> produto/serviço e know-how técnico
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-lg">
                    <strong className="text-foreground">Resultados</strong> (vitórias em licitações) são compartilhados proporcionalmente
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-lg">
                    <strong className="text-foreground">Transparência total</strong> através de dashboards de acompanhamento
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-10 rounded-2xl border-2 border-neon-blue/30 bg-gradient-to-br from-neon-blue/5 to-neon-cyan/5 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pronto para Vencer Licitações em <span className="text-neon-blue">Parceria</span>?
              </h2>
              <p className="text-xl text-foreground/70 mb-8">
                Agende uma reunião e entenda como estruturar uma JV focada em vendas públicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="neon"
                  onClick={() => (window as any).Calendly?.initPopupWidget({url: 'https://calendly.com/hub360plus-lww/reuniao-45-mim'})}
                >
                  Agendar reunião
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10"
                  onClick={() => window.location.href = '/joint-venture'}
                >
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

export default Licitacoes;
