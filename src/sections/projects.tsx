import { useState } from "react";
import capoeiraImg from "../assets/Capoeira-AJCS3.png";
import bibliotecaImg from "../assets/Biblioteca-AJCS5.png";
import capoeiraImg2 from "../assets/Capoeira-AJCS6.png";

const projects = [
  {
    title: "Capoeira",
    description:
      "Desenvolvimento de diversos projetos sociais, educativos, desportivos e culturais na região Oeste de Natal, promovendo o desenvolvimento dos jovens e seus grupos, atuando em parcerias junto a entidades locais, comunitárias, empresas privadas e entes públicos.",
    image: capoeiraImg, // Usando a imagem importada
  },
  {
    title: "Educação",
    description:
      "Iniciativas para fortalecer a educação básica, com reforço escolar, alfabetização e atividades pedagógicas que apoiam crianças e adolescentes em situação de vulnerabilidade.",
    image: bibliotecaImg, // Usando a imagem importada
  },
  {
    title: "Esporte",
    description:
      "Promoção de atividades esportivas para jovens, incentivando a disciplina, o trabalho em equipe e a saúde física e mental.",
    image: capoeiraImg2, // Usando a imagem importada
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#171E37] mt-10">
    <div className="mx-auto px-6 max-w-5xl flex justify-center lg:justify-center  mb-10">
      <div
        className="bg-[#C94300] text-white text-2xl md:text-3xl font-bold px-12 py-4 rounded-lg shadow-md max-w-md w-full text-center"
        style={{
          boxShadow: "0 4px 15px rgba(201, 67, 0, 0.4), 0 0 20px rgba(255, 147, 41, 0.2)",
        }}
      >
        Projetos Sociais
      </div>
    </div>

      {/* Conteúdo */}
      <div className="relative max-w-5xl mx-auto flex items-center">
        {/* Botão anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
        >
          ◀
        </button>

        {/* Card */}
        <div className="flex flex-col md:flex-row bg-transparent gap-8 items-center mx-12">
          {/* Imagem */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src={projects[current].image}
              alt={projects[current].title}
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Texto com linha vertical */}
          <div className="text-white w-full md:w-1/2 space-y-4 border-l-4 border-[#A84300] pl-6">
            <h3 className="text-xl font-bold">{projects[current].title}</h3>
            <p className="text-sm leading-relaxed opacity-90">
              {projects[current].description}
            </p>
          </div>
        </div>

        {/* Botão próximo */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default Projects;