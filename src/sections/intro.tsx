
const Intro = () => {
  return (
    <section className="relative h-[70vh] lg:h-[80vh] w-full overflow-hidden">
      {/* ==== VÍDEO DE FUNDO OTIMIZADO ==== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 20%' }}
      >
        <source src="/video-intro.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Camada de escurecimento otimizada */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

      {/* ==== CONTEÚDO PRINCIPAL ==== */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-yellow-400 drop-shadow-lg leading-tight font-livvic text-center lg:text-left">
          <span className="block">Juventudes</span>
          <span className="block">Construindo</span>
          <span className="block">Sonhos</span>
        </h1>
        
        {/* Subtítulo responsivo */}
        <p className="text-white/90 text-lg sm:text-xl md:text-2xl mt-6 text-center lg:text-left max-w-2xl">
          Transformando vidas através de projetos sociais e solidariedade
        </p>

        {/* Call-to-action */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button 
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Conheça Nossa História
          </button>
          <button 
            onClick={() => document.getElementById('doar')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Faça uma Doação
          </button>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
