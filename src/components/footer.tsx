import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Footer = () => {
  const contactInfo = [
    { icon: "📞", text: "(11) 99777-6658" },
    { icon: "📧", text: "contato@construindosonhos.org" },
    { icon: "📍", text: "São Paulo, SP - Brasil" },
  ];

  const socialLinks = [
    { href: "#", icon: "📱", label: "WhatsApp" },
    { href: "#", icon: "📘", label: "Facebook" },
    { href: "#", icon: "📷", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#171E37] border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Logo e Descrição */}
          <div className="text-center lg:text-left space-y-6">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-xl border-2 border-yellow-400 bg-white flex items-center justify-center shadow-lg group-hover:shadow-yellow-400/25 transition-all duration-300 overflow-hidden">
                <img 
                  src={Logo} 
                  alt="Associação Juventude Construindo Sonhos Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-lg font-bold">Construindo</span>
                <span className="text-yellow-400 text-lg font-bold">Sonhos</span>
              </div>
            </Link>
            <p className="text-yellow-400/80 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Transformando vidas através de projetos sociais e solidariedade.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-yellow-400 hover:text-yellow-300 transition-all duration-300 p-3 rounded-xl hover:bg-yellow-400/10 border border-yellow-400/20 hover:border-yellow-400/40"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links de Navegação */}
          <div className="text-center space-y-6">
            <h3 className="text-xl font-bold text-yellow-400">Navegação</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/" className="text-white/80 hover:text-yellow-400 transition-colors duration-300 py-2">
                Quem somos
              </Link>
              <Link to="/projects" className="text-white/80 hover:text-yellow-400 transition-colors duration-300 py-2">
                Projetos sociais
              </Link>
              <Link to="/partners" className="text-white/80 hover:text-yellow-400 transition-colors duration-300 py-2">
                Colaboradores
              </Link>
              <Link to="/contact" className="text-white/80 hover:text-yellow-400 transition-colors duration-300 py-2">
                Contato
              </Link>
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
            <div className="pt-4">
              <Link
                to="/donate"
                className="inline-block bg-[#FFE100] hover:bg-[#FFD700] text-[#4A430B] font-bold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#FFE100]/40 transform hover:-translate-y-1"
                style={{
                  boxShadow: '0 4px 15px rgba(255, 225, 0, 0.3), 0 0 20px rgba(255, 225, 0, 0.1)'
                }}
              >
                Quero Doar
              </Link>
            </div>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="border-t border-yellow-400/20 mt-12 pt-8 text-center">
          <p className="text-yellow-400/60 text-sm">
            &copy; 2025 Construindo Sonhos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
