import capoeiraImg2 from "../assets/Capoeira-AJCS6.png";

const About = () => {
  return (
    <>
      <section className="bg-[#171E37] mt-10 ">
        <div className="mx-auto px-6 max-w-7xl flex justify-center lg:justify-start">
          <div
            className="bg-[#D21528] text-white text-2xl md:text-3xl font-bold px-12 py-4 rounded-lg shadow-md max-w-md w-full text-center"
            style={{
              boxShadow: "0 4px 15px rgba(210, 21, 40, 0.3), 0 0 20px rgba(210, 21, 40, 0.1)",
            }}
          >
            Quem somos
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 max-w-7xl py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6 text-white">
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

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={capoeiraImg2}
                alt="Atividade da AJCS"
                className="w-full max-w-md h-64 md:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==== SEÇÃO MISSÃO, VISÃO E VALORES ==== */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D21528] to-[#8D0916] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#000928] mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Promover o desenvolvimento social e educacional dos jovens através de projetos inovadores e parcerias estratégicas.
              </p>
            </div>

            {/* Visão */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#41559E] to-[#000928] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#000928] mb-4">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser referência em projetos sociais juvenis, contribuindo para uma sociedade mais justa e inclusiva.
              </p>
            </div>

            {/* Valores */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#FFE100] to-[#FFD700] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#000928]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#000928] mb-4">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Compromisso, transparência, inovação, inclusão social e desenvolvimento sustentável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==== SEÇÃO HISTÓRIA ==== */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#000928] mb-4">Nossa História</h2>
            <div className="w-24 h-1 bg-[#D21528] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D21528] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2000</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#000928] mb-2">Início do Projeto</h3>
                    <p className="text-gray-600">Início do Fórum Engenho de Sonhos de Combate a Pobreza, financiado pela Fundação W. K. Kellogg.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#41559E] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2005</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#000928] mb-2">Fundação da AJCS</h3>
                    <p className="text-gray-600">Fundação da Associação Juventude Construindo Sonhos em 16 de setembro.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFE100] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#000928] font-bold">2006</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#000928] mb-2">Participação Política</h3>
                    <p className="text-gray-600">Membro da Frente Parlamentar Municipal em Defesa dos Direitos da Criança e do Adolescente de Natal.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#41559E]/10 to-[#000928]/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#000928] mb-4">Legado de Impacto</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ao longo de mais de 18 anos, a AJCS tem sido um pilar fundamental no desenvolvimento social da região Oeste de Natal, transformando vidas através da educação, cultura e esporte.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D21528]">18+</div>
                  <div className="text-sm text-gray-600">Anos de Atuação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#41559E]">50+</div>
                  <div className="text-sm text-gray-600">Projetos Realizados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;