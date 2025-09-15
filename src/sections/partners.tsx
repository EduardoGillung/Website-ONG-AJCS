

const Partners = () => {
  const partners = [
    { name: "Itaú", logo: "🏦", role: "Premiação e apoio financeiro para projetos de impacto social", highlight: "Vencedores do Prêmio Itaú Social 2024" },
    { name: "Empresa ABC", logo: "🏢", role: "Apoio em projetos de educação e capacitação profissional", highlight: "200+ jovens beneficiados" },
    { name: "Fundação XYZ", logo: "🏛️", role: "Financiamento para projetos de moradia e infraestrutura", highlight: "50 famílias atendidas" },
    { name: "Hospital Municipal", logo: "🏥", role: "Parceria em iniciativas de saúde comunitária", highlight: "1000+ atendimentos realizados" },
    { name: "Supermercado Local", logo: "🛒", role: "Doação de alimentos para famílias necessitadas", highlight: "500+ cestas básicas distribuídas" },
    { name: "Escola Pública", logo: "🏫", role: "Colaboração em projetos de inclusão digital", highlight: "300+ estudantes impactados" },
  ];

  

  const impactStats = [
    { number: "20+", label: "Parceiros Ativos", icon: "🤝" },
    { number: "50+", label: "Projetos Realizados", icon: "🎯" },
    { number: "1000+", label: "Vidas Impactadas", icon: "🌟" },
  ];

  return (
    <>
      <section className="min-h-screen bg-[#171E37] pb-24">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,96L40,133.3C80,171,160,245,240,240C320,235,400,149,480,138.7C560,128,640,192,720,208C800,224,880,192,960,197.3C1040,203,1120,245,1200,240C1280,235,1360,181,1400,154.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
      </svg>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Standardized Title Section */}
        <header className="bg-transparent mb-12">
          <div className="mx-auto px-6 max-w-7xl flex justify-center">
            <h1 className="bg-[#009DFF] text-white text-3xl md:text-4xl font-bold px-16 py-6 rounded-lg shadow-md max-w-lg w-full text-center font-livvic" 
              style={{ boxShadow: "0 4px 15px rgba(34, 167, 240, 0.3), 0 0 20px rgba(34, 167, 240, 0.1)" }}>
              Colaboradores
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-center mt-12">
            Conheça as organizações que caminham conosco para transformar vidas e construir um futuro melhor.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mt-5"></div>
        </header>

        {/* Featured Partners */}
        <section className="space-y-6 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 text-center">Parceiros em Destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {partners.map((partner, index) => (
              <article
                key={index}
                className={`p-5 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border ${partner.name === "Itaú" ? "border-yellow-400/50" : "border-yellow-400/20"} rounded-lg hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300`}
              >
                <div className="text-center space-y-3">
                  <div className="text-4xl sm:text-5xl">{partner.logo}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">{partner.name}</h3>
                  <p className="text-white/90 text-sm sm:text-base">{partner.role}</p>
                  <div className="text-yellow-400/80 text-sm font-semibold">{partner.highlight}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12 text-center">
          {impactStats.map((stat, index) => (
            <article key={index}>
              <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">
                {stat.number}
              </div>
              <div className="text-white/90 text-sm sm:text-base">{stat.label}</div>
            </article>
          ))}
        </section>
      </div>
    </section>
    </>
  );
};

export default Partners;