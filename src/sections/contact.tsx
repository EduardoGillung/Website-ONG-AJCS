import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-white group-hover:text-yellow-200" />,
      title: "Telefone",
      info: "(11) 99777-6658",
      link: "tel:+5511997776658",
      ariaLabel: "Ligar para (11) 99777-6658",
    },
    {
      icon: <Mail className="w-6 h-6 text-white group-hover:text-yellow-200" />,
      title: "Email",
      info: "contato@construindosonhos.org",
      link: "mailto:contato@construindosonhos.org",
      ariaLabel: "Enviar email para contato@construindosonhos.org",
    },
    {
      icon:  <MapPin className="w-6 h-6 text-white group-hover:text-yellow-200" />,
      title: "Endereço",
      info: "Rua Exemplo, 123, São Paulo, SP - Brasil",
      link: "https://maps.google.com/?q=Rua+Exemplo+123,São+Paulo,SP,Brasil",
      ariaLabel: "Ver localização no Google Maps",
    },
  ];

  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6 text-white group-hover:text-yellow-200" />,
      label: "WhatsApp",
      link: "https://wa.me/5511997776658",
      ariaLabel: "Enviar mensagem no WhatsApp",
    },
    {
      icon: <Facebook className="w-6 h-6 text-white group-hover:text-yellow-200" />,
      label: "Facebook",
      link: "https://facebook.com/construindosonhos",
      ariaLabel: "Visitar nossa página no Facebook",
    },
    {
      icon: <Instagram className="w-6 h-6 text-white group-hover:text-yellow-200" />,
      label: "Instagram",
      link: "https://instagram.com/construindosonhos",
      ariaLabel: "Visitar nosso perfil no Instagram",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#000928] via-[#1a1f3a] to-[#000928] min-h-screen flex items-center justify-center pt-24">
        <div className="text-center space-y-10">
          {/* Título da seção */}
          <div className="space-y-5">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-livvic">
              <span className="text-yellow-400">Entre em</span> Contato
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Estamos aqui para responder suas dúvidas e compartilhar nossa missão. Conecte-se conosco e faça parte da transformação!
            </p>
          </div>

          {/* Informações de contato */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* Redes sociais */}
          <div className="pt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-5">Siga-nos nas Redes Sociais</h3>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="group w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-yellow-600 to-yellow-600 hover:from-yellow-500 hover:to-yellow-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/30"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

  );
};

export default Contact;