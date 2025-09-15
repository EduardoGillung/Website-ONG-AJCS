
const Transparency = () => {
  const handleTransparencyClick = () => {
    // Link para o drive de transparência
    window.open('https://drive.google.com/drive/folders/your-folder-id', '_blank');
  };

  return (
    <section className="bg-[#171E37] min-h-screen flex items-center justify-center pt-24 pb-24">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-9 border border-white/10 shadow-2xl">
          {/* Ícone de Transparência */}
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* Título */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
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
