import capoeiraImg2 from "../assets/Capoeira-AJCS6.png";
import figuraSobrenos from "../assets/figura-sobrenos.png";
import figuraSobrenos2 from "../assets/figura-sobrenos2.png";
import figuraSobrenos3 from "../assets/figura-sobrenos3.png";

const About = () => {
  return (
    <>
      <section className="bg-[#171E37] pt-24">
        <div className="mx-auto px-6 max-w-7xl flex justify-center lg:justify-start">
          <div
            className="bg-[#D21528] text-white text-3xl md:text-4xl font-bold px-16 py-6 rounded-lg shadow-md max-w-lg w-full text-center leading-tight font-livvic"
            style={{
              boxShadow: "0 4px 15px rgba(210, 21, 40, 0.3), 0 0 20px rgba(210, 21, 40, 0.1)",
            }}
          >
            Quem somos
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-white">
            <h1 className="text-2xl font-livvic font-bold leading-relaxed text-yellow-400">
              Associação Juventudes Contruindo Sonhos
              </h1>
              <p className="text-lg leading-relaxed">
                Fundada em 16 de setembro de 2005 através do grupo de lideranças jovens remanescentes do projeto Fórum Engenho de Sonhos de Combate a Pobreza (2000-2005), que foi financiado pela Fundação W. K. Kellogg.
              </p>
              <p className="text-lg leading-relaxed">
                A <strong>AJCS</strong> nasce como resultado do protagonismo juvenil investido pelas ações do Engenho de Sonhos e foi membro da Frente Parlamentar Municipal em Defesa dos Direitos da Criança e do Adolescente de Natal (2006).
              </p>
              <p className="text-lg leading-relaxed">
                Desenvolvimento de diversos projetos sociais, educativos, desportivos e culturais na região Oeste de Natal, promovendo o desenvolvimento dos jovens e seus grupos, atuando em parcerias junto a entidades locais, comunitárias, empresas privadas e entes públicos.
              </p>
              <p className="text-lg leading-relaxed">
                Sua Diretoria é colegiada e atua em rede para melhor construir seus projetos e resultados que impactam na realidade social.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start lg:ml-4 items-start">
              <img
                src={capoeiraImg2}
                alt="Atividade da AJCS"
                className="w-full max-w-lg h-72 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>


      {/* ==== SEÇÃO MISSÃO, VISÃO E VALORES ==== */}

        <div className="container mx-auto px-6 max-w-7xl py-24">

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Missão com figura-sobrenos */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-yellow-400 mb-10">Missão</h3>
              <div className="w-full h-40 mx-auto mb-6 flex items-center justify-center">
                <img src={figuraSobrenos} alt="Missão" className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Promover o desenvolvimento social e educacional dos jovens através de projetos inovadores e parcerias estratégicas.
              </p>
            </div>

            {/* Visão com figura-sobrenos2 */}
            <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-10">Visão</h3>
              <div className="w-full h-40 mx-auto mb-6 flex items-center justify-center">
                <img src={figuraSobrenos2} alt="Visão" className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Ser referência em projetos sociais juvenis, contribuindo para uma sociedade mais justa e inclusiva.
              </p>
            </div>

            {/* Valores com figura-sobrenos3 */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-yellow-400 mb-10">Valores</h3>
              <div className="w-full h-40 mx-auto mb-6 flex items-center justify-center">
                <img src={figuraSobrenos3} alt="Valores" className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Compromisso, transparência, inovação, inclusão social e desenvolvimento sustentável.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default About;