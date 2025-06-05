
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre" }
  ];

  const serviceItems = [
    { to: "/licitacoes", label: "Licitações" },
    { to: "/ecommerce", label: "E-commerce" },
    { to: "/automacao-vendas", label: "Automação de Vendas" }
  ];

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
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-slate-700 hover:text-purple-600 transition-colors font-medium relative group bg-transparent border-none outline-none">
                Serviços
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-slate-200 shadow-lg">
                {serviceItems.map((service) => (
                  <DropdownMenuItem key={service.to} asChild>
                    <Link
                      to={service.to}
                      className="w-full px-4 py-3 text-slate-700 hover:text-purple-600 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      {service.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button 
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
              
              {/* Mobile Services Section */}
              <div className="py-2">
                <div className="text-slate-700 font-medium mb-2">Serviços</div>
                <div className="pl-4 space-y-2">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.to}
                      to={service.to}
                      className="block text-slate-600 hover:text-purple-600 transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Button 
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
