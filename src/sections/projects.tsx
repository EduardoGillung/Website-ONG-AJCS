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
    color: "from-[#FF5500] to-[#FF6B35]",
  },
  {
    title: "Educação",
    description:
      "Iniciativas para fortalecer a educação básica, com reforço escolar, alfabetização e atividades pedagógicas que apoiam crianças e adolescentes em situação de vulnerabilidade.",
    image: bibliotecaImg,
    color: "from-[#00B91F] to-[#10B981]",
  },
  {
    title: "Futebol",
    description:
      "Promoção de atividades esportivas para jovens, incentivando a disciplina, o trabalho em equipe e a saúde física e mental.",
    image: futebol,
    color: "from-[#009DFF] to-[#0EA5E9]",
  },
];

const Projects = () => {

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
        <div className="text-white text-3xl md:text-4xl font-bold text-center font-livvic">
          Projetos Sociais
          <div className="mt-4 w-1/2 h-2 bg-[#FF5500] rounded-full mx-auto"
               style={{ boxShadow: "0 8px 15px rgba(255, 165, 0, 0.3), 0 0 10px rgba(255, 165, 0, 0.1)" }}>
          </div>
        </div>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed text-center">
          A organização desenvolve projetos de capoeira, futebol e dança com cerca de mais de 200 crianças e adolescentes em comunidades periféricas de Natal, visando combater o trabalho infantil e a evasão escolar.
        </p>
      </div>

      {/* Cards dos Projetos com Animação Automática */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {/* Cards originais */}
            {projects.map((project, index) => (
              <div key={`original-${index}`} className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`}></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#171E37] mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Duplicação dos cards para loop infinito */}
            {projects.map((project, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`}></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#171E37] mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shape Divider */}
      <div className="custom-shape-divider-top-1757944207" >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill " 
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Projects;
