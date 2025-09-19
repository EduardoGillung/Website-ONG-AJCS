import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const contactInfo = [
    { icon: "📞", text: "(11) 99123-1234" },
    { icon: "📧", text: "contato@construindosonhos.org" },
    { icon: "📍", text: "Natal, RN - Brasil" },
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
    <footer className="bg-[#171E37] border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Logo e Descrição */}
          <div className="text-center lg:text-left space-y-6">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="w-16 h-16 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-yellow-400/25 transition-all duration-300 overflow-hidden">
                <img 
                  src={Logo} 
                  alt="Associação Juventude Construindo Sonhos Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-yellow-400 text-lg font-bold">Juventudes</span>
                <span className="text-yellow-400 text-lg font-bold">Construindo</span>
                <span className="text-yellow-400 text-lg font-bold">Sonhos</span>
              </div>
            </Link>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Transformando vidas através de projetos sociais e solidariedade.
            </p>
            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  className="text-yellow-400 hover:text-yellow-300 transition-all duration-300 p-3 rounded-xl hover:bg-yellow-400/10 border border-yellow-400/20 hover:border-yellow-400/40"
                  aria-label={social.ariaLabel}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="text-center lg:text-right space-y-6">
            <h3 className="text-xl font-bold text-yellow-400">Contato</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-end space-x-3 text-white/80 hover:text-yellow-400 transition-colors duration-300">
                  <span className="text-xl">{contact.icon}</span>
                  <span className="text-sm">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="border-t border-yellow-400/20 mt-12 pt-8 text-center">
          <p className="text-yellow-400/60 text-sm mb-4">
            &copy; 2025 Construindo Sonhos. Todos os direitos reservados.
          </p>
          <div className="flex justify-center space-x-6">
            <Link 
              to="/privacy" 
              className="text-yellow-400/60 hover:text-yellow-400 transition-colors duration-300 text-sm"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;