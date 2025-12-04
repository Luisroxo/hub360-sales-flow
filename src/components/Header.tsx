import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoHub360 from "@/assets/logo-hub360.png";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b-2 border-neon-purple/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img 
                src={logoHub360} 
                alt="HUB360+ - Juntos Vendemos Mais" 
                className="h-auto w-[200px]"
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
                className="text-foreground hover:text-neon-purple transition-all font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-purple transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button 
              asChild
              variant="neon"
            >
              <a href="https://wa.me/5511953470544?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20HUB360%2B" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-2" size={18} />
                Falar com especialista
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground hover:text-neon-purple transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t-2 border-neon-purple/30 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.to}
                  to={item.to}
                  className="text-foreground hover:text-neon-purple transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <Button 
                asChild
                variant="neon"
                className="mt-4"
              >
                <a href="https://wa.me/5511953470544?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20HUB360%2B" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2" size={18} />
                  Falar com especialista
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
