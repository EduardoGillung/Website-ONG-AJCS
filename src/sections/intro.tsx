
const Intro = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background com gradiente e efeitos */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,193,7,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-12">
          {/* Logo grande */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-3xl border-4 border-yellow-400 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-2xl shadow-yellow-400/25 animate-pulse">
              <span className="text-6xl font-bold text-black">
                <span className="text-blue-600">J</span>
                <span className="text-orange-500">S</span>
              </span>
            </div>
          </div>

          {/* Título principal */}
          <div className="space-y-6">
            <h1 className="text-7xl lg:text-8xl font-bold text-white leading-tight">
              <span className="text-yellow-400">Construindo</span>
              <br />
              <span className="text-white">Sonhos</span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-2xl lg:text-3xl text-yellow-400/80 max-w-4xl mx-auto leading-relaxed">
              Transformando vidas através de projetos sociais e solidariedade. 
              Junte-se a nós nesta jornada de esperança e transformação.
            </p>
          </div>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-12 py-5 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 transform hover:-translate-y-2 text-xl">
              🎁 Quero Doar
            </button>
            <button className="border-3 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-12 py-5 rounded-2xl transition-all duration-300 text-xl">
              📋 Conhecer Projetos
            </button>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20">
            <div className="text-center group">
              <div className="text-5xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-white/80 text-lg">Famílias Ajudadas</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-white/80 text-lg">Projetos Realizados</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-white/80 text-lg">Voluntários Ativos</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;    
