
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const TermosUso = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
                Termos de Uso
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Termos de Uso
              </h1>
              <p className="text-xl text-gray-600">
                Condições gerais de uso dos serviços da HUB360+
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. OBJETO DO TERMO</h2>
                <p className="mb-4">
                  <strong>1.1.</strong> A HUB360+ é especializada na criação e gestão de canais de vendas, oferecendo soluções abrangentes que incluem:
                </p>
                <div className="ml-6 mb-4">
                  <p className="mb-2">
                    <strong>Licitações Públicas:</strong> Apoio completo em processos licitatórios, desde a identificação de oportunidades até a elaboração de propostas, visando ampliar a presença no setor público.
                  </p>
                  <p className="mb-2">
                    <strong>E-commerce:</strong> Desenvolvimento e gerenciamento de lojas virtuais e marketplaces, com foco em performance e automação de captação de clientes.
                  </p>
                  <p className="mb-4">
                    <strong>Automação de Vendas:</strong> Implementação de sistemas que automatizam processos comerciais, como gestão de estoque, emissão de notas fiscais e integração com meios de pagamento.
                  </p>
                </div>
                <p className="mb-6">
                  <strong>1.2.</strong> Também disponibilizamos consultoria estratégica, treinamento e suporte técnico conforme acordado em contrato específico.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. FUNCIONALIDADE E RESPONSABILIDADES DOS SERVIÇOS</h2>
                <p className="mb-4">
                  <strong>2.1.</strong> A HUB360+ compromete-se a fornecer suporte técnico conforme os níveis de serviço acordados em proposta ou contrato.
                </p>
                <p className="mb-4">
                  <strong>2.2.</strong> O cliente é responsável por fornecer todas as informações e acessos necessários para a implementação correta dos serviços contratados.
                </p>
                <p className="mb-6">
                  <strong>2.3.</strong> A HUB360+ não se responsabiliza por limitações técnicas, falhas ou interrupções em serviços causadas por fatores externos ou plataformas de terceiros integradas.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. CIÊNCIA PELO CLIENTE</h2>
                <p className="mb-4">
                  <strong>3.1.</strong> O cliente reconhece que:
                </p>
                <div className="ml-6 mb-4">
                  <p className="mb-2">Limitações, falhas ou interrupções em plataformas utilizadas são de responsabilidade dos respectivos fornecedores;</p>
                  <p className="mb-4">Para suporte técnico dessas plataformas, o cliente deverá contatar o provedor da ferramenta.</p>
                </div>
                <p className="mb-6">
                  <strong>3.2.</strong> A HUB360+ proverá suporte apenas para configuração inicial, dentro do escopo contratado.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. RESPONSABILIDADES DO CLIENTE</h2>
                <p className="mb-4">
                  <strong>4.1.</strong> Após confirmação de contratação e pagamento, o cliente deverá fornecer:
                </p>
                <div className="ml-6 mb-4">
                  <p className="mb-2">Textos, imagens, processos e fluxos integrados;</p>
                  <p className="mb-2">Logins, senhas ou autorização para criação de contas;</p>
                  <p className="mb-4">Informações corretas sobre usuários e canais de comunicação.</p>
                </div>
                <p className="mb-4">
                  <strong>4.2.</strong> Atrasos ou omissões poderão postergar prazos sem penalidade à HUB360+.
                </p>
                <p className="mb-6">
                  <strong>4.3.</strong> Informações incorretas ou omissões que prejudiquem o andamento dos serviços são de responsabilidade do cliente.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. PROPRIEDADE INTELECTUAL</h2>
                <p className="mb-4">
                  <strong>5.1.</strong> Todos os materiais, conteúdos, logotipos, marcas e ferramentas são protegidos por leis de direitos autorais e propriedade intelectual.
                </p>
                <p className="mb-4">
                  <strong>5.2.</strong> É proibido reproduzir, redistribuir ou usar o material sem autorização por escrito, exceto para uso pessoal não comercial, conforme licença de uso.
                </p>
                <p className="mb-6">
                  <strong>5.3.</strong> Violações sujeitarão o responsável a medidas administrativas e judiciais, conforme a legislação vigente.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. SUPORTE E ATENDIMENTO AO CLIENTE</h2>
                <p className="mb-4">
                  <strong>6.1.</strong> O suporte será prestado conforme níveis de serviço contratados.
                </p>
                <p className="mb-4">
                  <strong>6.2.</strong> Canais de contato:
                </p>
                <div className="ml-6 mb-4">
                  <p className="mb-2">WhatsApp: (11) 99999-9999</p>
                  <p className="mb-4">E-mail: contato@hub360mais.com.br</p>
                </div>
                <p className="mb-6">
                  <strong>6.3.</strong> Os tempos de resposta variam conforme a complexidade, mas a HUB360+ atenderá dentro dos prazos acordados.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. CANCELAMENTO E REEMBOLSO</h2>
                <p className="mb-4">
                  <strong>7.1.</strong> O cliente pode solicitar cancelamento a qualquer momento, conforme condições contratuais.
                </p>
                <p className="mb-4">
                  <strong>7.2.</strong> Em casos aplicáveis, será feito reembolso proporcional, descontadas taxas administrativas e custos já incorridos.
                </p>
                <p className="mb-6">
                  <strong>7.3.</strong> Solicitações devem ser feitas por escrito e serão analisadas em até 30 dias.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. FORÇA MAIOR</h2>
                <p className="mb-4">
                  <strong>8.1.</strong> A HUB360+ não será responsável por interrupções ou falhas causadas por eventos externos além de seu controle.
                </p>
                <p className="mb-6">
                  <strong>8.2.</strong> Em caso de força maior, notificaremos o cliente e tomaremos medidas cabíveis para mitigar impactos.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. MODIFICAÇÃO DOS SERVIÇOS</h2>
                <p className="mb-4">
                  <strong>9.1.</strong> Podemos modificar, suspender ou descontinuar serviços, mediante notificação prévia ao cliente.
                </p>
                <p className="mb-6">
                  <strong>9.2.</strong> O cliente poderá rescindir sem penalidade, caso as mudanças afetem o contrato, desde que haja aviso prévio escrito.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. RESCISÃO DO CONTRATO</h2>
                <p className="mb-4">
                  <strong>10.1.</strong> O contrato pode ser rescindido por qualquer parte mediante notificação escrita, nas seguintes situações:
                </p>
                <div className="ml-6 mb-4">
                  <p className="mb-2">Descumprimento contratual, com prazo para correção;</p>
                  <p className="mb-4">Interesse de qualquer das partes, mediante aviso prévio de 30 dias.</p>
                </div>
                <p className="mb-4">
                  <strong>10.2.</strong> Rescisão voluntária pelo cliente implicará multa rescisória de 50% do valor restante, salvo se for por inadimplência da HUB360+.
                </p>
                <p className="mb-4">
                  <strong>10.3.</strong> Em caso de descumprimento contratual pela HUB360+, o cliente não pagará multa e poderá receber reembolso proporcional pelos serviços não prestados.
                </p>
                <p className="mb-6">
                  <strong>10.4.</strong> Caso a rescisão seja por descumprimento do cliente, ele ficará responsável pelo pagamento de valores devidos até a data de rescisão, incluindo custos incorridos.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. INDENIZAÇÃO</h2>
                <p className="mb-4">
                  <strong>11.1.</strong> O cliente concorda em indenizar e isentar a HUB360+ por quaisquer reivindicações, perdas ou danos resultantes de:
                </p>
                <div className="ml-6 mb-6">
                  <p className="mb-2">Uso indevido dos serviços ou violação destes Termos;</p>
                  <p className="mb-2">Informações incorretas ou incompletas fornecidas pelo cliente;</p>
                  <p className="mb-4">Ações autorizadas por terceiros indicados pelo cliente.</p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. DISPOSIÇÕES GERAIS</h2>
                <p className="mb-4">
                  <strong>12.1.</strong> Estes Termos constituem o acordo integral entre as partes, prevalecendo sobre entendimentos anteriores.
                </p>
                <p className="mb-4">
                  <strong>12.2.</strong> Se alguma cláusula for considerada inválida, as demais permanecerão em vigor.
                </p>
                <p className="mb-6">
                  <strong>12.3.</strong> A ausência de exercício de qualquer direito previsto nestes Termos não será considerada renúncia de direitos.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. LEI APLICÁVEL E FORO</h2>
                <p className="mb-4">
                  <strong>13.1.</strong> Estes Termos são regidos pelas leis da República Federativa do Brasil.
                </p>
                <p className="mb-4">
                  <strong>13.2.</strong> Fica eleito o foro da Comarca de São Paulo/SP para resolução de eventuais litígios, com renúncia de qualquer outro foro.
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

export default TermosUso;
