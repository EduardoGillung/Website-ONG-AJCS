import { useState, useEffect } from "react";
import { MobileNav } from "./navigation/mobileNav";
import Logo from "../assets/Logo.png";
import { HandHeart } from 'lucide-react';

const Header = () => {
  const navigationItems = [
    { to: "#sobre", label: "Quem somos" },
    { to: "#projetos", label: "Projetos sociais" },
    { to: "#feira", label: "Feira" },
    { to: "#midia", label: "Mídia" },
    { to: "#colaboradores", label: "Colaboradores" },
    { to: "#transparencia", label: "Transparência" },
    { to: "#contato", label: "Contato" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled 
          ? "w-full max-w-7xl bg-white/95 backdrop-blur-xl shadow-lg rounded-2xl mx-4" 
          : "w-full max-w-7xl bg-white/90 backdrop-blur-md shadow-lg rounded-2xl mx-4"
      }`}
    >
      <div className="container mx-auto px-6 max-w-full flex items-center justify-between h-20">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('intro')}
          className="flex items-center space-x-4 group cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center">
              <img 
                src={Logo} 
                alt="Associação Juventude Construindo Sonhos Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </button>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.to}
              onClick={() => scrollToSection(item.to.replace('#', ''))}
              className="relative font-semibold text-md transition-all duration-300 group cursor-pointer text-gray-700 hover:text-ong-red"
            >
              {/* Texto */}
              <span className="relative z-10 transition-colors duration-300">
                {item.label}
              </span>
          
              {/* Underline animado */}
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-ong-red group-hover:w-full transition-all duration-500 rounded-full"></span>
            </button>
          ))}
        </nav>

        {/* Donate Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollToSection('doar')}
            className="relative overflow-hidden bg-ong-red hover:bg-ong-red-dark 
            text-white font-bold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-md
            hover:shadow-lg transform hover:-translate-y-0.5 text-md border
            flex items-center justify-center space-x-2"
          >
            <HandHeart className="w-4 h-4" />
            <span className="relative z-10">Quero Doar</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-gray-300"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigationItems={navigationItems}
        onNavigate={scrollToSection}
      />
    </header>
  );
};

export default Header;