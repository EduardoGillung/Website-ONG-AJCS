import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  navigationItems: { to: string; label: string }[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ open, onClose, navigationItems }) => {
  if (!open) return null;
  return (
    <div className="fixed z-50 flex 0 top-0 right-0">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      {/* Drawer */}
      <div className="relative bg-[#171E37] w-80 max-w-[85vw] h-full shadow-2xl p-8 flex flex-col animate-slide-in-left border-r border-yellow-400/20">
        {/* Logo e fechar */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="flex items-center space-x-3" onClick={onClose}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <img 
                src={Logo} 
                alt="Associação Juventude Construindo Sonhos Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
          <button
            className="text-yellow-400 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 p-2 rounded-xl transition-all duration-300 hover:bg-yellow-400/10"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Links */}
        <nav className="flex flex-col gap-3 mt-4">
          {navigationItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block text-lg font-semibold text-yellow-400 rounded-xl px-6 py-4 hover:bg-yellow-400/10 hover:text-yellow-300 transition-all duration-300 border border-transparent hover:border-yellow-400/30"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex-1" />
        
        {/* Donate Button */}
        <div className="mb-8">
          <Link
            to="/donate"
            className="block w-full bg-[#FFE100] hover:bg-[#FFD700] text-[#4A430B] font-bold text-center px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#FFE100]/40 transform hover:-translate-y-1"
            style={{
              boxShadow: '0 4px 15px rgba(255, 225, 0, 0.3), 0 0 20px rgba(255, 225, 0, 0.1)'
            }}
            onClick={onClose}
          >
            Quero Doar
          </Link>
        </div>
        
        <div className="text-xs text-yellow-400/60 text-center">
          © {new Date().getFullYear()} Construindo Sonhos
        </div>
      </div>
      <style>{`
        @keyframes slide-in-left {
          from { transform: translateX(100%); opacity: 0.5; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.4s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </div>
  );
}; 