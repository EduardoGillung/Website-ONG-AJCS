import LogoFeira from "../assets/logo-feira.png";
import FeiraImage from "../assets/feira1.jpg";

// Importando as imagens dos cards
import FeiraEvento from "../assets/feira-evento.jpg";
import FeiraAtracao from "../assets/feira-atracao.jpg";
import FeiraGastronomia from "../assets/feira-gastronomia.jpg";
import FeiraArtesanato from "../assets/feira-artesanato.jpg";

const Fair = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Logo e Texto */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-6">
            <img
              src={LogoFeira}
              alt="logo-feira"
              className="h-48 w-48 md:h-48 md:w-48 object-contain transition-transform duration-500 hover:scale-105"
            />
            <h1 className="text-[#222D54] text-4xl md:text-6xl font-extrabold font-livvic leading-tight">
              Feira <br />
              <span className="text-[#D21528]">Mãos de Potengi</span>
            </h1>
          </div>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg font-medium">
            Criada pela{" "}
            <span className="font-semibold text-[#222D54]">
              Associação de Juventudes Construindo Sonhos (AJCS)
            </span>
            , a Feira é um movimento de valorização das identidades locais,
            geração de renda e fortalecimento das redes criativas que transformam
            o dia a dia da comunidade.
          </p>
        </div>

        {/* Imagem Hero */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={FeiraImage}
            alt="Feira Mãos de Potengi - Evento da comunidade"
            className="w-full h-80 md:h-[32rem] object-cover transition-transform duration-1000 ease-out hover:scale-110"
          />
        </div>
      </div>

      {/* Cards das Principais Atrações */}
      <div className="mx-auto px-6 max-w-7xl mt-24 mb-20">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#222D54] font-livvic mb-14">
          Principais Atrações
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Evento",
              desc: "Uma celebração anual que reúne a comunidade em torno da cultura local, com apresentações artísticas, palestras e atividades interativas.",
              img: FeiraEvento,
              titleColor: "text-red-600",
            },
            {
              title: "Atrações Culturais",
              desc: "Shows de música regional, apresentações de dança, teatro comunitário e exposições de arte que valorizam nossa identidade cultural.",
              img: FeiraAtracao,
              titleColor: "text-orange-500",
            },
            {
              title: "Gastronomia",
              desc: "Sabores autênticos da região com pratos tradicionais, doces caseiros e bebidas locais preparados por famílias da comunidade.",
              img: FeiraGastronomia,
              titleColor: "text-green-600",
            },
            {
              title: "Artesanato Local",
              desc: "Peças únicas criadas por artesãos locais: cerâmicas, bordados, esculturas e objetos decorativos que contam histórias da nossa região.",
              img: FeiraArtesanato,
              titleColor: "text-blue-600",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl border-2 border-gray-200 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
            >
              {/* Imagem */}
              <div className="relative h-64 md:h-72 overflow-hidden rounded-t-3xl">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-8 text-center">
                <h3 className={`text-2xl font-bold mb-4 font-livvic ${card.titleColor}`}>
                  {card.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fair;