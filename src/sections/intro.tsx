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
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/30"></div>

      {/* Bottom Transition to Main Background */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-28 sm:h-32 md:h-40 bg-gradient-to-b from-transparent to-[#1A1F3A]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-black text-yellow-400 drop-shadow-lg leading-tight font-livvic">
            <span className="block">Juventudes</span>
            <span className="block">Construindo</span>
            <span className="block">Sonhos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4 sm:mt-6 max-w-2xl mx-auto">
            Transformando vidas através de projetos sociais e solidariedade
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;