import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: "📞",
      title: "Telefone",
      info: "(11) 99777-6658",
      link: "tel:+5511997776658"
    },
    {
      icon: "📧",
      title: "Email",
      info: "contato@construindosonhos.org",
      link: "mailto:contato@construindosonhos.org"
    },
    {
      icon: "📍",
      title: "Endereço",
      info: "São Paulo, SP - Brasil",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: "📱", label: "WhatsApp", link: "#" },
    { icon: "📘", label: "Facebook", link: "#" },
    { icon: "📷", label: "Instagram", link: "#" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-white">
              <span className="text-yellow-400">Entre em</span> Contato
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
            <p className="text-xl text-yellow-400/80 max-w-2xl mx-auto">
              Quer fazer parte da nossa missão? Entre em contato conosco e descubra como você pode ajudar a transformar vidas.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Informações de contato */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-yellow-400">Informações de Contato</h2>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className="flex items-center space-x-6 p-6 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl hover:border-yellow-400/40 transition-all duration-300 group"
                >
                  <div className="text-4xl">{contact.icon}</div>
                  <div>
                    <div className="text-yellow-400 font-semibold text-lg">{contact.title}</div>
                    <div className="text-white/80">{contact.info}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Redes sociais */}
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Redes Sociais</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
                    aria-label={social.label}
                  >
                    <span className="text-2xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-yellow-400">Envie uma Mensagem</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full px-6 py-4 bg-white/10 border border-yellow-400/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 transition-colors text-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 bg-white/10 border border-yellow-400/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 transition-colors text-lg"
                />
              </div>
              
              <input
                type="text"
                placeholder="Assunto"
                className="w-full px-6 py-4 bg-white/10 border border-yellow-400/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 transition-colors text-lg"
              />
              
              <textarea
                placeholder="Sua mensagem..."
                rows={8}
                className="w-full px-6 py-4 bg-white/10 border border-yellow-400/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 transition-colors resize-none text-lg"
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-5 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/25 transform hover:-translate-y-1 text-xl"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
