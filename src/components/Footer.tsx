
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/hub360plus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/hub360plus/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@HUB360PLUS" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-purple-100">
            Copyright © 2025 HUB360PLUS LTDA — Todos os Direitos Reservados
          </div>

          {/* Terms and Privacy Links */}
          <div className="flex items-center space-x-4 text-sm">
            <Link to="/termos-uso" className="text-white hover:text-purple-200 transition-colors">
              Termos de Uso
            </Link>
            <span className="text-purple-300">|</span>
            <Link to="/politica-privacidade" className="text-white hover:text-purple-200 transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
