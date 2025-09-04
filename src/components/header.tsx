import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MobileNav } from "./navigation/mobileNav";
import Logo from "../assets/Logo.png";

const Header = () => {
  const navigationItems = [
    { to: "#sobre", label: "Quem somos" },
    { to: "#projetos", label: "Projetos sociais" },
    { to: "#colaboradores", label: "Colaboradores" },
    { to: "#contato", label: "Contato" },
    { to: "#transparencia", label: "Transparência" },
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
      className={`bg-white fixed top shadow-md w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white backdrop-blur-xl shadow-2xl" 
          : "bg-white backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between h-24">
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
              className="relative font-semibold text-lg transition-all duration-300 group cursor-pointer"
            >
              <span className="relative z-10 bg-gradient-to-r from-[#000928] to-[#41559E] bg-clip-text text-transparent hover:from-[#41559E] hover:to-[#000928] transition-all duration-300">{item.label}</span>
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-[#000928] to-[#41559E] group-hover:w-full transition-all duration-500 rounded-full"></span>
              <span className="absolute -inset-2 bg-gradient-to-r from-[#000928]/10 to-[#41559E]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          ))}
        </nav>
        {/* Donate Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollToSection('doar')}
            className="relative overflow-hidden bg-gradient-to-r from-[#D21528] to-[#8D0916] hover:from-[#B81322] hover:to-[#7A0813] text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#D21528]/40 transform hover:-translate-y-1 text-lg"
            style={{
              boxShadow: '0 4px 15px rgba(210, 21, 40, 0.3), 0 0 20px rgba(210, 21, 40, 0.1)'
            }}
          >
            <span className="relative z-10">Quero Doar</span>
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 rounded-xl text-[#171E37] hover:bg-[#171E37]/10 transition-all duration-300 border border-[#171E37]/20 hover:border-[#171E37]/40"
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