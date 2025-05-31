export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="/lovable-uploads/6395007d-7a45-4bab-81d6-de70f799376d.png" 
                alt="HUB360PLUS" 
                className="h-24 w-auto mb-4 brightness-0 invert"
                onError={(e) => {
                  console.log('Erro ao carregar imagem do footer:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <p className="text-purple-200 leading-relaxed">
                Seu parceiro comercial no mundo digital. Transformamos oportunidades em resultados reais.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-purple-200">
                <li>Licitações</li>
                <li>E-commerce</li>
                <li>Automação de Vendas</li>
                <li>Consultoria Comercial</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-purple-200">
                <p>São Paulo, SP</p>
                <p>contato@hub360plus.com.br</p>
                <p>(11) 9999-9999</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-700 pt-8 text-center">
            <p className="text-purple-200">
              © 2024 HUB360PLUS. Todos os direitos reservados. | NOSSO NEGÓCIO É FAZER O SEU VENDER MAIS!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
