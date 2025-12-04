import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { 
  Handshake, 
  XCircle, 
  CheckCircle, 
  Target, 
  Users, 
  Rocket, 
  TrendingUp,
  Calendar,
  Lightbulb,
  Settings,
  BarChart3,
  Trophy,
  ChevronDown
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const JointVenture = () => {
  const naoE = [
    { icon: XCircle, text: "Uma consultoria cara", desc: "Não vendemos horas, construímos resultados juntos." },
    { icon: XCircle, text: "Uma sociedade na sua empresa", desc: "Você não perde o controle do seu negócio. Criamos um projeto específico com começo, meio e fim." },
    { icon: XCircle, text: "Uma solução mágica", desc: "Não é sobre terceirizar o trabalho, é sobre potencializar o seu esforço com nossa expertise e canais." }
  ];

  const paraQuem = [
    "Têm um bom produto ou serviço, mas sentem que poderiam vender muito mais.",
    "Querem acessar novos mercados, como vender para o governo, mas não sabem por onde começar.",
    "Desejam escalar as vendas online, mas não têm equipe ou conhecimento para isso.",
    "Entendem que o sucesso é fruto de colaboração e estão prontas para trabalhar em equipe."
  ];

  const passos = [
    { icon: Calendar, title: "Avaliação", desc: "A reunião que você agenda. Entendemos seu negócio e validamos o potencial da parceria.", time: "45 min" },
    { icon: Lightbulb, title: "Desenho da Estratégia", desc: "Juntos, definimos o plano de ação. Qual canal atacar primeiro? Quais as metas? Quem faz o quê?" },
    { icon: Settings, title: "Implementação", desc: "Nosso time entra em campo! Seja preparando sua empresa para uma licitação, construindo seu e-commerce ou automatizando seus processos." },
    { icon: BarChart3, title: "Operação e Otimização", desc: "Colocamos o projeto para rodar e acompanhamos os KPIs de perto, ajustando a rota para maximizar os resultados." },
    { icon: Trophy, title: "Crescimento Compartilhado", desc: "Celebramos os resultados e dividimos os lucros gerados pela parceria, como definido em nosso modelo de revenue share." }
  ];

  const faqs = [
    {
      question: "Eu preciso fazer algum investimento financeiro para começar?",
      answer: "Depende do escopo do projeto que definirmos juntos. Nosso modelo principal é baseado no compartilhamento de resultados (revenue share), onde nosso maior ganho vem do sucesso que geramos para você. Em alguns casos, pode ser necessário um investimento inicial em ferramentas ou estrutura (como uma plataforma de e-commerce, por exemplo), mas tudo é discutido e aprovado por você com total transparência na fase de desenho da estratégia. Nosso objetivo é encontrar um modelo que seja viável e lucrativo para ambos."
    },
    {
      question: "E se a parceria não der os resultados esperados?",
      answer: "Ótima pergunta. Como nosso sucesso está diretamente ligado ao seu, somos os maiores interessados em fazer a parceria dar certo. Por isso, nosso acordo inclui metas claras e KPIs (indicadores) definidos em conjunto. Se os resultados não estiverem sendo alcançados, nosso processo prevê revisões estratégicas para ajustar o plano. Além disso, o contrato de parceria tem cláusulas claras de saída para ambos os lados, garantindo segurança e flexibilidade."
    },
    {
      question: "Quanto tempo leva para ver os primeiros resultados?",
      answer: "O tempo varia conforme o canal escolhido. Em projetos de Automação, os ganhos de eficiência podem ser sentidos nas primeiras semanas. Em E-commerce, os primeiros resultados de vendas podem aparecer no primeiro ou segundo mês. Já em Licitações, o ciclo é mais longo e pode levar alguns meses até ganharmos o primeiro contrato, mas o retorno costuma ser de altíssimo valor. Na nossa reunião de avaliação, conseguiremos te dar uma estimativa mais precisa para o seu caso."
    },
    {
      question: "Minha empresa é pequena. Uma Joint Venture serve para mim?",
      answer: "Com certeza. Nosso modelo foi desenhado especialmente para pequenas e médias empresas com grande potencial. Não olhamos apenas para o seu faturamento atual, mas sim para a qualidade do seu produto/serviço e sua vontade de crescer. Se você tem um negócio sólido e está comprometido com o crescimento, você tem o perfil que buscamos."
    },
    {
      question: "Quem vai executar o trabalho no dia a dia? Eu terei que contratar mais gente?",
      answer: "A Hub360+ atua como seu braço operacional para o projeto da JV. Nossa equipe de especialistas cuidará da implementação e gestão do canal de vendas escolhido (seja a prospecção de licitações, a gestão do e-commerce, etc.). Sua responsabilidade principal será garantir a qualidade e a entrega do seu produto ou serviço. O objetivo é que você não precise contratar mais gente para iniciar a parceria; pelo contrário, você ganha uma equipe inteira ao seu lado."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Joint Venture | Hub360+"
        description="Descubra como uma Joint Venture com a Hub360+ pode multiplicar seus resultados, compartilhando riscos e somando expertises."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/background-stars.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-neon-purple/10 text-neon-purple px-6 py-3 rounded-full text-sm font-medium mb-6 border-2 border-neon-purple/30">
            <Handshake className="w-5 h-5" />
            Joint Venture Hub360+
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Sozinho você vai rápido.{" "}
            <span className="gradient-text-neon">
              Juntos, nós vamos mais longe.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8">
            Descubra como uma Joint Venture (JV) com a Hub360+ pode multiplicar seus resultados, compartilhando riscos e somando expertises.
          </p>
          <Button 
            variant="neon" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => (window as any).Calendly?.initPopupWidget({url: 'https://calendly.com/hub360plus-lww/reuniao-45-mim'})}
          >
            Agendar Reunião de Avaliação
          </Button>
        </div>
      </section>

      {/* O Que NÃO é */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-orange/10 rounded-full filter blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-center">
              O Que <span className="text-neon-orange">NÃO</span> é uma Joint Venture
            </h2>
            <p className="text-lg text-foreground/70 text-center mb-12">
              Antes de tudo, vamos esclarecer: uma Joint Venture conosco não é...
            </p>
            
            <div className="space-y-6">
              {naoE.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-card/30 backdrop-blur-sm p-6 rounded-2xl border-2 border-neon-orange/30 flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-neon-orange/10 border border-neon-orange/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-neon-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">...{item.text}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O Que É */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-center">
              O Que <span className="text-neon-blue">É</span> uma Joint Venture Hub360+
            </h2>
            <p className="text-lg text-foreground/70 text-center mb-12">
              Uma Joint Venture (JV) é uma parceria estratégica onde unimos o seu conhecimento de produto/serviço com a nossa expertise em canais de venda e tecnologia para alcançar um objetivo comum: <strong className="text-neon-blue">vender mais</strong>.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card/30 backdrop-blur-sm p-6 rounded-2xl border-2 neon-border-blue text-center">
                <div className="w-16 h-16 bg-neon-blue/10 border-2 border-neon-blue/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-neon-blue" />
                </div>
                <h3 className="text-lg font-bold text-neon-blue mb-2">Você entra com</h3>
                <p className="text-foreground/70">Seu produto ou serviço de qualidade e a vontade de crescer.</p>
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm p-6 rounded-2xl border-2 neon-border-purple text-center">
                <div className="w-16 h-16 bg-neon-purple/10 border-2 border-neon-purple/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-neon-purple" />
                </div>
                <h3 className="text-lg font-bold text-neon-purple mb-2">Nós entramos com</h3>
                <p className="text-foreground/70">Nossa equipe, nossa tecnologia e nosso acesso a canais de venda poderosos.</p>
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm p-6 rounded-2xl border-2 neon-border-green text-center">
                <div className="w-16 h-16 bg-neon-green/10 border-2 border-neon-green/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-neon-green" />
                </div>
                <h3 className="text-lg font-bold text-neon-green mb-2">Juntos, definimos</h3>
                <p className="text-foreground/70">As metas, as responsabilidades e como dividiremos os resultados do sucesso.</p>
              </div>
            </div>
            
            <p className="text-xl text-center text-foreground/80 mt-8 font-medium">
              É um modelo de <span className="gradient-text-neon">ganha-ganha</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Para Quem */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-neon-green/10 rounded-full filter blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Para Quem é a <span className="gradient-text-neon">Joint Venture</span>?
            </h2>
            <p className="text-lg text-foreground/70 text-center mb-12">
              Nossas parcerias são ideais para empresas que:
            </p>
            
            <div className="space-y-4">
              {paraQuem.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-card/30 backdrop-blur-sm p-6 rounded-2xl border border-foreground/10 flex items-start gap-4 hover:border-neon-green/50 transition-colors"
                >
                  <div className="w-8 h-8 bg-neon-green/10 border border-neon-green/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-neon-green" />
                  </div>
                  <p className="text-lg text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Nossa <span className="gradient-text-neon">Jornada de Parceria</span>
            </h2>
            <p className="text-lg text-foreground/70 text-center mb-12">
              Veja como funciona na prática, passo a passo:
            </p>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green hidden md:block" />
              
              <div className="space-y-8">
                {passos.map((passo, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`bg-card/30 backdrop-blur-sm p-6 rounded-2xl border-2 border-foreground/10 hover:border-neon-purple/50 transition-colors ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                          <div className="w-10 h-10 bg-neon-purple/10 border border-neon-purple/30 rounded-xl flex items-center justify-center">
                            <passo.icon className="w-5 h-5 text-neon-purple" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">
                            {index + 1}. {passo.title}
                            {passo.time && <span className="text-sm text-neon-purple ml-2">({passo.time})</span>}
                          </h3>
                        </div>
                        <p className="text-foreground/70">{passo.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 bg-neon-purple rounded-full border-4 border-background flex-shrink-0 mt-8" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-green/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Pronto para construir o futuro da sua empresa, <span className="gradient-text-neon">juntos</span>?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              A teoria é boa, mas a prática é ainda melhor. Agende sua Reunião de Avaliação de Parceria e vamos desenhar, em 45 minutos, como podemos aplicar este modelo ao seu negócio.
            </p>
            <Button 
              variant="neon" 
              size="lg" 
              className="text-lg px-10 py-7"
              onClick={() => (window as any).Calendly?.initPopupWidget({url: 'https://calendly.com/hub360plus-lww/reuniao-45-mim'})}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Reunião com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Perguntas <span className="gradient-text-neon">Frequentes</span>
            </h2>
            <p className="text-lg text-foreground/70 text-center mb-12">
              Ainda tem dúvidas? É normal! Transparência é um pilar da nossa parceria. Reunimos aqui as perguntas mais comuns que recebemos.
            </p>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/30 backdrop-blur-sm rounded-2xl border-2 border-foreground/10 px-6 data-[state=open]:border-neon-purple/50"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-neon-purple hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JointVenture;
