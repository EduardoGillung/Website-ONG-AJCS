import { Play, Calendar, FerrisWheel, Tv, Newspaper } from 'lucide-react';
import midia from '../assets/midia.png';
import midia2 from '../assets/midia2.png';
import midia3 from '../assets/midia3.png';
import midia4 from '../assets/midia4.png';

const mediaItems = [
  {
    id: 1,
    title: "Entrevista na TV",
    description: "Nossa participação em programas de televisão locais, compartilhando nossa missão e os impactos positivos na comunidade.",
    icon: <Tv className="w-8 h-8" />,
    color: "from-red-500 to-red-600",
    hoverColor: "group-hover:from-red-400 group-hover:to-red-500",
    category: "Televisão",
    backgroundImage: midia
  },
  {
    id: 2,
    title: "Cobertura Jornalística",
    description: "Reportagens e matérias especiais que destacam o trabalho da AJCS e a importância da Feira Mãos de Potengi.",
    icon: <Newspaper className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    hoverColor: "group-hover:from-blue-400 group-hover:to-blue-500",
    category: "Jornalismo",
    backgroundImage: midia2
  },
  {
    id: 3,
    title: "Eventos e Apresentações",
    description: "Registros dos nossos eventos, apresentações culturais e momentos especiais que marcaram nossa trajetória.",
    icon: <Calendar className="w-8 h-8" />,
    color: "from-green-500 to-green-600",
    hoverColor: "group-hover:from-green-400 group-hover:to-green-500",
    category: "Eventos",
    backgroundImage: midia3
  },
  {
    id: 4,
    title: "Cultura local e atrações",
    description: "Registros dos nossos eventos, apresentações culturais e momentos especiais que marcaram nossa trajetória.",
    icon: <FerrisWheel className="w-8 h-8" />,
    color: "from-[#FF6D24] to-[#FF8C4B]",
    hoverColor: "group-hover:from-[#FF8C4B] group-hover:to-[#FFA270]",
    category: "Atrações",
    backgroundImage: midia4
  }
];

const Midia = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto px-6 max-w-7xl">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-ong-red to-ong-orange rounded-full mb-6 shadow-soft">
            <Play className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-ong-blue-medium mb-6 font-livvic">
            Nossa Mídia
          </h2>
          
          <div className="w-32 h-2 bg-gradient-to-r from-ong-red to-ong-orange rounded-full mx-auto mb-8 shadow-ong"></div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Acompanhe nossa trajetória através de entrevistas, reportagens e momentos especiais 
            que mostram o impacto positivo da AJCS e da Feira Mãos de Potengi na comunidade.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mediaItems.map((item) => (
            <div 
              key={item.id}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
            >
              {/* Header do Card */}
              <div className={`bg-gradient-to-r ${item.color} p-6 text-white relative overflow-hidden transition-all duration-300`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10 flex items-center justify-between mb-4">
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

              {/* Área do Vídeo */}
              <div className="p-6">
                <div className="relative bg-gray-100 rounded-2xl h-48 mb-6 overflow-hidden group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  >
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <button className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-ong-red ml-1" />
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>

                <button className={`mt-6 w-full py-3 px-6 bg-gradient-to-r ${item.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2`}>
                  <Play className="w-5 h-5" />
                  <span>Assistir Vídeo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Midia;
