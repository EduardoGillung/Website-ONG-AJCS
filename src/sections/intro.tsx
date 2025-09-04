import React from 'react';

const Intro = () => {
  return (
    <section className="relative h-[calc(100vh-96px)] w-full overflow-hidden">
      {/* ==== VÍDEO DE FUNDO ==== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video-background.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Camada de escurecimento */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ==== CONTEÚDO PRINCIPAL SOBRE O VÍDEO ==== */}
      <div className="relative z-10 flex flex-col justify-center h-full px-64">
        <h1 className="text-5xl lg:text-7xl font-black text-yellow-400 drop-shadow-lg leading-tight font-livvic">
          <span className="block">Juventudes</span>
          <span className="block">Construindo</span>
          <span className="block">Sonhos</span>
        </h1>
      </div>
    </section>
  );
};

export default Intro;
