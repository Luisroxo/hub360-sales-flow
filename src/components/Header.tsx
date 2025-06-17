import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre" },
    { to: "/licitacoes", label: "Licitações" },
    { to: "/ecommerce", label: "E-commerce" },
    { to: "/automacao-vendas", label: "Automação de Vendas" }
  ];

  const handleChatClick = () => {
    // Tenta encontrar e clicar no botão do chat do Odoo
    const chatButton = document.querySelector('.o_livechat_button') as HTMLElement;
    if (chatButton) {
      chatButton.click();
      console.log('Chat do Odoo aberto via botão DOM');
    } else {
      // Fallback: tenta usar a API do Odoo se disponível
      if (window.odoo && window.odoo.im_livechat && window.odoo.im_livechat.LivechatButton) {
        try {
          window.odoo.im_livechat.LivechatButton.click();
          console.log('Chat do Odoo aberto via API');
        } catch (error) {
          console.log('Erro ao abrir chat via API:', error);
        }
      } else {
        console.log('Chat do Odoo ainda não está disponível. Aguarde alguns segundos e tente novamente.');
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img 
                src="/lovable-uploads/6395007d-7a45-4bab-81d6-de70f799376d.png" 
                alt="HUB360PLUS" 
                className="h-20 w-auto"
                onError={(e) => {
                  console.log('Erro ao carregar imagem do header:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.to}
                to={item.to}
                className="text-slate-700 hover:text-purple-600 transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button 
              onClick={handleChatClick}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300"
            >
              Falar com especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-slate-700 hover:text-purple-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.to}
                  to={item.to}
                  className="text-slate-700 hover:text-purple-600 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <Button 
                onClick={handleChatClick}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 mt-4"
              >
                Falar com especialista
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
