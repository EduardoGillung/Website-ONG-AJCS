
import TransparencyImage from "../assets/transparency.png";

const Transparency = () => {
  const handleTransparencyClick = () => {
    // Link para o drive de transparência
    window.open('https://drive.google.com/drive/folders/your-folder-id', '_blank');
  };

  return (
    <section className="bg-[#171E37] 
    min-h-screen flex items-start justify-center pt-24 pb-24 relative">

      {/* Shape Divider */}
      <div className="custom-shape-divider-top-1758130511 absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1100 140"
          preserveAspectRatio="none"
          className="relative block w-full h-[120px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
            fill="#FFD037"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-6xl text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-16 border border-white/10 shadow-2xl">
          {/* Imagem de Transparência */}
          <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-68 lg:h-68 mx-auto mb-8 sm:mb-10 md:mb-12">
            <img
              src={TransparencyImage}
              alt="Transparência"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-livvic">
            Transparência
          </h2>

          {/* Descrição */}
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Acreditamos na importância da transparência em todas as nossas ações. 
            Aqui você pode acessar nossos relatórios financeiros, prestações de contas 
            e documentos que demonstram nosso compromisso com a responsabilidade social.
          </p>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300">Transparente</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">Mensal</div>
              <div className="text-gray-300">Prestação de Contas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">Anual</div>
              <div className="text-gray-300">Relatórios</div>
            </div>
          </div>

          {/* Botão de Acesso */}
          <button
            onClick={handleTransparencyClick}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-12 py-5 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-1 text-lg"
          >
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Acessar Documentos</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          {/* Informação adicional */}
          <p className="text-sm text-gray-400 mt-6">
            Clique no botão acima para acessar nossa pasta de transparência no Google Drive
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
