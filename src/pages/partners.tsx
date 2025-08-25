import React from 'react';

const Partners = () => {
  const partners = [
    {
      name: "Empresa ABC",
      logo: "🏢",
      description: "Parceiro estratégico em projetos de educação e capacitação profissional.",
      category: "Educação",
      impact: "200+ jovens beneficiados"
    },
    {
      name: "Fundação XYZ",
      logo: "🏛️",
      description: "Apoio financeiro e logístico para projetos de moradia e infraestrutura.",
      category: "Infraestrutura",
      impact: "50 famílias atendidas"
    },
    {
      name: "Hospital Municipal",
      logo: "🏥",
      description: "Parceria em projetos de saúde comunitária e prevenção.",
      category: "Saúde",
      impact: "1000+ atendimentos"
    },
    {
      name: "Supermercado Local",
      logo: "🛒",
      description: "Doação de alimentos e produtos para famílias necessitadas.",
      category: "Alimentação",
      impact: "500+ cestas básicas"
    },
    {
      name: "Escola Pública",
      logo: "🏫",
      description: "Projetos educacionais e de inclusão digital para estudantes.",
      category: "Educação",
      impact: "300+ estudantes"
    },
    {
      name: "ONG Amiga",
      logo: "🤝",
      description: "Colaboração em projetos sociais e troca de experiências.",
      category: "Social",
      impact: "10+ projetos em conjunto"
    }
  ];

  const categories = ["Todos", "Educação", "Saúde", "Infraestrutura", "Alimentação", "Social"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-white">
              <span className="text-yellow-400">Nossos</span> Parceiros
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
            <p className="text-xl text-yellow-400/80 max-w-3xl mx-auto">
              Conheça as empresas e organizações que fazem parte da nossa rede de solidariedade. 
              Juntos, construímos um futuro melhor para todos.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl">
            <div className="text-4xl font-bold text-yellow-400 mb-2">20+</div>
            <div className="text-white/80">Parceiros Ativos</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl">
            <div className="text-4xl font-bold text-yellow-400 mb-2">5</div>
            <div className="text-white/80">Categorias</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl">
            <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-white/80">Projetos Realizados</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl">
            <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
            <div className="text-white/80">Vidas Impactadas</div>
          </div>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="space-y-12">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-xl transition-all duration-300 font-semibold"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10"
              >
                <div className="text-center space-y-6">
                  {/* Logo */}
                  <div className="text-6xl mb-4">{partner.logo}</div>
                  
                  {/* Name */}
                  <h3 className="text-2xl font-bold text-yellow-400">{partner.name}</h3>
                  
                  {/* Category */}
                  <div className="inline-block px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold">
                    {partner.category}
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/80 leading-relaxed">{partner.description}</p>
                  
                  {/* Impact */}
                  <div className="bg-yellow-400/20 rounded-xl p-4">
                    <div className="text-yellow-400 font-semibold">{partner.impact}</div>
                  </div>
                  
                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                    Conhecer Mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center space-y-8 p-12 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-3xl">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-yellow-400">Quer ser nosso parceiro?</span>
          </h2>
          <p className="text-xl text-yellow-400/80 max-w-2xl mx-auto">
            Junte-se à nossa rede de solidariedade e ajude-nos a transformar mais vidas. 
            Entre em contato e descubra como podemos trabalhar juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/25 transform hover:-translate-y-1">
              Seja um Parceiro
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4 rounded-xl transition-all duration-300">
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
