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
      className={`fixed top-0 w-full z-50 shadow-md transition-all duration-500 ${
        scrolled 
          ? "bg-white backdrop-blur-xl shadow-lg shadow-gray-200/70" 
          : "bg-white backdrop-blur-md shadow-lg shadow-gray-200/70"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between h-20">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('intro')}
          className="flex items-center space-x-4 group cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center">
              <img 
                src={Logo} 
                alt="Associação Juventude Construindo Sonhos Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </button>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navigationItems.map((item) => (
            <button
            key={item.to}
            onClick={() => scrollToSection(item.to.replace('#', ''))}
            className="relative font-semibold text-md transition-all duration-300 group cursor-pointer text-ong-blue"
          >
            {/* Texto */}
            <span className="relative z-10 group-hover:text-ong-red transition-colors duration-300">
              {item.label}
            </span>
          
            {/* Underline animado */}
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-ong-red group-hover:w-full transition-all duration-500 rounded-full"></span>

            </button>
          ))}
        </nav>

        {/* Donate Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollToSection('doar')}
            className="relative overflow-hidden bg-ong-red hover:from-ong-red-light hover:to-ong-red 
            text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 shadow-soft 
            hover:shadow-ong transform hover:-translate-y-1 text-md border
            flex items-center justify-center space-x-3"
            style={{
              boxShadow: '0 4px 15px rgba(255, 0, 25, 0.3), 0 0 20px rgba(202, 0, 20, 0.1)'
            }}
          >
            <HandHeart className="w-5 h-5" />
            <span className="relative z-10">Quero Doar</span>
          </button>
      </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 rounded-xl text-ong-blue hover:bg-ong-blue/10 transition-all duration-300 border border-ong-blue/20 hover:border-ong-blue/40"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
