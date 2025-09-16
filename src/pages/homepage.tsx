import { useEffect } from "react";
import Intro from "../sections/intro";
import About from "../sections/about";
import Contact from "../sections/contact";
import Projects from "../sections/projects";
import Fair from "../sections/fair";
import Partners from "../sections/partners";
import Transparency from "../sections/transparency";
import Donate from "../sections/donate";

const Home = () => {
  // Navegação lateral removida

  useEffect(() => {
    // Mantém apenas utilidades futuras; remove o scroll spy
  }, []);

  return (
    <div className="w-full relative">
      {/* Navegação por bolinhas removida */}

      {/* Seção Intro */}
      <section id="intro" className="min-h-screen">
        <Intro />
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="min-h-screen scroll-mt-28">
        <About />
      </section>

      {/* Seção Projetos */}
      <section id="projetos" className="min-h-screen scroll-mt-24">
        <Projects />
      </section>

      {/* Seção Feira (fundo branco) */}
      <section id="feira" className="min-h-screen scroll-mt-24 bg-white">
        <Fair />
      </section>

      {/* Seção Colaboradores */}
      <section id="colaboradores" className="min-h-screen scroll-mt-24">
        <Partners />
      </section>

      {/* Seção Transparência */}
        <section id="transparencia" className="min-h-screen scroll-mt-24">
        <Transparency />
      </section>

      {/* Seção Contato */}
      <section id="contato" className="min-h-screen scroll-mt-24">
        <Contact />
      </section>

      {/* Seção Doar */}
      <section id="doar" className="min-h-screen scroll-mt-24">
        <Donate />
      </section>
    </div>
  );
};

export default Home;