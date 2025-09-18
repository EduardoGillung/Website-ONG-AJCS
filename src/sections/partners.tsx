
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
      <section className="bg-[#FFD037] pb-16 ">
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
          <div className="max-w-3xl mx-auto text-center mt-8">
        <h2 className="text-3xl font-bold text-[#171E37] mb-4">
          Junte-se a Nós
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Seja parte da transformação! Contribua com seu talento, tempo ou recursos
          e ajude a construir um futuro mais justo e solidário.  
          <br />
          <span className="font-semibold text-gray-800">
            Sua colaboração faz a diferença!
          </span>
        </p>
      </div>
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">    
        <button
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full sm:w-auto bg-yellow-100 hover:bg-yellow-500 border border-[#171E37] text-black font-bold px-4 sm:px-6 md:px-8 py-3 sm:py-4
          rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base"
          style={{ boxShadow: "0 4px 15px rgba(255, 193, 7, 0.15), 0 0 20px rgba(255, 215, 0, 0.25)"}}
          aria-label="Conheça nossa história"
        >
          Entrar em Contato
        </button>
      </div>
        </div>
        
      </section>
    </>
  );
};

export default Partners;