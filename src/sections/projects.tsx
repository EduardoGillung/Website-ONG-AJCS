import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Educação para Todos",
      description: "Projeto de alfabetização e capacitação profissional para jovens e adultos.",
      icon: "📚",
      impact: "200+ pessoas beneficiadas"
    },
    {
      title: "Casa Lar Esperança",
      description: "Construção e manutenção de abrigos para famílias em situação de vulnerabilidade.",
      icon: "🏠",
      impact: "50 famílias atendidas"
    },
    {
      title: "Saúde Comunitária",
      description: "Ações de prevenção e atendimento básico de saúde em comunidades carentes.",
      icon: "🏥",
      impact: "1000+ atendimentos"
    },
    {
      title: "Alimentação Solidária",
      description: "Distribuição de refeições e cestas básicas para famílias necessitadas.",
      icon: "🍽️",
      impact: "500+ refeições/mês"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000928]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-12">
          {/* Título da seção */}
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-bold text-white">
              <span className="text-yellow-400">Projetos</span> Sociais
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
            <p className="text-xl text-yellow-400/80 max-w-2xl mx-auto">
              Conheça alguns dos nossos principais projetos que estão transformando vidas e construindo um futuro melhor.
            </p>
          </div>

          {/* Grid de projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10"
              >
                <div className="text-center space-y-6">
                  {/* Ícone */}
                  <div className="text-6xl mb-4">{project.icon}</div>
                  
                  {/* Título */}
                  <h3 className="text-2xl font-bold text-yellow-400">{project.title}</h3>
                  
                  {/* Descrição */}
                  <p className="text-white/80 leading-relaxed">{project.description}</p>
                  
                  {/* Impacto */}
                  <div className="bg-yellow-400/20 rounded-xl p-4">
                    <div className="text-yellow-400 font-semibold">{project.impact}</div>
                  </div>
                  
                  {/* Botão */}
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                    Saiba Mais
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Botão de ação */}
          <div className="pt-8">
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4 rounded-xl transition-all duration-300">
              Ver Todos os Projetos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;