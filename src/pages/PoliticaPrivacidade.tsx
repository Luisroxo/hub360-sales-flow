
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
                Política de Privacidade
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Política de Privacidade
              </h1>
              <p className="text-xl text-gray-600">
                Como protegemos e utilizamos suas informações pessoais
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Política de Privacidade — HUB360+</h2>
                  <p className="text-gray-600">Última atualização: 16/06/2025</p>
                </div>

                <p className="mb-6">
                  A sua privacidade é muito importante para nós. É política da HUB360+ respeitar e proteger a sua privacidade em relação a qualquer informação que possamos coletar em nosso site, plataformas, sistemas e outros serviços que operamos.
                </p>

                <p className="mb-6">
                  Coletamos informações pessoais apenas quando realmente necessárias para fornecer nossos serviços, sempre de forma transparente, justa e com seu consentimento. Informamos claramente por que estamos coletando esses dados e como serão utilizados.
                </p>

                <p className="mb-6">
                  As informações são mantidas apenas pelo tempo necessário para fornecer o serviço solicitado. Adotamos medidas de segurança técnicas e administrativas adequadas para proteger seus dados contra acesso não autorizado, divulgação, alteração ou destruição.
                </p>

                <p className="mb-6">
                  Não compartilhamos informações pessoais publicamente ou com terceiros, exceto quando exigido por lei ou mediante sua autorização.
                </p>

                <p className="mb-6">
                  Nosso site pode conter links para sites externos que não são operados por nós. Por isso, não somos responsáveis pelas práticas de privacidade desses sites.
                </p>

                <p className="mb-6">
                  Você pode recusar o fornecimento de informações pessoais, entendendo que, nesse caso, talvez não possamos fornecer alguns dos nossos serviços.
                </p>

                <p className="mb-8">
                  O uso contínuo de nossos serviços e plataformas será considerado como aceitação de nossas práticas em relação à privacidade e às informações pessoais. Em caso de dúvidas, entre em contato conosco.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Política de Cookies — HUB360+</h2>
                <p className="mb-6">
                  Assim como a maioria dos sites profissionais, utilizamos cookies para aprimorar sua experiência. Cookies são pequenos arquivos que são armazenados no seu dispositivo para auxiliar na navegação e no funcionamento do site.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Como usamos os cookies?</h3>
                <div className="mb-6">
                  <p className="mb-2">• Melhorar sua navegação e lembrar suas preferências.</p>
                  <p className="mb-2">• Garantir o funcionamento correto do site e de funcionalidades como login, cadastro e formulários.</p>
                  <p className="mb-2">• Analisar o uso do site para aperfeiçoar nossos serviços (através de ferramentas como Google Analytics).</p>
                  <p className="mb-2">• Oferecer conteúdos e anúncios mais relevantes.</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Desativação de cookies</h3>
                <p className="mb-6">
                  Você pode configurar seu navegador para recusar cookies. No entanto, isso pode impactar a funcionalidade de algumas partes do nosso site.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookies que utilizamos:</h3>
                <div className="mb-6">
                  <p className="mb-2">• <strong>Cookies de conta:</strong> gestão de login e preferências.</p>
                  <p className="mb-2">• <strong>Cookies de sessão:</strong> lembrar quando você está logado.</p>
                  <p className="mb-2">• <strong>Cookies de preferências:</strong> armazenar configurações como idioma e preferências de layout.</p>
                  <p className="mb-2">• <strong>Cookies de análise:</strong> entender como os usuários utilizam o site.</p>
                  <p className="mb-2">• <strong>Cookies de publicidade:</strong> para exibir anúncios mais relevantes.</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookies de Terceiros</h3>
                <p className="mb-6">
                  Utilizamos serviços de terceiros, como Google Analytics, Google Ads e redes de afiliados, que também podem definir cookies para oferecer anúncios e analisar métricas de desempenho.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Compromisso do Usuário</h2>
                <p className="mb-4">O usuário da HUB360+ se compromete a:</p>
                <div className="mb-6">
                  <p className="mb-2">• Usar nossos serviços de forma lícita e ética.</p>
                  <p className="mb-2">• Não utilizar nossos sistemas para fins ilícitos, fraudulentos ou que atentem contra direitos de terceiros.</p>
                  <p className="mb-2">• Não praticar atos que possam comprometer a segurança dos sistemas da HUB360+, como disseminação de vírus ou ataques cibernéticos.</p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Mais Informações</h2>
                <p className="mb-4">
                  Se você tiver qualquer dúvida sobre nossa política de privacidade, sobre como tratamos dados ou desejar exercer seus direitos enquanto titular de dados, entre em contato pelo e-mail: <strong>contato@hub360plus.com.br</strong>
                </p>
                <p className="mb-4">
                  Ao continuar navegando em nossos sites e utilizando nossos serviços, você concorda com esta política de privacidade.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
