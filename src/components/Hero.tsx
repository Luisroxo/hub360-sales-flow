
import { AnimatedStat } from "./AnimatedStat";

export const Hero = () => {
  return (
    <section id="inicio" className="relative pt-20 pb-32 bg-gradient-to-br from-background via-background to-background overflow-hidden">
      {/* Background GIF - Neon effect */}
      <img 
        src="/hub360-glow.gif"
        alt="HUB360+ Neon Effect"
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen pointer-events-none z-0"
      />
      
      {/* Background Elements - Neon glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-purple/10 via-transparent to-transparent z-[1]" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full filter blur-[100px] animate-pulse z-[1]" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full filter blur-[100px] animate-pulse z-[1]" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-green/10 rounded-full filter blur-[100px] animate-pulse z-[1]" style={{ animationDelay: '2s' }} />
      
      <div className="relative container mx-auto px-4 py-20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-neon-purple/10 text-neon-purple px-6 py-3 rounded-full text-sm font-medium mb-8 border-2 border-neon-purple/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
              🤝 Joint Venture Operacional
            </div>
            
            <h1 className="text-5xl md:text-8xl font-extrabold text-foreground mb-8 tracking-tight leading-tight">
              Não vendemos para você —{" "}
              <span className="gradient-text-neon">
                vendemos COM você
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed font-light">
              Criamos juntos um novo braço comercial. Parceria real, responsabilidades compartilhadas, resultados divididos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#jv">
                <button className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 neon-glow-purple">
                  Quero ser parceiro JV
                </button>
              </a>
              <a href="#como-funciona">
                <button className="px-8 py-4 bg-transparent border-2 border-neon-purple text-neon-purple font-semibold rounded-full hover:bg-neon-purple/10 transition-all duration-300">
                  Como funciona
                </button>
              </a>
            </div>
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
