
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedStat } from "./AnimatedStat";

export const Hero = () => {
  return (
    <section id="inicio" className="relative pt-20 pb-32 bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000" />
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-purple-200">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              Parceiros comerciais especializados
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Transformamos{" "}
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
                oportunidades
              </span>
              {" "}em resultados reais
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-light">
              Somos mais do que representantes comerciais. Somos parceiros estratégicos que assumem a responsabilidade de vender seus produtos e serviços.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Conhecer nossos serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver demonstração
              </Button>
            </div>
          </div>
          
          {/* Stats with Animation */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <AnimatedStat 
              value={500} 
              suffix="+" 
              label="Projetos realizados"
              delay={0}
            />
            <AnimatedStat 
              value={98} 
              suffix="%" 
              label="Taxa de sucesso"
              delay={300}
            />
            <AnimatedStat 
              value={24} 
              suffix="h" 
              label="Tempo de resposta"
              delay={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
