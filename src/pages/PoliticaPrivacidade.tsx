import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Database, 
  Target, 
  Users, 
  Lock, 
  Cookie, 
  UserCheck, 
  Mail, 
  MessageCircle, 
  Calendar,
  FileEdit,
  Clock
} from "lucide-react";

const sections = [
  {
    icon: Shield,
    number: "1",
    title: "Introdução e Compromisso",
    content: (
      <div className="space-y-4 text-foreground/80">
        <p>
          A <strong className="text-neon-purple">HUB360PLUS LTDA</strong>, pessoa jurídica de direito privado, com sede em São Paulo, SP, 
          doravante denominada simplesmente "HUB360+", está comprometida com a proteção da privacidade e dos dados pessoais 
          de seus usuários, parceiros e visitantes.
        </p>
        <p>
          Esta Política de Privacidade foi elaborada em conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais 
          (Lei nº 13.709/2018 - LGPD)</strong> e tem como objetivo informar de forma clara e transparente como coletamos, 
          utilizamos, armazenamos e protegemos seus dados pessoais.
        </p>
        <p>
          Ao utilizar nossos serviços, acessar nosso site ou entrar em contato conosco, você concorda com as práticas 
          descritas nesta política.
        </p>
      </div>
    )
  },
  {
    icon: Database,
    number: "2",
    title: "Dados que Coletamos",
    content: (
      <div className="space-y-4 text-foreground/80">
        <p>Para viabilizar nossos serviços e parcerias de Joint Venture, coletamos os seguintes dados pessoais:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Nome completo:</strong> para identificação e comunicação personalizada;</li>
          <li><strong>E-mail:</strong> para envio de propostas, comunicados e informações sobre parcerias;</li>
          <li><strong>Telefone/WhatsApp:</strong> para contato comercial direto e agendamento de reuniões;</li>
          <li><strong>Nome da empresa:</strong> para avaliação de fit para Joint Venture;</li>
          <li><strong>Cargo/Função:</strong> quando informado, para direcionamento adequado das propostas;</li>
          <li><strong>Segmento de atuação:</strong> para personalização das soluções oferecidas.</li>
        </ul>
        <p className="mt-4 p-4 bg-neon-blue/10 rounded-lg border border-neon-blue/30">
          <strong>Importante:</strong> Não coletamos dados sensíveis como informações de saúde, orientação sexual, 
          convicções religiosas ou políticas, origem racial ou étnica.
        </p>
      </div>
    )
  },
  {
    icon: Target,
    number: "3",
    title: "Como Utilizamos os Dados",
    content: (
      <div className="space-y-4 text-foreground/80">
        <p>Seus dados pessoais são utilizados exclusivamente para as seguintes finalidades:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Contato comercial:</strong> apresentação de nossos serviços e modelo de Joint Venture;</li>
          <li><strong>Elaboração de propostas:</strong> criação de propostas personalizadas de parceria JV;</li>
          <li><strong>Agendamento de reuniões:</strong> marcação de calls e encontros para avaliação de parceria;</li>
          <li><strong>Comunicação institucional:</strong> envio de informações relevantes sobre HUB360+;</li>
          <li><strong>Gestão de relacionamento:</strong> acompanhamento do processo de parceria;</li>
          <li><strong>Cumprimento de obrigações legais:</strong> atendimento a requisitos legais e regulatórios.</li>
        </ul>
        <p className="mt-4">
          <strong>Base legal (LGPD):</strong> O tratamento de seus dados é fundamentado no seu consentimento (Art. 7º, I), 
          na execução de contrato ou procedimentos preliminares (Art. 7º, V) e no legítimo interesse (Art. 7º, IX).
        </p>
      </div>
    )
  },
  {
    icon: Users,
    number: "4",
    title: "Compartilhamento de Dados",
    content: (
      <div className="space-y-4 text-foreground/80">
        <p className="font-semibold text-neon-green">
          A HUB360+ NÃO compartilha, vende, aluga ou comercializa seus dados pessoais com terceiros.
        </p>
        <p>Exceções ao não compartilhamento ocorrem apenas nas seguintes situações:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Obrigação legal:</strong> quando houver determinação judicial ou requisição de autoridades competentes;</li>
          <li><strong>Proteção de direitos:</strong> para defesa em processos judiciais ou administrativos;</li>
          <li><strong>Com seu consentimento:</strong> quando você autorizar expressamente o compartilhamento.</li>
        </ul>
        <p className="mt-4 p-4 bg-neon-purple/10 rounded-lg border border-neon-purple/30">
          Nossos parceiros de Joint Venture têm acesso apenas aos dados estritamente necessários para a operação 
          conjunta, sempre mediante acordo de confidencialidade.
        </p>
      </div>
    )
  },
  {
    icon: Lock,
    number: "5",
    title: "Segurança e Armazenamento",
    content: (
      <div className="space-y-4 text-foreground/80">
        <p>
          Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso 
          não autorizado, perda, alteração ou destruição:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Criptografia:</strong> utilização de protocolos seguros (HTTPS/SSL) em todas as comunicações;</li>
          <li><strong>Controle de acesso:</strong> acesso restrito aos dados apenas por colaboradores autorizados;</li>
          <li><strong>Backup:</strong> realização de cópias de segurança periódicas;</li>
          <li><strong>Monitoramento:</strong> acompanhamento contínuo de possíveis vulnerabilidades;</li>
          <li><strong>Treinamento:</strong> capacitação da equipe sobre práticas de segurança da informação.</li>
        </ul>
        <p className="mt-4">
          <strong>Período de retenção:</strong> Seus dados são mantidos pelo tempo necessário para cumprir as finalidades 
          descritas nesta política, ou enquanto houver obrigação legal de retenção. Após esse período, os dados são 
          eliminados de forma segura.
        </p>
      </div>
    )
  },
  {
    icon: Cookie,
    number: "6",
    title: "Cookies e Rastreamento",
    content: (
      <div className="space-y-4 text-foreground/80">
        <p>
          Nosso site utiliza cookies e tecnologias similares para melhorar sua experiência de navegação:
        </p>
        <div className="space-y-3">
          <div className="p-3 bg-card/50 rounded-lg border border-border/50">
            <strong className="text-neon-purple">Cookies essenciais:</strong>
            <p className="text-sm mt-1">Necessários para o funcionamento básico do site (sessão, preferências).</p>
          </div>
          <div className="p-3 bg-card/50 rounded-lg border border-border/50">
            <strong className="text-neon-blue">Cookies de análise:</strong>
            <p className="text-sm mt-1">Google Analytics para entender como os usuários navegam (dados anonimizados).</p>
          </div>
          <div className="p-3 bg-card/50 rounded-lg border border-border/50">
            <strong className="text-neon-green">Cookies de marketing:</strong>
            <p className="text-sm mt-1">Para exibição de anúncios relevantes (Google Ads, Meta Pixel).</p>
          </div>
        </div>
        <p className="mt-4">
          <strong>Gerenciamento:</strong> Você pode configurar seu navegador para recusar cookies ou ser alertado 
          quando um cookie for enviado. A desativação pode afetar algumas funcionalidades do site.
        </p>
      </div>
    )
  },
  {
    icon: UserCheck,
    number: "7",
    title: "Direitos do Titular (LGPD)",
    content: (
      <div className="space-y-4 text-foreground/80">
        <p>
          Conforme a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-3 bg-neon-purple/10 rounded-lg border border-neon-purple/30">
            <strong>Confirmação e Acesso</strong>
            <p className="text-sm mt-1">Saber se tratamos seus dados e acessar quais informações possuímos.</p>
          </div>
          <div className="p-3 bg-neon-blue/10 rounded-lg border border-neon-blue/30">
            <strong>Correção</strong>
            <p className="text-sm mt-1">Solicitar a correção de dados incompletos, inexatos ou desatualizados.</p>
          </div>
          <div className="p-3 bg-neon-green/10 rounded-lg border border-neon-green/30">
            <strong>Eliminação</strong>
            <p className="text-sm mt-1">Solicitar a exclusão de dados tratados com base no consentimento.</p>
          </div>
          <div className="p-3 bg-neon-orange/10 rounded-lg border border-neon-orange/30">
            <strong>Portabilidade</strong>
            <p className="text-sm mt-1">Solicitar a transferência de seus dados a outro fornecedor.</p>
          </div>
          <div className="p-3 bg-neon-pink/10 rounded-lg border border-neon-pink/30">
            <strong>Revogação</strong>
            <p className="text-sm mt-1">Revogar o consentimento a qualquer momento.</p>
          </div>
          <div className="p-3 bg-neon-cyan/10 rounded-lg border border-neon-cyan/30">
            <strong>Oposição</strong>
            <p className="text-sm mt-1">Opor-se ao tratamento em casos de descumprimento da LGPD.</p>
          </div>
        </div>
        <p className="mt-4">
          Para exercer seus direitos, entre em contato com nosso Encarregado de Dados (DPO) através dos canais 
          indicados na seção 8.
        </p>
      </div>
    )
  },
  {
    icon: Mail,
    number: "8",
    title: "Contato do Encarregado de Dados (DPO)",
    content: (
      <div className="space-y-4 text-foreground/80">
        <p>
          Para questões relacionadas à privacidade e proteção de dados, entre em contato com nosso 
          Encarregado de Dados (DPO):
        </p>
        <div className="p-6 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10 rounded-lg border border-neon-purple/30">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-neon-purple" />
              <div>
                <p className="text-sm text-foreground/60">E-mail:</p>
                <a href="mailto:contato@hub360plus.com.br" className="text-neon-purple hover:underline font-semibold">
                  contato@hub360plus.com.br
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-neon-green" />
              <div>
                <p className="text-sm text-foreground/60">WhatsApp:</p>
                <a href="https://wa.me/5511953470544" className="text-neon-green hover:underline font-semibold">
                  +55 11 95347-0544
                </a>
              </div>
            </div>
          </div>
        </div>
        <p>
          <strong>Prazo de resposta:</strong> Responderemos às solicitações relacionadas aos seus direitos em até 
          15 (quinze) dias úteis, conforme previsto na LGPD.
        </p>
      </div>
    )
  },
  {
    icon: MessageCircle,
    number: "9",
    title: "WhatsApp e Comunicações",
    content: (
      <div className="space-y-4 text-foreground/80">
        <p>
          Utilizamos o WhatsApp Business como canal de comunicação com leads e parceiros. Ao nos contatar 
          via WhatsApp, você deve estar ciente de que:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>As mensagens são processadas pela plataforma WhatsApp, de propriedade da Meta Platforms, Inc.;</li>
          <li>Os dados das conversas estão sujeitos à <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:underline">Política de Privacidade do WhatsApp/Meta</a>;</li>
          <li>Utilizamos as informações das conversas exclusivamente para atendimento e acompanhamento comercial;</li>
          <li>Não compartilhamos o conteúdo das conversas com terceiros.</li>
        </ul>
        <p className="mt-4 p-4 bg-neon-green/10 rounded-lg border border-neon-green/30">
          <strong>Opt-out:</strong> Você pode solicitar a qualquer momento a exclusão do nosso banco de contatos 
          e interrupção das comunicações via WhatsApp.
        </p>
      </div>
    )
  },
  {
    icon: Calendar,
    number: "10",
    title: "Calendly e Agendamentos",
    content: (
      <div className="space-y-4 text-foreground/80">
        <p>
          Para facilitar o agendamento de reuniões de avaliação de parceria, utilizamos a plataforma Calendly. 
          Ao realizar um agendamento:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Seus dados (nome, e-mail, informações do agendamento) são processados pelo Calendly;</li>
          <li>O Calendly possui sua própria <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">Política de Privacidade</a>;</li>
          <li>As informações coletadas via Calendly são integradas ao nosso CRM para gestão do relacionamento;</li>
          <li>Os dados do agendamento são utilizados exclusivamente para a realização e acompanhamento da reunião.</li>
        </ul>
        <p className="mt-4">
          Recomendamos a leitura da política de privacidade do Calendly para entender como seus dados são 
          tratados por esse serviço de terceiros.
        </p>
      </div>
    )
  },
  {
    icon: FileEdit,
    number: "11",
    title: "Alterações na Política",
    content: (
      <div className="space-y-4 text-foreground/80">
        <p>
          Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas 
          práticas, tecnologias utilizadas ou requisitos legais.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Alterações significativas serão comunicadas através de nossos canais oficiais;</li>
          <li>A data de "última atualização" no topo desta página sempre indicará a versão vigente;</li>
          <li>O uso continuado de nossos serviços após alterações constitui aceitação da nova política;</li>
          <li>Recomendamos revisar esta página periodicamente.</li>
        </ul>
      </div>
    )
  },
  {
    icon: Clock,
    number: "12",
    title: "Vigência e Informações da Empresa",
    content: (
      <div className="space-y-4 text-foreground/80">
        <p>Esta Política de Privacidade entra em vigor na data indicada abaixo e permanece válida por tempo indeterminado.</p>
        
        <div className="p-6 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10 rounded-lg border border-neon-purple/30 mt-4">
          <h4 className="font-bold text-lg mb-4 text-foreground">Dados da Empresa Controladora:</h4>
          <div className="space-y-2">
            <p><strong>Razão Social:</strong> HUB360PLUS LTDA</p>
            <p><strong>Localização:</strong> São Paulo, SP - Brasil</p>
            <p><strong>E-mail:</strong> contato@hub360plus.com.br</p>
            <p><strong>WhatsApp:</strong> +55 11 95347-0544</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-neon-green/10 rounded-lg border border-neon-green/30 text-center">
          <p className="text-lg font-semibold text-neon-green">Data de Vigência: 05 de Dezembro de 2025</p>
          <p className="text-sm text-foreground/60 mt-1">Última atualização desta política</p>
        </div>
      </div>
    )
  }
];

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 via-background to-background" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-neon-purple/20 text-neon-purple border-neon-purple/30 hover:bg-neon-purple/30">
              <Shield className="w-4 h-4 mr-2" />
              LGPD Compliant
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green bg-clip-text text-transparent">
                Política de Privacidade
              </span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Transparência e segurança no tratamento dos seus dados pessoais. 
              Conheça como a HUB360+ protege suas informações em conformidade com a LGPD.
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
                  Dúvidas sobre seus dados?
                </h3>
                <p className="text-foreground/70 mb-6">
                  Nossa equipe está pronta para esclarecer qualquer questão sobre privacidade e proteção de dados.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 text-white"
                  onClick={() => window.open('https://wa.me/5511953470544?text=Olá! Gostaria de informações sobre meus dados pessoais na HUB360+.', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar com o DPO
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

export default PoliticaPrivacidade;
