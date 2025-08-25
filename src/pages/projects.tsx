import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Educação para Todos",
      description: "Projeto de alfabetização e capacitação profissional para jovens e adultos em situação de vulnerabilidade.",
      icon: "📚",
      category: "Educação",
      status: "Ativo",
      impact: "200+ pessoas beneficiadas",
      duration: "2 anos",
      location: "São Paulo, SP",
      highlights: ["Alfabetização", "Capacitação Profissional", "Inclusão Digital"],
      image: "🎓"
    },
    {
      title: "Casa Lar Esperança",
      description: "Construção e manutenção de abrigos para famílias em situação de vulnerabilidade social.",
      icon: "🏠",
      category: "Moradia",
      status: "Em Andamento",
      impact: "50 famílias atendidas",
      duration: "1 ano",
      location: "São Paulo, SP",
      highlights: ["Construção", "Reforma", "Apoio Social"],
      image: "🏗️"
    },
    {
      title: "Saúde Comunitária",
      description: "Ações de prevenção e atendimento básico de saúde em comunidades carentes.",
      icon: "🏥",
      category: "Saúde",
      status: "Ativo",
      impact: "1000+ atendimentos",
      duration: "3 anos",
      location: "São Paulo, SP",
      highlights: ["Prevenção", "Atendimento", "Educação em Saúde"],
      image: "💊"
    },
    {
      title: "Alimentação Solidária",
      description: "Distribuição de refeições e cestas básicas para famílias necessitadas.",
      icon: "🍽️",
      category: "Alimentação",
      status: "Ativo",
      impact: "500+ refeições/mês",
      duration: "4 anos",
      location: "São Paulo, SP",
      highlights: ["Cestas Básicas", "Refeições", "Distribuição"],
      image: "🥗"
    },
    {
      title: "Inclusão Digital",
      description: "Projeto de inclusão digital e capacitação tecnológica para jovens.",
      icon: "💻",
      category: "Tecnologia",
      status: "Planejamento",
      impact: "100+ jovens",
      duration: "1 ano",
      location: "São Paulo, SP",
      highlights: ["Programação", "Informática", "Mercado de Trabalho"],
      image: "🖥️"
    },
    {
      title: "Arte e Cultura",
      description: "Projetos culturais e artísticos para desenvolvimento social e expressão criativa.",
      icon: "🎨",
      category: "Cultura",
      status: "Ativo",
      impact: "150+ participantes",
      duration: "2 anos",
      location: "São Paulo, SP",
      highlights: ["Arte", "Cultura", "Expressão Criativa"],
      image: "🎭"
    }
  ];

  const categories = ["Todos", "Educação", "Saúde", "Moradia", "Alimentação", "Tecnologia", "Cultura"];
  const statuses = ["Todos", "Ativo", "Em Andamento", "Planejamento", "Concluído"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-white">
              <span className="text-yellow-400">Projetos</span> Sociais
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
            <p className="text-xl text-yellow-400/80 max-w-3xl mx-auto">
              Conheça nossos projetos que estão transformando vidas e construindo um futuro melhor 
              para comunidades em situação de vulnerabilidade.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl">
            <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
            <div className="text-white/80">Projetos Ativos</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl">
            <div className="text-4xl font-bold text-yellow-400 mb-2">6</div>
            <div className="text-white/80">Categorias</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl">
            <div className="text-4xl font-bold text-yellow-400 mb-2">2000+</div>
            <div className="text-white/80">Vidas Impactadas</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl">
            <div className="text-4xl font-bold text-yellow-400 mb-2">5</div>
            <div className="text-white/80">Anos de Atuação</div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="space-y-8">
          {/* Category Filters */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Categorias</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-lg transition-all duration-300 text-sm font-semibold"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filters */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Status</h3>
            <div className="flex flex-wrap gap-3">
              {statuses.map((status, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-lg transition-all duration-300 text-sm font-semibold"
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{project.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-yellow-400">{project.title}</h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold">
                          {project.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          project.status === 'Ativo' ? 'bg-green-400/20 text-green-400' :
                          project.status === 'Em Andamento' ? 'bg-blue-400/20 text-blue-400' :
                          project.status === 'Planejamento' ? 'bg-purple-400/20 text-purple-400' :
                          'bg-gray-400/20 text-gray-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 leading-relaxed">{project.description}</p>

                {/* Highlights */}
                <div>
                  <h4 className="text-yellow-400 font-semibold mb-3">Destaques:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-yellow-400/10 rounded-xl">
                    <div className="text-yellow-400 font-semibold">Impacto</div>
                    <div className="text-white/80 text-sm">{project.impact}</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-400/10 rounded-xl">
                    <div className="text-yellow-400 font-semibold">Duração</div>
                    <div className="text-white/80 text-sm">{project.duration}</div>
                  </div>
                </div>

                {/* Location */}
                <div className="text-center p-4 bg-yellow-400/10 rounded-xl">
                  <div className="text-yellow-400 font-semibold">Localização</div>
                  <div className="text-white/80">{project.location}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                    Ver Detalhes
                  </button>
                  <button className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-xl transition-all duration-300">
                    Apoiar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center space-y-8 p-12 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-3xl">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-yellow-400">Quer apoiar nossos projetos?</span>
          </h2>
          <p className="text-xl text-yellow-400/80 max-w-2xl mx-auto">
            Sua doação pode fazer a diferença na vida de muitas pessoas. 
            Junte-se a nós e ajude a transformar mais vidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/25 transform hover:-translate-y-1">
              Fazer Doação
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4 rounded-xl transition-all duration-300">
              Seja Voluntário
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
