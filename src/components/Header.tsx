
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-purple-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/6395007d-7a45-4bab-81d6-de70f799376d.png" 
              alt="HUB360PLUS" 
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-purple-800 hover:text-purple-600 transition-colors font-medium">
              Início
            </a>
            <a href="#servicos" className="text-purple-800 hover:text-purple-600 transition-colors font-medium">
              Serviços
            </a>
            <a href="#sobre" className="text-purple-800 hover:text-purple-600 transition-colors font-medium">
              Sobre
            </a>
            <a href="#contato" className="text-purple-800 hover:text-purple-600 transition-colors font-medium">
              Contato
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-purple-800"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-purple-100 pt-4">
            <div className="flex flex-col space-y-2">
              <a href="#inicio" className="text-purple-800 hover:text-purple-600 transition-colors font-medium py-2">
                Início
              </a>
              <a href="#servicos" className="text-purple-800 hover:text-purple-600 transition-colors font-medium py-2">
                Serviços
              </a>
              <a href="#sobre" className="text-purple-800 hover:text-purple-600 transition-colors font-medium py-2">
                Sobre
              </a>
              <a href="#contato" className="text-purple-800 hover:text-purple-600 transition-colors font-medium py-2">
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
