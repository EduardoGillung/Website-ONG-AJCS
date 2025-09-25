import { Play, Calendar, Users, Tv, Newspaper } from 'lucide-react';

const Midia = () => {
  const mediaItems = [
    {
      id: 1,
      title: "Entrevista na TV",
      description: "Nossa participação em programas de televisão locais, compartilhando nossa missão e os impactos positivos na comunidade.",
      icon: <Tv className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-400 hover:to-red-500",
      category: "Televisão"
    },
    {
      id: 2,
      title: "Cobertura Jornalística",
      description: "Reportagens e matérias especiais que destacam o trabalho da AJCS e a importância da Feira Mãos de Potengi.",
      icon: <Newspaper className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-400 hover:to-blue-500",
      category: "Jornalismo"
    },
    {
      id: 3,
      title: "Eventos e Apresentações",
      description: "Registros dos nossos eventos, apresentações culturais e momentos especiais que marcaram nossa trajetória.",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-400 hover:to-green-500",
      category: "Eventos"
    },
    {
      id: 4,
      title: "Depoimentos da Comunidade",
      description: "Histórias reais de transformação contadas por quem faz parte da nossa comunidade e vivencia nossos projetos.",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-400 hover:to-purple-500",
      category: "Depoimentos"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto px-6 max-w-7xl">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#D21528] to-[#C94300] rounded-full mb-6 shadow-lg">
            <Play className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#222D54] mb-6 font-livvic">
            Nossa Mídia
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-[#D21528] to-[#C94300] rounded-full mx-auto mb-8"
               style={{boxShadow: "0 8px 15px rgba(210, 21, 40, 0.3), 0 0 10px rgba(210, 21, 40, 0.1)"}}>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Acompanhe nossa trajetória através de entrevistas, reportagens e momentos especiais 
            que mostram o impacto positivo da AJCS e da Feira Mãos de Potengi na comunidade.
          </p>
        </div>

        {/* Grid de Vídeos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mediaItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
            >
              {/* Header do Card */}
              <div className={`bg-gradient-to-r ${item.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-white/20 rounded-2xl ${item.hoverColor} transition-all duration-300`}>
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 font-livvic">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Área do Vídeo */}
              <div className="p-6">
                <div className="relative bg-gray-100 rounded-2xl h-48 mb-6 overflow-hidden group">
                  {/* Placeholder para o vídeo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-[#D21528] ml-1" />
                      </div>
                      <p className="text-gray-600 font-medium">Vídeo em breve</p>
                    </div>
                  </div>
                  
                  {/* Overlay com gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Descrição */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Botão de ação */}
                <div className="mt-6">
                  <button className={`w-full py-3 px-6 bg-gradient-to-r ${item.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2`}>
                    <Play className="w-5 h-5" />
                    <span>Assistir Vídeo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Call-to-Action */}
        <div className="bg-gradient-to-r from-[#222D54] to-[#171E37] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D21528]/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-livvic">
              Acompanhe Nossa Jornada
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              Fique por dentro de todas as novidades, eventos e conquistas da AJCS. 
              Siga-nos nas redes sociais e não perca nenhum momento especial!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#D21528] to-[#C94300] text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Ver Mais Vídeos
              </button>
              <button className="border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300">
                Seguir nas Redes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Midia;
