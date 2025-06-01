
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Download, Eye } from 'lucide-react';

interface ScrapeResult {
  title: string;
  stats: Array<{ value: string; description: string }>;
  fullData?: any;
}

export const ScrapeForm = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrapeResult, setScrapeResult] = useState<ScrapeResult | null>(null);
  const [showFullData, setShowFullData] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(0);
    setScrapeResult(null);
    
    try {
      console.log('Starting scrape for URL:', url);
      setProgress(25);
      
      const result = await FirecrawlService.scrapeWebsite(url);
      setProgress(75);
      
      if (result.success && result.data) {
        // Tentar extrair dados específicos do governo
        const extractedData = FirecrawlService.extractGovernmentData(result.data.html);
        
        setScrapeResult({
          title: extractedData.title || result.data.metadata?.title || 'Dados extraídos',
          stats: extractedData.stats,
          fullData: result.data
        });
        
        toast({
          title: "Sucesso!",
          description: `Website raspado com sucesso! ${extractedData.stats.length} estatísticas encontradas.`,
          duration: 3000,
        });
        setProgress(100);
      } else {
        toast({
          title: "Erro",
          description: result.error || "Falha ao raspar website",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error('Error scraping website:', error);
      toast({
        title: "Erro",
        description: "Falha ao raspar website",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setProgress(0), 2000);
    }
  };

  const downloadData = () => {
    if (!scrapeResult) return;
    
    const dataStr = JSON.stringify(scrapeResult, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dados-raspados.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Formulário de Raspagem */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <CardTitle>Raspagem de Dados</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="url" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                URL do Website
              </label>
              <Input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.gov.br/compras/pt-br"
                required
              />
            </div>
            {isLoading && (
              <Progress value={progress} className="w-full" />
            )}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? "Raspando dados..." : "Iniciar Raspagem"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Resultados */}
      {scrapeResult && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Resultados da Raspagem</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFullData(!showFullData)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {showFullData ? 'Ocultar' : 'Ver'} Dados Completos
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadData}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download JSON
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">{scrapeResult.title}</h3>
              
              {scrapeResult.stats.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {scrapeResult.stats.map((stat, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg border">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-600">Nenhuma estatística específica encontrada.</p>
              )}
            </div>

            {showFullData && scrapeResult.fullData && (
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Dados Completos:</h4>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto max-h-96">
                  <pre className="text-xs">
                    {JSON.stringify(scrapeResult.fullData, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
