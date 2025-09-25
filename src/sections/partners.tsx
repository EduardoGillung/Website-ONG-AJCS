
import logoNatal from "../assets/logo-natal.png";
import logoSebrae from "../assets/logo-sebrae.png";
import logoGolden from "../assets/logo-golden.png";
import logoSesc from "../assets/logo-sesc.png";
import logotvtropical from "../assets/logo-tvtropical.png";
import logouniaopet from "../assets/logo-uniaopet.webp";
import logointertv from "../assets/logo-intertv.png";
import logomix from "../assets/logo-mix.png";
import logocbn from "../assets/logo-cbn.png";
import logogibao from "../assets/logo-gibao.jpeg";
import logokave from "../assets/logo-kave.png";
import logoreciclagem from "../assets/logo-reciclagem.jpeg";

const Partners = () => {
  return (
    <>
      <section className="bg-[#FDD551] pb-16 ">
        {/* Wave divider on top */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L40,133.3C80,171,160,245,240,240C320,235,400,149,480,138.7C560,128,640,192,720,208C800,224,880,192,960,197.3C1040,203,1120,245,1200,240C1280,235,1360,181,1400,154.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>

        {/* Colored title */}
        <header className="bg-transparent mb-10">
          <div className="text-[#222D54] text-3xl md:text-4xl font-bold text-center font-livvic ">
              Colaboradores
                <div className="mt-4 w-1/2 h-2 bg-[#009DFF] rounded-full mx-auto"
                 style={{ boxShadow: "0 8px 15px rgba(0, 128, 255, 0.3), 0 0 10px rgba(0, 128, 255, 0.1)" }}>
                </div>
              </div>

        </header>

        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-xl p-3 sm:p-5">
            <div className="relative rounded-xl border-2 border-dotted border-gray-300 p-6 sm:p-10">
              {/* Título APOIO */}
              <div className="flex items-center justify-center gap-4">
              <span className="hidden sm:block h-px flex-1 bg-gray-300"></span>
              <h2 className="text-[#222D54] text-2xl sm:text-3xl font-bold text-center font-livvic">APOIO</h2>
              <span className="hidden sm:block h-px flex-1 bg-gray-300"></span>
              </div>

              {/* Logos de apoio */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
              <img src={logoNatal} alt="Natal Prefeitura" className="h-14 w-auto mx-auto object-contain" />
              <img src={logoSebrae} alt="SEBRAE" className="h-14 w-auto mx-auto object-contain" />
              <img src={logoGolden} alt="Golden Tulip" className="h-14 w-auto mx-auto object-contain" />
              <img src={logoSesc} alt="Sesc" className="h-14 w-auto mx-auto object-contain" />
              </div>

              {/* Separador */}
              <div className="mt-12 flex items-center justify-center gap-4">
              <span className="hidden sm:block h-px flex-1 bg-gray-300"></span>
              <h2 className="text-[#222D54] text-2xl sm:text-3xl font-extrabold text-center ">PARCERIAS</h2>
              <span className="hidden sm:block h-px flex-1 bg-gray-300"></span>
              </div>

              {/* Placeholder para futuras logos de parcerias */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
              <img src={logotvtropical} alt="Tv Tropical" className="h-14 w-auto mx-auto object-contain" />
              <img src={logouniaopet} alt="União Pet" className="h-14 w-auto mx-auto object-contain" />
              <img src={logointertv} alt="Inter TV" className="h-14 w-auto mx-auto object-contain" />
              <img src={logomix} alt="Mix 103.9" className="h-14 w-auto mx-auto object-contain" />
              <img src={logocbn} alt="CBN" className="h-14 w-auto mx-auto object-contain" />
              <img src={logogibao} alt="Gibao" className="h-14 w-auto mx-auto object-contain" />
              <img src={logokave} alt="Kave" className="h-14 w-auto mx-auto object-contain rounded-xl" />
              <img src={logoreciclagem} alt="Natal Reciclagem" className="h-14 w-auto mx-auto object-contain" />
              </div>
            </div>
          </div>
          {/* Seção Diretoria */}
          <div className="max-w-6xl mx-auto text-center mt-16 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#171E37] mb-6 font-livvic">
              Diretoria
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D21528] to-[#C94300] rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              Conheça as pessoas que lideram nossa missão e trabalham diariamente para transformar vidas através da educação e solidariedade.
            </p>

            {/* Cards da Diretoria com Animação Automática */}
            <div className="relative overflow-hidden">
              <div className="flex gap-6 animate-scroll">
                {/* Card 1 - Presidente */}
                <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 snap-center focus-within:ring-2 focus-within:ring-[#D21528]/50" tabIndex={0}>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#D21528] to-[#C94300] rounded-full mx-auto mb-4 flex items-center justify-center" role="img" aria-label="Avatar do Presidente">
                      <span className="text-white font-bold text-2xl" aria-hidden="true">J</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#171E37] mb-2">João Silva</h3>
                    <p className="text-[#D21528] font-semibold mb-3">Presidente</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Lidera a organização há 5 anos, com vasta experiência em projetos sociais e desenvolvimento comunitário.
                    </p>
                  </div>
                </div>

                {/* Card 2 - Vice-Presidente */}
                <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 snap-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#C94300] to-[#D97706] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">M</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#171E37] mb-2">Maria Santos</h3>
                    <p className="text-[#C94300] font-semibold mb-3">Vice-Presidente</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Especialista em educação e coordenadora de projetos voltados para o desenvolvimento juvenil.
                    </p>
                  </div>
                </div>

                {/* Card 3 - Tesoureiro */}
                <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 snap-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#222D54] to-[#4A5568] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">C</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#171E37] mb-2">Carlos Oliveira</h3>
                    <p className="text-[#222D54] font-semibold mb-3">Tesoureiro</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Responsável pela gestão financeira e transparência dos recursos da organização.
                    </p>
                  </div>
                </div>

                {/* Card 4 - Secretário */}
                <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">A</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#171E37] mb-2">Ana Costa</h3>
                    <p className="text-[#059669] font-semibold mb-3">Secretária</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Coordena a comunicação e documentação, mantendo a organização administrativa da AJCS.
                    </p>
                  </div>
                </div>

                {/* Duplicação dos cards para loop infinito */}
                {/* Card 1 - Presidente (Duplicado) */}
                <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#D21528] to-[#C94300] rounded-full mx-auto mb-4 flex items-center justify-center" role="img" aria-label="Avatar do Presidente">
                      <span className="text-white font-bold text-2xl" aria-hidden="true">J</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#171E37] mb-2">João Silva</h3>
                    <p className="text-[#D21528] font-semibold mb-3">Presidente</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Lidera a organização há 5 anos, com vasta experiência em projetos sociais e desenvolvimento comunitário.
                    </p>
                  </div>
                </div>

                {/* Card 2 - Vice-Presidente (Duplicado) */}
                <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#C94300] to-[#D97706] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">M</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#171E37] mb-2">Maria Santos</h3>
                    <p className="text-[#C94300] font-semibold mb-3">Vice-Presidente</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Especialista em educação e coordenadora de projetos voltados para o desenvolvimento juvenil.
                    </p>
                  </div>
                </div>

                {/* Card 3 - Tesoureiro (Duplicado) */}
                <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#222D54] to-[#4A5568] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">C</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#171E37] mb-2">Carlos Oliveira</h3>
                    <p className="text-[#222D54] font-semibold mb-3">Tesoureiro</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Responsável pela gestão financeira e transparência dos recursos da organização.
                    </p>
                  </div>
                </div>

                {/* Card 4 - Secretário (Duplicado) */}
                <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">A</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#171E37] mb-2">Ana Costa</h3>
                    <p className="text-[#059669] font-semibold mb-3">Secretária</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Coordena a comunicação e documentação, mantendo a organização administrativa da AJCS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção Junte-se a Nós - Design Moderno */}
          <div className="max-w-4xl mx-auto text-center mt-16">
            <div className="bg-gradient-to-r from-[#D21528] to-[#C94300] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/10 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-livvic">
                  Junte-se a Nós
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Seja parte da transformação! Contribua com seu talento, tempo ou recursos
                  e ajude a construir um futuro mais justo e solidário.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group bg-white text-[#D21528] font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Navegar para seção de contato"
                  >
                    <span className="flex items-center gap-2">
                      Entrar em Contato
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                  <button 
                    className="group border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Saiba como se tornar voluntário"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Seja Voluntário
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Partners;