import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#000928]">
      {/* Header */}
      <div className="bg-[#171E37] border-b border-yellow-400/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-xl border-2 border-yellow-400 bg-white flex items-center justify-center shadow-lg group-hover:shadow-yellow-400/25 transition-all duration-300 overflow-hidden">
                <img 
                  src={Logo} 
                  alt="Associação Juventude Construindo Sonhos Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-lg font-bold">Construindo</span>
                <span className="text-yellow-400 text-lg font-bold">Sonhos</span>
              </div>
            </Link>
            <Link 
              to="/" 
              className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-yellow-400/10"
            >
              ← Voltar ao Início
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
              <span className="text-yellow-400">Política de</span> Privacidade
            </h1>
            
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">1. Informações Coletadas</h2>
                <p className="text-lg">
                  Coletamos apenas as informações necessárias para fornecer nossos serviços, incluindo:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-6">
                  <li>Nome e informações de contato (quando você nos contata)</li>
                  <li>Informações de doação (quando você faz uma contribuição)</li>
                  <li>Dados de navegação anônimos para melhorar nossa experiência</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">2. Como Usamos Suas Informações</h2>
                <p className="text-lg">
                  Utilizamos suas informações para:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-6">
                  <li>Processar doações e enviar recibos</li>
                  <li>Responder suas mensagens e solicitações</li>
                  <li>Melhorar nossos serviços e comunicação</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. Compartilhamento de Informações</h2>
                <p className="text-lg">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-6">
                  <li>Quando exigido por lei</li>
                  <li>Para processar doações através de provedores seguros</li>
                  <li>Com seu consentimento explícito</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">4. Segurança dos Dados</h2>
                <p className="text-lg">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">5. Cookies e Tecnologias Similares</h2>
                <p className="text-lg">
                  Utilizamos cookies essenciais para o funcionamento do site. Você pode controlar o uso de cookies através das configurações do seu navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">6. Seus Direitos</h2>
                <p className="text-lg">
                  Você tem o direito de:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-6">
                  <li>Acessar suas informações pessoais</li>
                  <li>Corrigir informações imprecisas</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Retirar consentimento a qualquer momento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">7. Alterações nesta Política</h2>
                <p className="text-lg">
                  Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas através de nosso site ou contato direto.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">8. Contato</h2>
                <p className="text-lg">
                  Para questões sobre esta política ou suas informações pessoais, entre em contato conosco através dos canais disponíveis em nossa página de contato.
                </p>
              </section>

              <div className="text-center pt-8">
                <p className="text-sm text-gray-400">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
