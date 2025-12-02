import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, Users, Briefcase, DollarSign, Shield, Lock, Clock, Scale } from "lucide-react";

const TermosUso = () => {
  const sections = [
    {
      icon: FileText,
      number: "1",
      title: "INTRODUÇÃO",
      content: (
        <>
          <p className="text-foreground/70 mb-4">
            Bem-vindo à HUB360+. Estes Termos de Uso regulam a relação de parceria através de Joint Venture Operacional 
            entre a HUB360PLUS LTDA e seus parceiros comerciais. Ao firmar parceria conosco, você concorda com estes termos.
          </p>
          <p className="text-sm text-foreground/50">
            Última atualização: 02/12/2025
          </p>
        </>
      )
    },
    {
      icon: Users,
      number: "2",
      title: "DEFINIÇÕES",
      content: (
        <ul className="space-y-3 text-foreground/70">
          <li><strong className="text-neon-purple">Joint Venture Operacional:</strong> Parceria comercial baseada em cooperação mútua, divisão de responsabilidades e compartilhamento de resultados</li>
          <li><strong className="text-neon-purple">Parceiro:</strong> Empresa ou pessoa jurídica que firma acordo de JV com a HUB360+</li>
          <li><strong className="text-neon-purple">Operação Compartilhada:</strong> Gestão conjunta de canais comerciais, dividindo custos, riscos e lucros</li>
          <li><strong className="text-neon-purple">Revenue Share:</strong> Modelo de remuneração baseado em divisão proporcional dos resultados</li>
        </ul>
      )
    },
    {
      icon: Briefcase,
      number: "3",
      title: "MODELO DE PARCERIA",
      content: (
        <ul className="space-y-3 text-foreground/70">
          <li><strong className="text-foreground">3.1.</strong> A HUB360+ atua como parceira estratégica, não como prestadora de serviços convencional</li>
          <li><strong className="text-foreground">3.2.</strong> Responsabilidades são divididas conforme contrato específico de cada JV</li>
          <li><strong className="text-foreground">3.3.</strong> Resultados (lucros e prejuízos) são compartilhados proporcionalmente</li>
          <li><strong className="text-foreground">3.4.</strong> Cada parceria possui governança e KPIs específicos</li>
        </ul>
      )
    },
    {
      icon: Briefcase,
      number: "4",
      title: "RESPONSABILIDADES DA HUB360+",
      content: (
        <ul className="space-y-2 text-foreground/70">
          <li className="flex items-start gap-2">
            <span className="text-neon-green">•</span>
            Gestão comercial e marketing
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-green">•</span>
            Tecnologia e infraestrutura digital (CRM, ERP, automações)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-green">•</span>
            Estratégia para canais de vendas (licitações, e-commerce, B2B)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-green">•</span>
            Relatórios de performance e dashboards
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-green">•</span>
            Operação e execução das vendas
          </li>
        </ul>
      )
    },
    {
      icon: Users,
      number: "5",
      title: "RESPONSABILIDADES DO PARCEIRO",
      content: (
        <ul className="space-y-2 text-foreground/70">
          <li className="flex items-start gap-2">
            <span className="text-neon-blue">•</span>
            Fornecimento de produtos/serviços
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-blue">•</span>
            Marca e identidade
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-blue">•</span>
            Suporte técnico e pós-venda
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-blue">•</span>
            Produção e entrega
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-blue">•</span>
            Compartilhamento de know-how técnico
          </li>
        </ul>
      )
    },
    {
      icon: DollarSign,
      number: "6",
      title: "MODELO FINANCEIRO",
      content: (
        <ul className="space-y-3 text-foreground/70">
          <li><strong className="text-foreground">6.1.</strong> Revenue Share: parte fixa mensal + percentual variável sobre resultados</li>
          <li><strong className="text-foreground">6.2.</strong> Custos operacionais são rateados conforme acordo</li>
          <li><strong className="text-foreground">6.3.</strong> Transparência total através de relatórios mensais</li>
          <li><strong className="text-foreground">6.4.</strong> Revenda de licenças de software (Kommo, Bling) é receita exclusiva da HUB360+</li>
        </ul>
      )
    },
    {
      icon: Shield,
      number: "7",
      title: "PROPRIEDADE INTELECTUAL",
      content: (
        <ul className="space-y-3 text-foreground/70">
          <li><strong className="text-foreground">7.1.</strong> Cada parte mantém direitos sobre suas marcas e propriedades</li>
          <li><strong className="text-foreground">7.2.</strong> Materiais criados em conjunto são de propriedade compartilhada</li>
          <li><strong className="text-foreground">7.3.</strong> Uso de marcas de terceiros mediante autorização</li>
        </ul>
      )
    },
    {
      icon: Lock,
      number: "8",
      title: "CONFIDENCIALIDADE",
      content: (
        <p className="text-foreground/70">
          Todas as informações comerciais, estratégicas e operacionais são confidenciais e protegidas por acordo de sigilo.
        </p>
      )
    },
    {
      icon: Clock,
      number: "9",
      title: "VIGÊNCIA E RESCISÃO",
      content: (
        <ul className="space-y-3 text-foreground/70">
          <li><strong className="text-foreground">9.1.</strong> Contratos de JV possuem prazo determinado, renovável</li>
          <li><strong className="text-foreground">9.2.</strong> Rescisão antecipada mediante aviso prévio conforme contrato</li>
          <li><strong className="text-foreground">9.3.</strong> Direitos e obrigações cessam após período de transição</li>
        </ul>
      )
    },
    {
      icon: Scale,
      number: "10",
      title: "DISPOSIÇÕES GERAIS",
      content: (
        <ul className="space-y-3 text-foreground/70">
          <li><strong className="text-foreground">10.1.</strong> Foro: São Paulo/SP</li>
          <li><strong className="text-foreground">10.2.</strong> Modificações nestes termos serão comunicadas com antecedência</li>
          <li><strong className="text-foreground">10.3.</strong> Dúvidas: contato através dos canais oficiais</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full filter blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-neon-purple/20 text-neon-purple border-neon-purple/30 hover:bg-neon-purple/30">
              Termos e Condições
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
                Termos de Uso e Parceria
              </span>
            </h1>
            <p className="text-xl text-foreground/70">
              Conheça as regras e condições que regem nossa relação de Joint Venture Operacional
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section, index) => (
              <Card 
                key={index} 
                className="border border-neon-purple/20 bg-background/50 backdrop-blur-sm hover:border-neon-purple/40 transition-all duration-300"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center border border-neon-purple/30">
                      <section.icon className="h-6 w-6 text-neon-purple" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                        {section.number}. {section.title}
                      </h2>
                      {section.content}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* CTA Section */}
            <Card className="border-2 border-neon-green/30 bg-gradient-to-br from-neon-green/5 to-neon-cyan/5 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ficou com alguma dúvida?
                </h3>
                <p className="text-foreground/70 mb-6">
                  Nossa equipe está pronta para esclarecer qualquer questão sobre os termos de parceria.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 text-white"
                  onClick={() => window.open('https://hub360.odoo.com/contactus', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar com especialista
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermosUso;
