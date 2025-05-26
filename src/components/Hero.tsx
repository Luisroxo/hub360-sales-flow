
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-6 leading-tight">
            Transformamos oportunidades em{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              resultados reais
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Somos mais do que representantes comerciais. Somos parceiros estratégicos de vendas que assumem a responsabilidade de vender seus produtos e serviços.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Conhecer nossos serviços
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
              Falar com especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
