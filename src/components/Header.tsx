import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { LogoHub360 } from "@/components/LogoHub360";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre" },
    { to: "/licitacoes", label: "Licitações" },
    { to: "/ecommerce", label: "E-commerce" },
    { to: "/automacao-vendas", label: "Automação de Vendas" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg border-b border-white/5 h-[100px] flex items-center">
      <div className="container mx-auto px-4 lg:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center">
          <LogoHub360 className="w-[250px] h-[80px]" />
        </Link>
          
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center flex-grow justify-center gap-6">
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
        <div className="hidden lg:flex flex-shrink-0">
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
        <nav className="lg:hidden px-4 pb-4 border-t-2 border-neon-purple/30 pt-4">
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
    </header>
  );
};
