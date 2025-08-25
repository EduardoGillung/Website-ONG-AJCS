
const Intro = () => {
  return (
    <div className="relative">
      {/* Seção das 3 listras coloridas */}
      <div className="relative">
        {/* Listra 1 - Laranja */}
        <div className="bg-[#C94300] py-4 lg:py-6 relative flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-[#FFE100] leading-tight">
              Juventudes
            </h1>
          </div>
          {/* Ícones de redes sociais posicionados absolutamente */}
          <div className="absolute top-1/2 right-6 transform -translate-y-1/2 flex space-x-4">
            {/* Facebook */}
            <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
              <span className="text-white font-bold text-lg">f</span>
            </a>
            {/* Instagram */}
            <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center hover:from-pink-600 hover:to-orange-600 transition-all duration-300">
              <span className="text-white text-xl">📷</span>
            </a>
            {/* WhatsApp */}
            <a href="#" className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
              <span className="text-white text-xl">💬</span>
            </a>
          </div>
        </div>

        {/* Listra 2 - Verde */}
        <div className="bg-[#006F12] py-4 lg:py-6 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-[#FFE100] leading-tight">
              Construindo
            </h1>
          </div>
        </div>

        {/* Listra 3 - Azul */}
        <div className="bg-[#009DFF] py-4 lg:py-6 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-[#FFE100] leading-tight">
              Sonhos
            </h1>
          </div>
        </div>
      </div>

      {/* Seção de conteúdo abaixo das listras */}
      <div className="bg-[#171E37] py-8 lg:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto e botão */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Transformando vidas através de projetos sociais e solidariedade
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Nossa missão é construir um futuro melhor para jovens e famílias através de 
                  ações sociais, educação e desenvolvimento comunitário. Junte-se a nós nesta 
                  jornada de esperança e transformação.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Através de nossos projetos, já impactamos centenas de vidas e continuamos 
                  expandindo nossa rede de solidariedade para alcançar mais comunidades.
                </p>
              </div>
              
              <button className="bg-[#FFE100] hover:bg-[#FFD700] text-[#4A430B] font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#FFE100]/40 transform hover:-translate-y-1">
                Sobre Nós
              </button>
            </div>

            {/* Imagem */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="aspect-square bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-6xl">👥</div>
                      <p className="text-white/80 text-sm">Imagem dos jovens em atividade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de ações sociais */}
      <div className="bg-[#171E37] py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FFE100] mb-8">
            Ações Sociais e Realizações
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Intro;    
