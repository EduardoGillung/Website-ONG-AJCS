import { useState } from "react";
import "../components/shapeDivisor.css";
import capoeiraImg from "../assets/Capoeira-AJCS3.png";
import bibliotecaImg from "../assets/Biblioteca-AJCS5.png";
import capoeiraImg2 from "../assets/Capoeira-AJCS6.png";

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
    title: "Esporte",
    description:
      "Promoção de atividades esportivas para jovens, incentivando a disciplina, o trabalho em equipe e a saúde física e mental.",
    image: capoeiraImg2,
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
      {/* Título */}
      <h2
        className="mx-auto max-w-md text-center bg-[#C94300] text-white text-2xl md:text-3xl font-bold px-12 py-4 rounded-lg shadow-md mb-12 leading-tight font-livvic"
        style={{
          boxShadow:
            "0 4px 15px rgba(201, 67, 0, 0.4), 0 0 20px rgba(255, 147, 41, 0.2)",
        }}
      >
        Projetos Sociais
      </h2>

      {/* Conteúdo */}
      <div className="relative max-w-5xl mx-auto flex items-center justify-center py-16">
        {/* Botão anterior */}
        <button
          onClick={prevSlide}
          aria-label="Projeto anterior"
          className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-14 lg:-left-20 z-20 h-12 w-12 flex items-center justify-center rounded-full bg-white/20 text-white shadow-lg ring-1 ring-white/30 backdrop-blur-sm transition-transform duration-200 hover:bg-white/30 hover:scale-105"
        >
          <span aria-hidden>◀</span>
        </button>

        {/* Card */}
        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          {/* Imagem */}
          <img
            src={projects[current].image}
            alt={projects[current].title}
            className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-xl shadow-lg"
          />

          {/* Texto */}
          <div className="w-full md:w-1/2 text-white space-y-4 border-l-4 border-yellow-400 pl-6">
            <h3 className="text-xl font-bold">{projects[current].title}</h3>
            <p className="text-sm leading-relaxed opacity-90">
              {projects[current].description}
            </p>
          </div>
        </div>

        {/* Botão próximo */}
        <button
          onClick={nextSlide}
          aria-label="Próximo projeto"
          className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-14 lg:-right-20 z-20 h-12 w-12 flex items-center justify-center rounded-full bg-white/20 text-white shadow-lg ring-1 ring-white/30 backdrop-blur-sm transition-transform duration-200 hover:bg-white/30 hover:scale-105"
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
