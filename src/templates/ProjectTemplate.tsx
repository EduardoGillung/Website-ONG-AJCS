
// Template para criar novos projetos
// Copie este arquivo e personalize conforme necessário

interface ProjectTemplateProps {
  // Dados do projeto
  title: string;
  description: string;
  icon: string;
  category: string;
  status: "Ativo" | "Em Andamento" | "Planejamento" | "Concluído";
  impact: string;
  duration: string;
  location: string;
  highlights: string[];
  image?: string;
  
  // Informações adicionais
  budget?: string;
  team?: string[];
  goals?: string[];
  achievements?: string[];
  gallery?: string[];
  testimonials?: Array<{
    name: string;
    role: string;
    text: string;
    avatar?: string;
  }>;
}

const ProjectTemplate = ({
  title,
  description,
  icon,
  category,
  status,
  impact,
  duration,
  location,
  highlights,
  budget,
  team,
  goals,
  achievements,
  gallery,
  testimonials
}: ProjectTemplateProps) => {
  return (
    <div className="min-h-screen bg-[#171E37]">
      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-8">
            <div className="text-8xl mb-6">{icon}</div>
            <h1 className="text-6xl lg:text-7xl font-bold text-white">
              <span className="text-yellow-400">{title}</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
            <p className="text-xl text-yellow-400/80 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
            
            {/* Status e Categoria */}
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold">
                {category}
              </span>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                status === 'Ativo' ? 'bg-green-400/20 text-green-400' :
                status === 'Em Andamento' ? 'bg-blue-400/20 text-blue-400' :
                status === 'Planejamento' ? 'bg-purple-400/20 text-purple-400' :
                'bg-gray-400/20 text-gray-400'
              }`}>
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Stats */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl">
            <div className="text-4xl font-bold text-yellow-400 mb-2">Impacto</div>
            <div className="text-white/80">{impact}</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl">
            <div className="text-4xl font-bold text-yellow-400 mb-2">Duração</div>
            <div className="text-white/80">{duration}</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl">
            <div className="text-4xl font-bold text-yellow-400 mb-2">Localização</div>
            <div className="text-white/80">{location}</div>
          </div>
          {budget && (
            <div className="text-center p-8 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl">
              <div className="text-4xl font-bold text-yellow-400 mb-2">Orçamento</div>
              <div className="text-white/80">{budget}</div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Highlights */}
            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">Destaques</h2>
              <div className="flex flex-wrap gap-3">
                {highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Goals */}
            {goals && (
              <div>
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">Objetivos</h2>
                <ul className="space-y-4">
                  {goals.map((goal, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-yellow-400 text-xl">✓</span>
                      <span className="text-white/80">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements */}
            {achievements && (
              <div>
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">Conquistas</h2>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-yellow-400 text-xl">🏆</span>
                      <span className="text-white/80">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Team */}
            {team && (
              <div>
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">Equipe</h2>
                <div className="space-y-4">
                  {team.map((member, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-yellow-400/10 rounded-xl">
                      <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                        <span className="text-yellow-400 font-bold">{member.charAt(0)}</span>
                      </div>
                      <span className="text-white/80">{member}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {gallery && (
              <div>
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">Galeria</h2>
                <div className="grid grid-cols-2 gap-4">
                  {gallery.map((_, index) => (
                    <div key={index} className="aspect-square bg-yellow-400/10 rounded-xl flex items-center justify-center">
                      <span className="text-4xl">📷</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {testimonials && (
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl p-6">
                <p className="text-white/80 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-yellow-400 font-semibold">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center space-y-8 p-12 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-3xl">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-yellow-400">Quer apoiar este projeto?</span>
          </h2>
          <p className="text-xl text-yellow-400/80 max-w-2xl mx-auto">
            Sua doação pode fazer a diferença. Junte-se a nós e ajude a transformar mais vidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/25 transform hover:-translate-y-1">
              Apoiar Projeto
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

export default ProjectTemplate;

