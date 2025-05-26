
import { Users, MapPin, Target } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-purple-900 mb-6">
              Nosso Time de Especialistas
            </h2>
            <p className="text-xl text-purple-700 max-w-4xl mx-auto leading-relaxed">
              Reunimos profissionais com experiência em licitações, e-commerce, inteligência artificial, desenvolvimento de aplicativos e automação inteligente — todos focados em criar soluções inovadoras e de alto impacto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Especialistas</h3>
              <p className="text-purple-700">Profissionais experientes em diversas áreas comerciais e tecnológicas</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Atuação Nacional</h3>
              <p className="text-purple-700">Sediados em São Paulo com projetos em todo o território nacional</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Foco em Resultados</h3>
              <p className="text-purple-700">Soluções personalizadas que respeitam as particularidades de cada negócio</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              O que fazemos de diferente?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-lg">
              <div>
                <h4 className="font-semibold mb-2">Não apenas divulgamos</h4>
                <p className="opacity-90">Vendemos</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Não apenas planejamos</h4>
                <p className="opacity-90">Executamos</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Não apenas prometemos</h4>
                <p className="opacity-90">Geramos resultado</p>
              </div>
            </div>
            <p className="text-xl mt-8 opacity-90">
              Transformamos produtos, serviços e ideias em negócios sustentáveis, com inteligência, estratégia e execução de ponta a ponta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
