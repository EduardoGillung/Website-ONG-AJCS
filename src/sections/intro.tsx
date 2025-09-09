const Intro = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video-intro.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-yellow-400 drop-shadow-lg leading-tight font-livvic">
          <span className="block">Juventudes</span>
          <span className="block">Construindo</span>
          <span className="block">Sonhos</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 max-w-2xl">
          Transformando vidas através de projetos sociais e solidariedade
        </p>

        {/* Call-to-action */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            aria-label="Conheça nossa história"
          >
            Conheça Nossa História
          </button>
          <button
            onClick={() => document.getElementById('doar')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Faça uma doação"
          >
            Faça uma Doação
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;