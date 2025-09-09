const Partners = () => {
  const partners = [
    {
      name: "Itaú",
      logo: "🏦",
      role: "Premiação e apoio financeiro para projetos de impacto social",
      highlight: "Vencedores do Prêmio Itaú Social 2024",
    },
    {
      name: "Empresa ABC",
      logo: "🏢",
      role: "Apoio em projetos de educação e capacitação profissional",
      highlight: "200+ jovens beneficiados",
    },
    {
      name: "Fundação XYZ",
      logo: "🏛️",
      role: "Financiamento para projetos de moradia e infraestrutura",
      highlight: "50 famílias atendidas",
    },
    {
      name: "Hospital Municipal",
      logo: "🏥",
      role: "Parceria em iniciativas de saúde comunitária",
      highlight: "1000+ atendimentos realizados",
    },
    {
      name: "Supermercado Local",
      logo: "🛒",
      role: "Doação de alimentos para famílias necessitadas",
      highlight: "500+ cestas básicas distribuídas",
    },
    {
      name: "Escola Pública",
      logo: "🏫",
      role: "Colaboração em projetos de inclusão digital",
      highlight: "300+ estudantes impactados",
    },
  ];

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      info: "parcerias@construindosonhos.org",
      link: "mailto:parcerias@construindosonhos.org",
      ariaLabel: "Enviar email para parcerias@construindosonhos.org",
    },
    {
      icon: "📱",
      title: "WhatsApp",
      info: "(11) 99777-6658",
      link: "https://wa.me/5511997776658",
      ariaLabel: "Enviar mensagem no WhatsApp para parcerias",
    },
  ];

  const impactStats = [
    { number: "20+", label: "Parceiros Ativos", icon: "🤝" },
    { number: "50+", label: "Projetos Realizados", icon: "🎯" },
    { number: "1000+", label: "Vidas Impactadas", icon: "🌟" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#171E37] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Título da seção */}
          <div className="space-y-5">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="text-yellow-400">Nossos</span> Parceiros
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-yellow-400/80 max-w-3xl mx-auto">
              Conheça as organizações que caminham conosco para transformar vidas e construir um futuro melhor.
            </p>
          </div>

          {/* Estatísticas de Impacto */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="p-5 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">{stat.number}</div>
                <div className="text-white/90 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Parceiros em Destaque */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">Parceiros em Destaque</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`p-5 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border ${
                    partner.name === "Itaú" ? "border-yellow-400/50" : "border-yellow-400/20"
                  } rounded-lg hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300`}
                >
                  <div className="text-center space-y-3">
                    <div className="text-4xl sm:text-5xl">{partner.logo}</div>
                    <h4 className="text-lg sm:text-xl font-semibold text-yellow-400">{partner.name}</h4>
                    <p className="text-white/90 text-sm sm:text-base">{partner.role}</p>
                    <div className="text-yellow-400/80 text-sm font-semibold">{partner.highlight}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contato para Parcerias */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">Entre em Contato</h3>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto">
              Interessado em se tornar um parceiro? Fale com nossa equipe de parcerias pelo email ou WhatsApp abaixo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith("http") ? "_blank" : "_self"}
                  rel={contact.link.startsWith("http") ? "noopener noreferrer" : ""}
                  aria-label={contact.ariaLabel}
                  className="flex items-center space-x-4 p-5 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/30 rounded-lg hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 group"
                >
                  <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-yellow-400 font-semibold text-lg">{contact.title}</div>
                    <div className="text-white/90 text-sm sm:text-base">{contact.info}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA para Parcerias */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">Quer Ser Nosso Parceiro?</h3>
            <a
              href="mailto:parcerias@construindosonhos.org"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-400/25"
              aria-label="Enviar email para se tornar um parceiro"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
