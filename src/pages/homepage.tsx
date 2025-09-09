import { useState, useEffect } from "react";
import { motion, easeInOut } from "framer-motion"; // Importe easeInOut
import Intro from "../sections/intro";
import About from "../sections/about";
import Contact from "../sections/contact";
import Projects from "../sections/projects";
import Partners from "../sections/partners";
import Transparency from "../sections/transparency";
import Donate from "../sections/donate";

const Home = () => {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", label: "Início" },
    { id: "sobre", label: "Quem Somos" },
    { id: "projetos", label: "Projetos" },
    { id: "colaboradores", label: "Colaboradores" },
    { id: "contato", label: "Contato" },
    { id: "transparencia", label: "Transparência" },
    { id: "doar", label: "Doar" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Definição das variantes de animação
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
  };

  return (
    <div className="w-full relative" style={{ scrollSnapType: "y mandatory", height: "100vh", overflowY: "auto" }}>
      {/* Botões de Navegação Flutuantes (única tabbar) */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? "bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50"
                : "bg-white/60 hover:bg-white/80 hover:scale-110"
            }`}
            title={section.label}
            aria-label={`Ir para seção ${section.label}`}
          />
        ))}
      </div>

      {/* Seção Intro */}
      <motion.section
        id="intro"
        className="min-h-screen snap-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Intro />
      </motion.section>

      {/* Seção Sobre */}
      <motion.section
        id="sobre"
        className="min-h-screen snap-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <About />
      </motion.section>

      {/* Seção Projetos */}
      <motion.section
        id="projetos"
        className="min-h-screen snap-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Projects />
      </motion.section>

      {/* Seção Colaboradores */}
      <motion.section
        id="colaboradores"
        className="min-h-screen snap-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Partners />
      </motion.section>

      {/* Seção Contato */}
      <motion.section
        id="contato"
        className="min-h-screen snap-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.section>

      {/* Seção Transparência */}
      <motion.section
        id="transparencia"
        className="min-h-screen snap-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Transparency />
      </motion.section>

      {/* Seção Doar */}
      <motion.section
        id="doar"
        className="min-h-screen snap-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Donate />
      </motion.section>
    </div>
  );
};

export default Home;