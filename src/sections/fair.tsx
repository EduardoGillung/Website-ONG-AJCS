import LogoFeira from "../assets/logo-feira.png";
import FeiraImage from "../assets/feira1.jpg";

// Importando as imagens dos cards
import FeiraEvento from "../assets/feira-evento.jpg";
import FeiraAtracao from "../assets/feira-atracao.jpg";
import FeiraGastronomia from "../assets/feira-gastronomia.jpg";
import FeiraArtesanato from "../assets/feira-artesanato.jpg";

const Fair = () => {
  return (
    <section className="bg-white"

>
      <div className="mx-auto px-6 max-w-7xl flex items-center justify-center gap-6 sm:gap-8 md:gap-10"
      >
        <img
          src={LogoFeira}
          alt="logo-feira"
          className="h-36 w-36 sm:h-44 sm:w-44 md:h-48 md:w-48 object-contain"
        />

        <div className="flex">
        <div className="text-[#222D54] text-3xl md:text-4xl font-bold text-center font-livvic " 
        >
              Feira Mãos de Potengi
                <div className="mt-4 w-[120%] h-2 bg-[#D21528] rounded-full mx-auto"
                 style={{boxShadow: "0 8px 15px rgba(210, 21, 40, 0.3), 0 0 10px rgba(210, 21, 40, 0.1)"}}>
                </div>
              </div>
        </div>
      </div>

      {/* Descrição da Feira */}
      <div className="mx-auto px-6 max-w-5xl mt-16">
        <p className="text-gray-600 font-medium text-center text-base md:text-lg leading-relaxed">
          Criada pela Associação de Juventudes Construindo Sonhos (AJCS), a Feira
          é mais do que um evento é um movimento de valorização das identidades
          locais, geração de renda e fortalecimento das redes criativas que
          transformam o dia a dia dos bairros e territórios.
        </p>
      </div>

      {/* Imagem da Feira */}
      <div className="mx-auto px-6 max-w-7xl mt-8 mb-8">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={FeiraImage}
            alt="Feira Mãos de Potengi - Evento da comunidade"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Cards das Principais Atrações */}
      <div className="mx-auto px-6 max-w-7xl mt-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Evento */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="h-40 sm:h-48 md:h-56 lg:h-60 overflow-hidden">
              <img
                src={FeiraEvento}
                alt="Evento"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-[#D21528] mb-3 font-livvic">
                Evento
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Uma celebração anual que reúne a comunidade em torno da cultura
                local, com apresentações artísticas, palestras e atividades
                interativas.
              </p>
            </div>
          </div>

          {/* Card 2 - Atrações Culturais */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="h-40 sm:h-48 md:h-56 lg:h-60 overflow-hidden">
              <img
                src={FeiraAtracao}
                alt="Atrações Culturais"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-[#C94300] mb-3 font-livvic">
                Atrações Culturais
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Shows de música regional, apresentações de dança, teatro
                comunitário e exposições de arte que valorizam nossa identidade
                cultural.
              </p>
            </div>
          </div>

          {/* Card 3 - Gastronomia */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="h-40 sm:h-48 md:h-56 lg:h-60 overflow-hidden">
              <img
                src={FeiraGastronomia}
                alt="Gastronomia"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-[#006F12] mb-3 font-livvic">
                Gastronomia
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sabores autênticos da região com pratos tradicionais, doces
                caseiros e bebidas locais preparados por famílias da comunidade.
              </p>
            </div>
          </div>

          {/* Card 4 - Artesanato Local */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="h-40 sm:h-48 md:h-56 lg:h-60 overflow-hidden">
              <img
                src={FeiraArtesanato}
                alt="Artesanato Local"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-[#009DFF] mb-3 font-livvic">
                Artesanato Local
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Peças únicas criadas por artesãos locais: cerâmicas, bordados,
                esculturas e objetos decorativos que contam histórias da nossa
                região.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fair;
