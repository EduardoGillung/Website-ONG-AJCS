import React from 'react';

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
        onError={(e) => {
          // Fallback para imagem se o vídeo falhar
          const video = e.target as HTMLVideoElement;
          video.style.display = 'none';
          const fallback = document.getElementById('video-fallback');
          if (fallback) fallback.style.display = 'block';
        }}
      >
        <source src="/video-background.mp4" type="video/mp4" />
        <source src="/video-background.webm" type="video/webm" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Fallback de imagem para dispositivos sem suporte a vídeo */}
      <div 
        id="video-fallback"
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#000928] via-[#41559E] to-[#000928]"
        style={{ display: 'none' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Camada de escurecimento otimizada */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

      {/* ==== CONTEÚDO PRINCIPAL SOBRE O VÍDEO ==== */}
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
