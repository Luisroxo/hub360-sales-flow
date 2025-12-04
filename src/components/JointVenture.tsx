import { HandshakeIcon, TrendingUp, Cog, Database, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const JointVenture = () => {
  const hub360Entrega = [
    { icon: TrendingUp, text: "Gestão comercial e marketing" },
    { icon: Cog, text: "Tecnologia (CRM, ERP, automações)" },
    { icon: Target, text: "Estratégia para licitações e B2B" },
    { icon: Database, text: "Dashboards e metas" }
  ];

  const parceiroEntrega = [
    { icon: HandshakeIcon, text: "Produto ou serviço" },
    { icon: Target, text: "Marca e suporte técnico" },
    { icon: Cog, text: "Produção e entrega" },
    { icon: Database, text: "Know-how técnico" }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-neon-blue/10 text-neon-blue px-6 py-3 rounded-full text-sm font-medium mb-6 border-2 border-neon-blue/30">
              Joint Venture
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Como Funciona Nossa{" "}
              <span className="gradient-text-neon">
                Joint Venture
              </span>
            </h2>
          </div>

          {/* Two columns */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* HUB360+ Entrega */}
            <div className="bg-card/30 backdrop-blur-sm p-8 rounded-2xl border-2 neon-border-blue neon-glow-blue">
              <h3 className="text-2xl font-bold text-neon-blue mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-transparent border-2 neon-border-blue rounded-xl flex items-center justify-center">
                  <Cog className="w-6 h-6 text-neon-blue" />
                </div>
                HUB360+ Entrega
              </h3>
              <ul className="space-y-4">
                {hub360Entrega.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-foreground/80">
                    <div className="w-8 h-8 bg-neon-blue/10 border border-neon-blue/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="w-4 h-4 text-neon-blue" />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parceiro Entrega */}
            <div className="bg-card/30 backdrop-blur-sm p-8 rounded-2xl border-2 neon-border-purple neon-glow-purple">
              <h3 className="text-2xl font-bold text-neon-purple mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-transparent border-2 neon-border-purple rounded-xl flex items-center justify-center">
                  <HandshakeIcon className="w-6 h-6 text-neon-purple" />
                </div>
                Parceiro Entrega
              </h3>
              <ul className="space-y-4">
                {parceiroEntrega.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-foreground/80">
                    <div className="w-8 h-8 bg-neon-purple/10 border border-neon-purple/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="w-4 h-4 text-neon-purple" />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/joint-venture">
              <Button variant="neon" size="lg" className="text-lg px-8 py-6">
                Saiba mais sobre a JV
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};