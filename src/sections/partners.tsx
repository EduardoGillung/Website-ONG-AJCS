
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
          <div className="mx-auto px-6 max-w-7xl flex justify-center">
            <h1
              className="bg-[#009DFF] text-white text-3xl md:text-4xl font-bold px-16 py-6 rounded-lg shadow-md max-w-lg w-full text-center font-livvic"
              style={{ boxShadow: "0 4px 15px rgba(34, 167, 240, 0.3), 0 0 20px rgba(34, 167, 240, 0.1)" }}
            >
              Colaboradores
            </h1>
          </div>

        </header>

        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-xl p-3 sm:p-5">
            <div className="relative rounded-xl border-2 border-dotted border-gray-300 p-6 sm:p-10">
              {/* Título APOIO */}
              <div className="flex items-center justify-center gap-4">
              <span className="hidden sm:block h-px flex-1 bg-gray-300"></span>
              <h2 className="text-[#171E37] text-2xl sm:text-3xl font-extrabold text-center">APOIO</h2>
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
              <h2 className="text-[#171E37] text-2xl sm:text-3xl font-extrabold text-center">PARCERIAS</h2>
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
        </div>
        
      </section>
    </>
  );
};

export default Partners;