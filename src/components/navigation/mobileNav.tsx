import React from "react";
import Logo from "../../assets/Logo.png";
import { 
  Users, 
  Heart, 
  Store, 
  Play, 
  Handshake, 
  Shield, 
  Mail, 
  X,
  HandHeart
} from 'lucide-react';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  navigationItems: { to: string; label: string }[];
  onNavigate: (sectionId: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ open, onClose, navigationItems, onNavigate }) => {
  if (!open) return null;
  
  // Mapeamento de ícones para cada seção
  const getIcon = (label: string) => {
    switch (label) {
      case "Quem somos": return <Users className="w-6 h-6" />;
      case "Projetos sociais": return <Heart className="w-6 h-6" />;
      case "Feira": return <Store className="w-6 h-6" />;
      case "Mídia": return <Play className="w-6 h-6" />;
      case "Colaboradores": return <Handshake className="w-6 h-6" />;
      case "Transparência": return <Shield className="w-6 h-6" />;
      case "Contato": return <Mail className="w-6 h-6" />;
      default: return <Heart className="w-6 h-6" />;
    }
  };

  // Cores para cada seção
  const getColor = (label: string) => {
    switch (label) {
      case "Quem somos": return "from-blue-500 to-blue-600";
      case "Projetos sociais": return "from-red-500 to-red-600";
      case "Feira": return "from-green-500 to-green-600";
      case "Mídia": return "from-purple-500 to-purple-600";
      case "Colaboradores": return "from-orange-500 to-orange-600";
      case "Transparência": return "from-cyan-500 to-cyan-600";
      case "Contato": return "from-pink-500 to-pink-600";
      default: return "from-gray-500 to-gray-600";
    }
  };
  
  const handleNavigation = (item: { to: string; label: string }) => {
    if (item.to.startsWith('#')) {
      onNavigate(item.to.replace('#', ''));
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed z-50 flex 0 top-0 right-0">
      {/* Overlay com blur moderno */}
      <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-md" onClick={onClose} />
      
      {/* Drawer moderno */}
      <div className="relative bg-gradient-to-br from-white via-gray-50 to-white w-80 max-w-[85vw] h-full shadow-2xl p-6 flex flex-col animate-slide-in-left border-r border-gray-200/50">
        {/* Header com logo e fechar */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => {
              onNavigate('intro');
              onClose();
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D21528] to-[#C94300] p-2 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <img 
                src={Logo} 
                alt="Associação Juventude Construindo Sonhos Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-[#171E37] text-sm">AJCS</h3>
              <p className="text-xs text-gray-600">Construindo Sonhos</p>
            </div>
          </button>
          
          <button
            className="p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-[#171E37] transition-all duration-300 hover:scale-110 shadow-sm"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Título da navegação */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#171E37] mb-2">Navegação</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D21528] to-[#C94300] rounded-full"></div>
        </div>
        
        {/* Links com ícones e cores */}
        <nav className="flex flex-col gap-2 flex-1">
          {navigationItems.map((item) => (
            <button
              key={item.to}
              onClick={() => handleNavigation(item)}
              className="group relative w-full text-left rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white border border-gray-100 hover:border-gray-200"
            >
              <div className="flex items-center space-x-4">
                {/* Ícone com gradiente */}
                <div className={`p-3 rounded-xl bg-gradient-to-r ${getColor(item.label)} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  {getIcon(item.label)}
                </div>
                
                {/* Texto */}
                <div className="flex-1">
                  <span className="font-semibold text-[#171E37] group-hover:text-[#D21528] transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
                
                {/* Indicador de hover */}
                <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#D21528] transition-all duration-300"></div>
              </div>
            </button>
          ))}
        </nav>
        
        {/* Donate Button moderno */}
        <div className="mt-6 mb-4">
          <button
            onClick={() => {
              onNavigate('doar');
              onClose();
            }}
            className="group relative w-full bg-gradient-to-r from-[#D21528] to-[#C94300] hover:from-[#B81322] hover:to-[#A0121E] text-white font-bold text-center px-6 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#D21528]/40 transform hover:-translate-y-1 flex items-center justify-center space-x-3"
          >
            <HandHeart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Quero Doar</span>
          </button>
        </div>
        
        {/* Footer */}
        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Construindo Sonhos
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Transformando vidas através da educação
          </p>
        </div>
      </div>
      
      <style>{`
        @keyframes slide-in-left {
          from { 
            transform: translateX(100%) scale(0.95); 
            opacity: 0; 
          }
          to { 
            transform: translateX(0) scale(1); 
            opacity: 1; 
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}; 