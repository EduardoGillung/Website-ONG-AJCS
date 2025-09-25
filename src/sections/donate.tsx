import { Particles } from "../components/ui/particles";
import DonateImage from "../assets/donate.png";
import { CreditCard, Smartphone, Package, ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Donate = () => {
  const [copiedPix, setCopiedPix] = useState(false);

  const donationMethods = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Transferência Bancária",
      details: "Banco: Exemplo\nConta: 12345-6\nAgência: 7890\nCNPJ: 12.345.678/0001-99",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-400 hover:to-blue-500",
      action: "Ver Dados"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "PIX",
      details: "Chave PIX: doacoes@construindosonhos.org",
      pixKey: "doacoes@construindosonhos.org",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-400 hover:to-green-500",
      action: "Copiar Chave"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Doações em Espécie",
      details: "Entre em contato para agendar a entrega de itens como alimentos, roupas ou materiais escolares.",
      color: "from-orange-500 to-orange-600",
      hoverColor: "hover:from-orange-400 hover:to-orange-500",
      action: "Entrar em Contato"
    },
  ];

  const copyPixKey = () => {
    navigator.clipboard.writeText("doacoes@construindosonhos.org");
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };



  return (
    <section className="bg-[#171E37] py-16 md:py-20 lg:py-24 relative">
      <Particles 
        className="absolute inset-0 z-0" 
        quantity={115}
        ease={70}
        color="#D21528"
        size={1.2}
      />
      
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          {/* Imagem de Doação */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto mb-8">
            <img
              src={DonateImage}
              alt="Doação - Faça a Diferença"
              className="w-full h-full object-contain"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-livvic">
            <span className="text-yellow-400">Faça a</span> Diferença
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-[#D21528] rounded-full mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Sua doação transforma vidas e ajuda a construir um futuro melhor. 
            Cada contribuição é um passo em direção a uma sociedade mais justa e solidária.
          </p>
        </div>

        {/* Cards de Métodos de Doação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16">
          {donationMethods.map((method, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className="text-center">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${method.color} ${method.hoverColor} rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed whitespace-pre-line">{method.details}</p>
                
                {method.title === "PIX" ? (
                  <button
                    onClick={copyPixKey}
                    className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300 hover:text-yellow-300"
                  >
                    {copiedPix ? (
                      <>
                        <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{method.action}</span>
                      </>
                    )}
                  </button>
                ) : (
                  <div className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>{method.action}</span>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Informações Adicionais */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 mb-12 md:mb-16">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Como Funciona</h3>
            <p className="text-white/80 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-6">
              Para fazer sua doação, entre em contato com nossa coordenadora de doações, Ana Silva, pelos canais abaixo. 
              Ela irá orientá-lo sobre os próximos passos e como sua contribuição será utilizada.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-yellow-400 font-semibold mb-2">Transparência Total</h4>
                <p className="text-white/70 text-sm">Todas as doações são registradas e você recebe comprovantes detalhados.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-yellow-400 font-semibold mb-2">Impacto Direto</h4>
                <p className="text-white/70 text-sm">Sua contribuição vai diretamente para os projetos e beneficiários.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#D21528] to-[#C94300] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white/10 rounded-full -translate-y-16 sm:-translate-y-32 translate-x-16 sm:translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-yellow-400/10 rounded-full translate-y-12 sm:translate-y-24 -translate-x-12 sm:-translate-x-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 font-livvic">
                Outras Formas de Ajudar
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Além de doações financeiras, você pode contribuir sendo voluntário ou divulgando nossa causa. 
                Toda forma de apoio é valiosa!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="mailto:voluntarios@construindosonhos.org"
                  className="bg-white text-[#D21528] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Seja Voluntário
                </a>
                <a
                  href="https://www.instagram.com/ajcs.construindosonhos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/30 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                >
                  Divulgue Nossa Causa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;