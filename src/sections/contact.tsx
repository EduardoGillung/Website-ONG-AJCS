import { Instagram, Facebook, Mail } from 'lucide-react';

const Contact = () => {
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
    <div className="bg-[#171E37] min-h-screen flex items-center justify-center pt-24">
      <div className="text-center space-y-10">
        {/* Título da seção */}
        <div className="space-y-5">
          <div className="mx-auto px-6 max-w-7xl flex justify-center">
            <h1
              className="bg-[#008C17] text-white text-3xl md:text-4xl font-bold px-16 py-6 rounded-lg shadow-md max-w-lg w-full text-center font-livvic"
              style={{
                boxShadow:
                  "0 4px 15px rgba(0, 140, 23, 0.3), 0 0 20px rgba(0, 140, 23, 0.1)",
              }}
            >
              Contato
            </h1>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Estamos aqui para responder suas dúvidas e compartilhar nossa missão. Conecte-se conosco e faça parte da transformação!
          </p>
        </div>

        {/* Estrutura em 3 pilhas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pilha 1 */}
          <div className="p-6 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/30 rounded-lg hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
            <h3 className="text-yellow-400 font-semibold text-xl mb-3">Endereço</h3>
            <p className="text-white/80">
              Endereço da Feira Mãos de Potengi:
            </p>
            <p className="text-yellow-400 font-bold mt-2" >
              Cidade Alta, Natal-RN,
            </p>
            <p className="text-yellow-400 font-bold" >
              Avenida do Contorno
            </p>
          </div>

          {/* Pilha 2 */}
          <div className="p-6 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/30 rounded-lg hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
            <h3 className="text-yellow-400 font-semibold text-xl mb-3">Redes Sociais</h3>
            <p className="text-white/80">
              Siga-nos nas Redes Sociais:
            </p>
            <p className="text-yellow-400 font-bold mt-2" >
              @Ajcsconstruindosonhos
            </p>
            <p className="text-yellow-400 font-bold mt-2">
              @FeiraMaosDePotengi
            </p>
          </div>

          {/* Pilha 3 */}
          <div className="p-6 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/30 rounded-lg hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
            <h3 className="text-yellow-400 font-semibold text-xl mb-3">Email</h3>
            <p className="text-white/80">
              Enviar mensagem para nós:
            </p>
            <p className="text-yellow-400 font-bold mt-2">
              ajcsconstruindosonhos@org.com.br
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.557865983745!2d-6.281456085199999!3d-5.770000996215999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab001b0b0b0b0b0%3A0x0000000000000000!2sAvenida%20do%20Contorno%2C%20Cidade%20Alta%2C%20Natal%20-%20RN!5e0!3m2!1spt-BR!2sbr!4v1630000000000"
          width="100%"
          height="100%"
          style={{ border: 1 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>

        {/* Redes sociais */}
        <div className="pt-8">
          <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-5">
            Siga-nos nas Redes Sociais
          </h3>
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
