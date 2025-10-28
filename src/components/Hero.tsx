
import { AnimatedStat } from "./AnimatedStat";

export const Hero = () => {
  return (
    <section id="inicio" className="relative pt-20 pb-32 bg-gradient-to-br from-background via-background to-background overflow-hidden">
      {/* Background Elements - Neon glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-purple/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full filter blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-green/10 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-neon-purple/10 text-neon-purple px-6 py-3 rounded-full text-sm font-medium mb-8 border-2 border-neon-purple/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
              Parceiros comerciais especializados
            </div>
            
            <h1 className="text-5xl md:text-8xl font-extrabold text-foreground mb-8 tracking-tight leading-tight">
              Transformamos{" "}
              <span className="gradient-text-neon">
                oportunidades
              </span>
              {" "}em resultados reais
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed font-light">
              Somos mais do que representantes comerciais. Somos parceiros estratégicos que assumem a responsabilidade de vender seus produtos e serviços.
            </p>
          </div>
          
          {/* Stats with Animation */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <AnimatedStat 
              value={500} 
              suffix="+" 
              label="Projetos realizados"
              delay={0}
              color="purple"
            />
            <AnimatedStat 
              value={98} 
              suffix="%" 
              label="Taxa de sucesso"
              delay={300}
              color="blue"
            />
            <AnimatedStat 
              value={24} 
              suffix="h" 
              label="Tempo de resposta"
              delay={600}
              color="green"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
