
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
    { value: "R$ 31,4", label: "bilhões em compras homologadas no 1º trimestre de 2025" },
    { value: "R$ 7", label: "bilhões destinados a ME/EPP" },
    { value: "100%", label: "compliance com a Nova Lei de Licitações" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200">
              <Building className="w-4 h-4" />
              Especialistas em Licitações
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Licitações: Seu Caminho para{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Vender ao Maior Comprador
              </span>
              {" "}do Brasil
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-4xl">
              Desbloqueie um mercado de bilhões! O governo brasileiro é o maior comprador do país, movimentando cifras impressionantes – como os R$ 31,4 bilhões em compras homologadas apenas no primeiro trimestre de 2025. Destes, R$ 7 bilhões foram destinados a Micro e Pequenas Empresas (ME/EPP), demonstrando um vasto campo de oportunidades para negócios de todos os portes.
            </p>

            <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-4xl">
              Na HUB360+, somos especialistas em conectar sua empresa a esse universo promissor. Estruturamos sua participação de ponta a ponta: desde o mapeamento estratégico de editais e a preparação de propostas vencedoras até a gestão completa dos contratos. Deixe a burocracia conosco e concentre-se em entregar seus produtos e serviços para um cliente com grande escala e potencial de crescimento.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Começar agora
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-slate-600 text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Principais Vantagens
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nossa expertise em licitações garante que sua empresa tenha acesso às melhores oportunidades do mercado público
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
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

      <Footer />
    </div>
  );
};

export default Licitacoes;
