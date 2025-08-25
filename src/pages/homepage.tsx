import Intro from '../sections/intro';
import About from '../sections/about';
import Contact from '../sections/contact';
import Projects from '../sections/projects';

const Home = () => {
  return (
    <div className="w-full">
      {/* Seção Intro */}
      <section className="min-h-screen">
        <Intro />
      </section>

      {/* Seção Projetos */}
      <section className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Projects />
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6">
          <About />
        </div>
      </section>

      {/* Seção Contato */}
      <section className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Home;
