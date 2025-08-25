import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MobileNav } from "./navigation/mobileNav";
import Logo from "../assets/Logo.png";

const Header = () => {
  const navigationItems = [
    { to: "/", label: "Quem somos" },
    { to: "/projects", label: "Projetos sociais" },
    { to: "/partners", label: "Colaboradores" },
    { to: "/contact", label: "Contato" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#171E37]/98 backdrop-blur-xl shadow-2xl" 
          : "bg-[#171E37]/90 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center">
              <img 
                src={Logo} 
                alt="Associação Juventude Construindo Sonhos Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navigationItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative text-yellow-400 hover:text-yellow-300 font-semibold text-lg transition-all duration-300 group"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 group-hover:w-full transition-all duration-500 rounded-full"></span>
              <span className="absolute -inset-2 bg-yellow-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Donate Button */}
        <div className="hidden lg:block">
          <Link
            to="/donate"
            className="relative overflow-hidden bg-[#FFE100] hover:bg-[#FFD700] text-[#4A430B] font-bold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#FFE100]/40 transform hover:-translate-y-1"
            style={{
              boxShadow: '0 4px 15px rgba(255, 225, 0, 0.3), 0 0 20px rgba(255, 225, 0, 0.1)'
            }}
          >
            <span className="relative z-10">Quero Doar</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFE100] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 rounded-xl text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 border border-yellow-400/20 hover:border-yellow-400/40"
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
      />
    </header>
  );
};

export default Header;