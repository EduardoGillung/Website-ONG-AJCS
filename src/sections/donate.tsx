import { Particles } from "../components/ui/particles";
import DonateImage from "../assets/donate.png"

const Donate = () => {
  const donationMethods = [
    {
      title: "Transferência Bancária",
      details: "Banco: Exemplo\nConta: 12345-6\nAgência: 7890\nCNPJ: 12.345.678/0001-99",
    },
    {
      title: "PIX",
      details: "Chave PIX: doacoes@construindosonhos.org",
    },
    {
      title: "Doações em Espécie",
      details: "Entre em contato para agendar a entrega de itens como alimentos, roupas ou materiais escolares.",
    },
  ];



  return (
    <div className="min-h-screen flex items-center justify-center py-8 bg-[#171E37] relative">
      <Particles 
        className="absolute inset-0 z-0" 
        quantity={115}
        ease={70}
        color="#D21528"
        size={1.2}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12">
          {/* Imagem de Transparência */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto mb-8 sm:mb-10 md:mb-12 mt-24">
            <img
              src={DonateImage}
              alt="Doacao"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Título da seção */}
          <div className="space-y-6">
            <div className="text-white text-3xl md:text-4xl font-bold text-center font-livvic">
              <span className="text-yellow-400">Faça a</span> Diferença
              <div className="mt-4 w-1/2 h-2 bg-yellow-400 rounded-full mx-auto"
                   style={{ boxShadow: "0 8px 15px rgba(255, 255, 0, 0.3), 0 0 10px rgba(255, 255, 0, 0.1)" }}>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto text-center">
              Sua doação transforma vidas e ajuda a construir um futuro melhor. Entre em contato para saber como contribuir!
            </p>
          </div>


          {/* Como Doar */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">Como Doar</h3>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto">
              Para fazer sua doação, entre em contato com nossa coordenadora de doações, Ana Silva, pelos canais abaixo. Ela irá orientá-lo sobre os próximos passos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {donationMethods.map((method, index) => (
                <div
                  key={index}
                  className="p-5 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-lg text-left"
                >
                  <div className="text-yellow-400 font-semibold text-lg mb-2">{method.title}</div>
                  <div className="text-white/90 text-sm whitespace-pre-line">{method.details}</div>
                </div>
              ))}
            </div>
          </div>

          

          {/* CTA Adicional */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">Outras Formas de Ajudar</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:voluntarios@construindosonhos.org"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Enviar email para ser voluntário"
              >
                Seja Voluntário
              </a>
              <a
                href="https://www.instagram.com/ajcs.construindosonhos/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Divulgar nossa causa no Instagram"
              >
                Divulgue Nossa Causa
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;