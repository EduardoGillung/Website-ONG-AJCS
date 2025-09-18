import capoeiraImg2 from "../assets/Capoeira-AJCS6.png";
import premioItau from "../assets/premio-itau.png";
import figuraSobrenos from "../assets/figura-sobrenos.png";
import figuraSobrenos2 from "../assets/figura-sobrenos2.png";
import figuraSobrenos3 from "../assets/figura-sobrenos3.png";

const About = () => {
  return (
    <>
      <section className="bg-[#171E37] pt-12">
        <div className="container mx-auto px-6 max-w-7xl py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-white">
            <div className="text-white text-3xl md:text-4xl font-bold text-center font-livvic ">
                Quem somos
                <div className="mt-4 w-4/4 h-2 bg-[#D21528] rounded-full"
                 style={{boxShadow: "0 8px 15px rgba(210, 21, 40, 0.3), 0 0 10px rgba(210, 21, 40, 0.1)"}}>
                </div>
              </div>
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

            <div className="flex flex-col justify-start lg:ml-4 items-start gap-6">
              <img
                src={capoeiraImg2}
                alt="Atividade da AJCS"
                className="w-full max-w-lg h-72 md:h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="flex flex-col bg-[#1F2947] rounded-xl shadow-lg p-6 items-center gap-4 max-w-lg w-full">
                <img
                  src={premioItau}
                  alt="Prêmio Itaú"
                  className="w-32 h-32 object-contain rounded-lg"
                />
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">Prêmio Itaú-Unicef - 7° edição</h3>
                  <p className="text-gray-200 leading-relaxed">
                    A AJCS foi reconhecida pelo Prêmio Itaú-Unicef por suas ações de inclusão social e fortalecimento da cultura juvenil, destacando-se como referência em projetos sociais na região.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==== SEÇÃO MISSÃO, VISÃO E VALORES ==== */}
        <div className="container mx-auto px-6 max-w-7xl py-24">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-yellow-400 mb-10">Missão</h3>
              <div className="w-full h-40 mx-auto mb-6 flex items-center justify-center">
                <img src={figuraSobrenos} alt="Missão" className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Promover o desenvolvimento social e educacional dos jovens através de projetos inovadores e parcerias estratégicas.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-yellow-400 mb-10">Visão</h3>
              <div className="w-full h-40 mx-auto mb-6 flex items-center justify-center">
                <img src={figuraSobrenos2} alt="Visão" className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Ser referência em projetos sociais juvenis, contribuindo para uma sociedade mais justa e inclusiva.
              </p>
            </div>

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