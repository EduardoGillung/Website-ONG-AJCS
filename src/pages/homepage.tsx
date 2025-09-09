import { useState, useEffect } from 'react';
import Intro from '../sections/intro';
import About from '../sections/about';
import Contact from '../sections/contact';
import Projects from '../sections/projects';
import Partners from '../sections/partners';
import Transparency from '../sections/transparency';
import Donate from '../sections/donate';

const Home = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', label: 'Início' },
    { id: 'sobre', label: 'Quem Somos' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'colaboradores', label: 'Colaboradores' },
    { id: 'contato', label: 'Contato' },
    { id: 'transparencia', label: 'Transparência' },
    { id: 'doar', label: 'Doar' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full relative">
      {/* Botões de Navegação Flutuantes */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50'
                : 'bg-white/60 hover:bg-white/80 hover:scale-110'
            }`}
            title={section.label}
            aria-label={`Ir para seção ${section.label}`}
          />
        ))}
      </div>

      {/* Seção Intro */}
      <section id="intro" className="min-h-screen">
        <Intro />
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="min-h-screen">
        <About />
      </section>

      {/* Seção Projetos */}
      <section id="projetos" className="min-h-screen">
        <Projects />
      </section>

      {/* Seção Colaboradores */}
      <section id="colaboradores" className="min-h-screen">
        <Partners />
      </section>

      {/* Seção Contato */}
      <section id="contato" className="min-h-screen">
        <Contact />
      </section>

      {/* Seção Transparência */}
      <section id="transparencia" className="min-h-screen">
        <Transparency />
      </section>

      {/* Seção Doar */}
      <section id="doar" className="min-h-screen">
        <Donate />
      </section>
    </div>
  );
};

export default Home;
