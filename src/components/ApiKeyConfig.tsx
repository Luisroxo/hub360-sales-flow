
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { useToast } from "@/hooks/use-toast";
import { Key, CheckCircle } from 'lucide-react';

interface ApiKeyConfigProps {
  onApiKeyConfigured: () => void;
}

export const ApiKeyConfig = ({ onApiKeyConfigured }: ApiKeyConfigProps) => {
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSaveApiKey = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim()) return;

    setIsLoading(true);
    try {
      const isValid = await FirecrawlService.testApiKey(apiKey);
      
      if (isValid) {
        FirecrawlService.saveApiKey(apiKey);
        toast({
          title: "Sucesso!",
          description: "API key configurada com sucesso",
          duration: 3000,
        });
        onApiKeyConfigured();
      } else {
        toast({
          title: "Erro",
          description: "API key inválida. Verifique se está correta.",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao verificar API key",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Key className="w-6 h-6 text-white" />
        </div>
        <CardTitle>Configurar API Firecrawl</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSaveApiKey} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="apiKey" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              API Key do Firecrawl
            </label>
            <Input
              id="apiKey"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="fc-xxxxxxxxxxxxxxxx"
              required
            />
            <p className="text-xs text-gray-500">
              Obtenha sua API key em{' '}
              <a 
                href="https://firecrawl.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                firecrawl.dev
              </a>
            </p>
          </div>
          <Button
            type="submit"
            disabled={isLoading || !apiKey.trim()}
            className="w-full"
          >
            {isLoading ? "Verificando..." : "Salvar API Key"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
