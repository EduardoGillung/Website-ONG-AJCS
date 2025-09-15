import LogoFeira from "../assets/logo-feira.png";

const Fair = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto px-6 max-w-7xl flex items-center justify-center gap-6 sm:gap-8 md:gap-10">
        {/* Logo à esquerda, fora do componente vermelho */}
        <img
          src={LogoFeira}
          alt="logo-feira"
          className="h-36 w-36 sm:h-44 sm:w-44 md:h-48 md:w-48 object-contain"
        />

        {/* Componente vermelho com o título centralizado */}
        <div className="flex justify-center">
        <div
            className="bg-[#D21528] text-white rounded-lg shadow-md px-8 sm:px-10 md:px-12 py-6"
          style={{
            boxShadow: "0 4px 15px rgba(210, 21, 40, 0.3), 0 0 20px rgba(210, 21, 40, 0.1)",
          }}
        >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight font-livvic text-center">
              Feira Mãos de Potengi
          </h2>
          </div>
        </div>
      </div>
      
      {/* Descrição da Feira */}
      <div className="mx-auto px-6 max-w-7xl mt-16">
        <p className="text-#171E37 text-center text-base md:text-lg leading-relaxed">
          Criada pela Associação de Juventudes Construindo Sonhos (AJCS), a Feira é mais do que um evento é um movimento de valorização das identidades locais, geração de renda e fortalecimento das redes criativas que transformam o dia a dia dos bairros e territórios.
        </p>
      </div>

      {/* Cards das Principais Atrações */}
      <div className="mx-auto px-6 max-w-7xl mt-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 - Evento */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D21528]/5 to-[#D21528]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6">
              <div className="w-12 h-12 bg-[#D21528] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#171E37] mb-3 font-livvic">Evento</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Uma celebração anual que reúne a comunidade em torno da cultura local, com apresentações artísticas, palestras e atividades interativas.
              </p>
            </div>
          </div>

          {/* Card 2 - Atrações Culturais */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D21528]/5 to-[#D21528]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6">
              <div className="w-12 h-12 bg-[#D21528] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 9h6m-6 4h6m-6 4h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#171E37] mb-3 font-livvic">Atrações Culturais</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Shows de música regional, apresentações de dança, teatro comunitário e exposições de arte que valorizam nossa identidade cultural.
              </p>
            </div>
          </div>

          {/* Card 3 - Gastronomia */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D21528]/5 to-[#D21528]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6">
              <div className="w-12 h-12 bg-[#D21528] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#171E37] mb-3 font-livvic">Gastronomia</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sabores autênticos da região com pratos tradicionais, doces caseiros e bebidas locais preparados por famílias da comunidade.
              </p>
            </div>
          </div>

          {/* Card 4 - Artesanato Local */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D21528]/5 to-[#D21528]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6">
              <div className="w-12 h-12 bg-[#D21528] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#171E37] mb-3 font-livvic">Artesanato Local</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Peças únicas criadas por artesãos locais: cerâmicas, bordados, esculturas e objetos decorativos que contam histórias da nossa região.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Fair;
