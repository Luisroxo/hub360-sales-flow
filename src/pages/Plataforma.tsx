import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Inbox, Link2, Users, Server, ShieldCheck, Building2 } from "lucide-react";

const features = [
  {
    icon: Inbox,
    title: "Caixa de conversas de WhatsApp",
    text: "A equipe recebe e responde, dentro do CRM, as mensagens enviadas ao número de WhatsApp Business da própria empresa.",
  },
  {
    icon: Link2,
    title: "Conversa ligada ao cliente",
    text: "Cada conversa fica vinculada ao cadastro do lead ou do cliente, com o histórico da negociação à vista.",
  },
  {
    icon: Users,
    title: "Gestão comercial",
    text: "Funil de vendas, atividades e acompanhamento dos leads pela equipe comercial.",
  },
  {
    icon: Server,
    title: "Instalação dedicada",
    text: "Os dados de cada empresa ficam em uma instalação exclusiva, separada das instalações de outros clientes.",
  },
];

const steps = [
  {
    title: "Contratação e implantação",
    text: "A HUB360+ implanta uma instalação dedicada da plataforma para a empresa contratante e cuida da hospedagem e da operação.",
  },
  {
    title: "Conexão do WhatsApp",
    text: "A empresa conecta o próprio número de WhatsApp Business à sua instalação, pelo fluxo oficial de autorização da Meta, escolhendo o que autoriza.",
  },
  {
    title: "Atendimento no CRM",
    text: "As mensagens dos clientes chegam à plataforma, a equipe responde e a conversa fica registrada junto ao cadastro do cliente.",
  },
  {
    title: "Acompanhamento",
    text: "A HUB360+ mantém a instalação atualizada e dá suporte à equipe da empresa contratante.",
  },
];

const privacyPoints = [
  "A empresa contratante é a controladora dos dados pessoais de seus clientes e contatos. A HUB360+ atua como operadora, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), tratando esses dados somente para prestar o serviço contratado e conforme as instruções da contratante.",
  "O acesso à conta de WhatsApp Business ocorre apenas mediante autorização da própria empresa, pelo fluxo oficial da Meta, e se limita ao necessário para receber e enviar as mensagens do serviço.",
  "Os dados de uma empresa não são compartilhados com outras empresas clientes, não são vendidos e não são usados para publicidade.",
];

const Plataforma = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>HUB360PLUS - Plataforma CRM com WhatsApp</title>
        <meta
          name="description"
          content="CRM com caixa de conversas de WhatsApp integrada ao cadastro de clientes, em uma instalação exclusiva para cada empresa."
        />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full filter blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-neon-purple/20 text-neon-purple border-neon-purple/30 hover:bg-neon-purple/30">
              Plataforma HUB360+
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
                CRM com atendimento por WhatsApp
              </span>
            </h1>
            <p className="text-xl text-foreground/70">
              Clientes, negociações e conversas de WhatsApp no mesmo lugar, em uma instalação exclusiva para a sua empresa.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* O que é */}
            <Card className="border border-neon-purple/20 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">O que é a plataforma</h2>
                <p className="text-foreground/70 mb-4">
                  A plataforma HUB360+ é um sistema de gestão de relacionamento com clientes (CRM) que reúne, em um só
                  lugar, o cadastro de clientes e leads, o acompanhamento comercial e as conversas de WhatsApp da empresa.
                </p>
                <p className="text-foreground/70">
                  Cada empresa contratante recebe uma instalação própria, hospedada e operada pela HUB360+, sem
                  compartilhar banco de dados com outros clientes.
                </p>
              </CardContent>
            </Card>

            {/* O que oferece */}
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="border border-neon-purple/20 bg-background/50 backdrop-blur-sm hover:border-neon-purple/40 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center border border-neon-purple/30">
                      <feature.icon className="h-6 w-6 text-neon-purple" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Como funciona */}
            <Card className="border border-neon-purple/20 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Como funciona</h2>
                <ol className="space-y-5">
                  {steps.map((step, index) => (
                    <li key={step.title} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center font-bold text-neon-purple">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-foreground">{step.title}</h3>
                        <p className="text-foreground/70">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Dados e privacidade */}
            <Card className="border border-neon-purple/20 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center border border-neon-purple/30">
                    <ShieldCheck className="h-6 w-6 text-neon-purple" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Dados pessoais e privacidade</h2>
                    <ul className="space-y-3 text-foreground/70">
                      {privacyPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="text-neon-green">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-foreground/70 mt-4">
                      Mais detalhes na{" "}
                      <Link to="/politica-privacidade" className="text-neon-purple hover:underline">
                        Política de Privacidade
                      </Link>{" "}
                      e nos{" "}
                      <Link to="/termos-uso" className="text-neon-purple hover:underline">
                        Termos de Uso
                      </Link>
                      . Solicitações de titulares de dados e dúvidas sobre privacidade:{" "}
                      <a href="mailto:contato@hub360plus.com.br" className="text-neon-purple hover:underline">
                        contato@hub360plus.com.br
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Disponibilidade */}
            <Card className="border border-neon-purple/20 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Disponibilidade</h2>
                <p className="text-foreground/70">
                  A plataforma está em implantação gradual. A contratação e a conexão do WhatsApp são feitas com o
                  acompanhamento da nossa equipe.
                </p>
              </CardContent>
            </Card>

            {/* Empresa */}
            <Card className="border border-neon-purple/20 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center border border-neon-purple/30">
                    <Building2 className="h-6 w-6 text-neon-purple" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Quem presta o serviço</h2>
                    <ul className="space-y-2 text-foreground/70">
                      <li><strong className="text-foreground">Razão social:</strong> HUB360PLUS INTELIGENCIA COMERCIAL LTDA</li>
                      <li><strong className="text-foreground">CNPJ:</strong> 68.366.420/0001-20</li>
                      <li>
                        <strong className="text-foreground">Endereço:</strong> Avenida Paulista, 2073, Sala 2220, Bela Vista,
                        São Paulo/SP, CEP 01311-940
                      </li>
                      <li><strong className="text-foreground">Telefone:</strong> (11) 91974-7859</li>
                      <li>
                        <strong className="text-foreground">E-mail:</strong>{" "}
                        <a href="mailto:contato@hub360plus.com.br" className="text-neon-purple hover:underline">
                          contato@hub360plus.com.br
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="border-2 border-neon-green/30 bg-gradient-to-br from-neon-green/5 to-neon-cyan/5 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Quer conhecer a plataforma?</h3>
                <p className="text-foreground/70 mb-6">
                  Fale com a nossa equipe para entender como a plataforma se encaixa na operação da sua empresa.
                </p>
                <Button asChild variant="neon" size="lg">
                  <a
                    href="https://wa.me/5511953470544?text=Olá!%20Gostaria%20de%20conhecer%20a%20plataforma%20HUB360%2B"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="mr-2" size={18} />
                    Falar com a equipe
                  </a>
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

export default Plataforma;
