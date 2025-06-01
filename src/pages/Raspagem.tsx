
import { useState, useEffect } from 'react';
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { ApiKeyConfig } from '@/components/ApiKeyConfig';
import { ScrapeForm } from '@/components/ScrapeForm';

const Raspagem = () => {
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    const apiKey = FirecrawlService.getApiKey();
    setHasApiKey(!!apiKey);
  }, []);

  const handleApiKeyConfigured = () => {
    setHasApiKey(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Botão Voltar */}
            <div className="mb-8">
              <Link to="/">
                <Button variant="ghost" className="text-slate-600 hover:text-slate-800">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para página inicial
                </Button>
              </Link>
            </div>

            {/* Título */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                Raspagem de{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Dados
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Extraia dados de websites de forma automatizada. Especialmente útil para capturar informações de sites governamentais, licitações e dados públicos.
              </p>
            </div>

            {/* Conteúdo Principal */}
            <div className="max-w-2xl mx-auto">
              {!hasApiKey ? (
                <ApiKeyConfig onApiKeyConfigured={handleApiKeyConfigured} />
              ) : (
                <ScrapeForm />
              )}
            </div>

            {/* Informações Adicionais */}
            <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-3">Como funciona?</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Configure sua API key do Firecrawl</li>
                  <li>• Insira a URL do website que deseja raspar</li>
                  <li>• Os dados são extraídos automaticamente</li>
                  <li>• Baixe os resultados em formato JSON</li>
                </ul>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-3">Casos de uso</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Monitoramento de licitações</li>
                  <li>• Extração de dados governamentais</li>
                  <li>• Coleta de estatísticas públicas</li>
                  <li>• Análise de editais e contratos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Raspagem;
