import { useState } from "react";
import "../components/shapeDivisor.css";
import capoeiraImg from "../assets/Capoeira-AJCS3.png";
import bibliotecaImg from "../assets/Biblioteca-AJCS5.png";
import futebol from "../assets/futebol.png";
import { Particles } from "../components/ui/particles";

const projects = [
  {
    title: "Capoeira",
    description:
      "Desenvolvimento de diversos projetos sociais, educativos, desportivos e culturais na região Oeste de Natal, promovendo o desenvolvimento dos jovens e seus grupos, atuando em parcerias junto a entidades locais, comunitárias, empresas privadas e entes públicos.",
    image: capoeiraImg,
  },
  {
    title: "Educação",
    description:
      "Iniciativas para fortalecer a educação básica, com reforço escolar, alfabetização e atividades pedagógicas que apoiam crianças e adolescentes em situação de vulnerabilidade.",
    image: bibliotecaImg,
  },
  {
    title: "Futebol",
    description:
      "Promoção de atividades esportivas para jovens, incentivando a disciplina, o trabalho em equipe e a saúde física e mental.",
    image: futebol,
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <section className="pb-[clamp(200px,24vw,340px)] relative overflow-hidden bg-[#171E37] pt-28">
      <Particles 
        className="absolute inset-0 z-0" 
        quantity={130}
        ease={65}
        color="#00B91F"
        size={1.4}
      />
      {/* Título */}
        <div className="space-y-6 relative z-10">
            <div className="text-white text-3xl md:text-4xl font-bold text-center font-livvic ">
              Projetos Sociais
                <div className="mt-4 w-1/2 h-2 bg-[#FF5500] rounded-full mx-auto"
                 style={{ boxShadow: "0 8px 15px rgba(255, 165, 0, 0.3), 0 0 10px rgba(255, 165, 0, 0.1)" }}>
                </div>
              </div>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed text-center">
          A organização desenvolve projetos de capoeira, futebol e dança com cerca de mais de 200 crianças e adolescentes em comunidades periféricas de Natal, visando combater o trabalho infantil e a evasão escolar.
          </p>
      </div>

      {/* Conteúdo */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center py-8 sm:py-12 md:py-16">
        {/* Botão anterior */}
        <button
          onClick={prevSlide}
          aria-label="Projeto anterior"
          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:-left-6 lg:-left-14 xl:-left-20 z-20 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-white/20 text-white shadow-lg ring-1 ring-white/30 backdrop-blur-sm transition-transform duration-200 hover:bg-white/30 hover:scale-105"
        >
          <span aria-hidden>◀</span>
        </button>

        {/* Card */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center md:text-left w-full">
          {/* Imagem */}
          <img
            src={projects[current].image}
            alt={projects[current].title}
            className="w-full md:w-1/2 h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-xl shadow-lg"
          />

          {/* Texto */}
          <div className="w-full md:w-1/2 text-white space-y-3 sm:space-y-4 border-l-4 border-yellow-400 pl-4 sm:pl-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{projects[current].title}</h3>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-90">
              {projects[current].description}
            </p>
          </div>
        </div>

        {/* Botão próximo */}
        <button
          onClick={nextSlide}
          aria-label="Próximo projeto"
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:-right-6 lg:-right-14 xl:-right-20 z-20 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-white/20 text-white shadow-lg ring-1 ring-white/30 backdrop-blur-sm transition-transform duration-200 hover:bg-white/30 hover:scale-105"
        >
          <span aria-hidden>▶</span>
        </button>
      </div>

      {/* Shape Divider */}
      <div className="custom-shape-divider-top-1757944207">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Projects;
