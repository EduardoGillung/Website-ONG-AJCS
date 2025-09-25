import { Instagram, Facebook, Mail, MapPin, Phone, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { Particles } from "../components/ui/particles";

const Contact = () => {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Fale conosco diretamente",
      link: "https://wa.me/5511997776658",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-400 hover:to-green-500",
      action: "Enviar Mensagem"
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram",
      description: "Siga nossas atividades",
      link: "https://instagram.com/ajcs.construindosonhos",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-400 hover:to-purple-500",
      action: "Seguir"
    },
    {
      icon: <Facebook className="w-8 h-8" />,
      title: "Facebook",
      description: "Curta nossa página",
      link: "https://facebook.com/construindosonhos",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-500 hover:to-blue-600",
      action: "Curtir Página"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "Envie-nos um email",
      link: "mailto:ajcsconstruindosonhos@org.com.br",
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-400 hover:to-red-500",
      action: "Enviar Email"
    }
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço da Feira",
      content: "Cidade Alta, Natal-RN\nAvenida do Contorno",
      color: "text-yellow-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      content: "(84) 99999-9999",
      color: "text-green-400"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta\n8h às 17h",
      color: "text-blue-400"
    }
  ];

  return (
    <section className="bg-[#171E37] py-16 md:py-20 lg:py-24 relative">
      <Particles 
        className="absolute inset-0 z-0" 
        quantity={125}
        ease={65}
        color="#D21528"
        size={1.1}
      />
      
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#D21528] to-[#C94300] rounded-full mb-6 shadow-lg">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-livvic">
            Entre em Contato
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-[#D21528] to-[#C94300] rounded-full mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para responder suas dúvidas e compartilhar nossa missão. Conecte-se conosco e faça parte da transformação!
          </p>
        </div>

        {/* Cards de Contato */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group borde 1px rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#D21528]/50"
            >
              <div className="text-center">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${method.color} ${method.hoverColor} rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{method.description}</p>
                <div className="inline-flex items-center gap-2 text-[#D21528] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  <span>{method.action}</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Informações de Contato */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className={`p-2 sm:p-3 bg-white/20 rounded-xl ${info.color} flex-shrink-0`}>
                  {info.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{info.title}</h3>
              </div>
              <p className="text-white/80 whitespace-pre-line text-sm sm:text-base leading-relaxed">{info.content}</p>
            </div>
          ))}
        </div>

        {/* Mapa */}
        <div className="bg-transparent/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl mb-12 md:mb-16">
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Nossa Localização</h3>
            <p className="text-gray-500 text-sm sm:text-base">Feira Mãos de Potengi - Cidade Alta, Natal-RN</p>
          </div>
          
          <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.557865983745!2d-6.281456085199999!3d-5.770000996215999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab001b0b0b0b0b0%3A0x0000000000000000!2sAvenida%20do%20Contorno%2C%20Cidade%20Alta%2C%20Natal%20-%20RN!5e0!3m2!1spt-BR!2sbr!4v1630000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Feira Mãos de Potengi"
            ></iframe>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#D21528] to-[#C94300] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white/10 rounded-full -translate-y-16 sm:-translate-y-32 translate-x-16 sm:translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-yellow-400/10 rounded-full translate-y-12 sm:translate-y-24 -translate-x-12 sm:-translate-x-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 font-livvic">
                Pronto para Fazer a Diferença?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Junte-se à nossa missão de transformar vidas através da educação e solidariedade. 
                Sua participação é fundamental!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="https://wa.me/5511997776658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#D21528] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="mailto:ajcsconstruindosonhos@org.com.br"
                  className="border-2 border-white/30 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                >
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
