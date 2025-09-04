import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState('100');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('one-time');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    anonymous: false,
    message: ''
  });

  const presetAmounts = [
    { value: '25', label: 'R$ 25', description: 'Alimenta uma criança por 1 dia', impact: '1 dia de alimentação' },
    { value: '50', label: 'R$ 50', description: 'Fornece material escolar por 1 mês', impact: '1 mês de material escolar' },
    { value: '100', label: 'R$ 100', description: 'Cobre custos de saúde por 1 semana', impact: '1 semana de saúde' },
    { value: '200', label: 'R$ 200', description: 'Mantém um projeto por 1 mês', impact: '1 mês de projeto' },
    { value: '500', label: 'R$ 500', description: 'Transforma uma vida por 1 ano', impact: '1 ano de transformação' }
  ];

  const frequencies = [
    { value: 'one-time', label: 'Doação Única', icon: '🎁' },
    { value: 'monthly', label: 'Mensal', icon: '📅', discount: '5% desconto' },
    { value: 'quarterly', label: 'Trimestral', icon: '🌱', discount: '10% desconto' }
  ];

  const paymentMethods = [
    { id: 'pix', label: 'PIX', icon: '📱', description: 'Transferência instantânea' },
    { id: 'credit', label: 'Cartão de Crédito', icon: '💳', description: 'Visa, Mastercard, Elo' },
    { id: 'debit', label: 'Cartão de Débito', icon: '🏦', description: 'Débito automático' },
    { id: 'boleto', label: 'Boleto Bancário', icon: '📄', description: 'Pagamento em até 3 dias' }
  ];

  const impactStories = [
    {
      title: "Maria, 8 anos",
      story: "Sua doação de R$ 50 por mês fornece material escolar completo para Maria, permitindo que ela continue estudando e sonhe com um futuro melhor.",
      image: "👧",
      impact: "Material escolar por 1 ano"
    },
    {
      title: "João, 12 anos",
      story: "Com R$ 100 mensais, João tem acesso a aulas de reforço, esportes e atividades culturais que transformaram sua vida e autoestima.",
      image: "👦",
      impact: "Atividades educacionais"
    },
    {
      title: "Família Silva",
      story: "Uma doação de R$ 200 mensais mantém um projeto de moradia que já beneficiou 15 famílias com reformas e melhorias em suas casas.",
      image: "🏠",
      impact: "Projeto de moradia"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de processamento da doação
    console.log('Doação processada:', { selectedAmount, selectedFrequency, formData });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000928] via-[#1a1f3a] to-[#000928]">
      {/* Header da Página */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-yellow-400/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-xl border-2 border-yellow-400 bg-white flex items-center justify-center shadow-lg group-hover:shadow-yellow-400/25 transition-all duration-300 overflow-hidden">
                <img 
                  src={Logo} 
                  alt="Associação Juventude Construindo Sonhos Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-lg font-bold">Construindo</span>
                <span className="text-yellow-400 text-lg font-bold">Sonhos</span>
              </div>
            </Link>
            <Link 
              to="/" 
              className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-yellow-400/10"
            >
              ← Voltar ao Início
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Título e Descrição */}
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="text-yellow-400">Faça a</span> Diferença
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-yellow-400/80 max-w-4xl mx-auto leading-relaxed">
              Sua doação transforma vidas e constrói sonhos. Cada contribuição faz parte de uma mudança real na comunidade. 
              Junte-se a nós nesta jornada de transformação social.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Coluna Principal - Formulário de Doação */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-yellow-400 mb-8">Sua Doação</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Frequência da Doação */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Frequência da Doação</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {frequencies.map((freq) => (
                        <button
                          key={freq.value}
                          type="button"
                          onClick={() => setSelectedFrequency(freq.value)}
                          className={`p-4 rounded-xl border transition-all duration-300 text-center ${
                            selectedFrequency === freq.value
                              ? 'border-yellow-400 bg-yellow-400/20 text-yellow-400'
                              : 'border-white/20 text-white/80 hover:border-yellow-400/40 hover:bg-yellow-400/10'
                          }`}
                        >
                          <div className="text-2xl mb-2">{freq.icon}</div>
                          <div className="font-bold">{freq.label}</div>
                          {freq.discount && (
                            <div className="text-xs text-yellow-400 mt-1">{freq.discount}</div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Valor da Doação */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Valor da Doação</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount.value}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amount.value);
                            setCustomAmount('');
                          }}
                          className={`p-4 rounded-xl border transition-all duration-300 text-center ${
                            selectedAmount === amount.value
                              ? 'border-yellow-400 bg-yellow-400/20 text-yellow-400'
                              : 'border-white/20 text-white/80 hover:border-yellow-400/40 hover:bg-yellow-400/10'
                          }`}
                        >
                          <div className="font-bold text-lg mb-1">{amount.label}</div>
                          <div className="text-xs opacity-80 mb-2">{amount.description}</div>
                          <div className="text-xs text-yellow-400 font-semibold">{amount.impact}</div>
                        </button>
                      ))}
                    </div>
                    
                    {/* Valor Personalizado */}
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Outro valor"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount('');
                        }}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 transition-colors"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60">R$</span>
                    </div>
                  </div>

                  {/* Método de Pagamento */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Método de Pagamento</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          className="p-4 rounded-xl border border-white/20 text-white/80 hover:border-yellow-400/40 hover:bg-yellow-400/10 transition-all duration-300 text-center"
                        >
                          <div className="text-2xl mb-2">{method.icon}</div>
                          <div className="font-bold text-sm">{method.label}</div>
                          <div className="text-xs opacity-60">{method.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Informações Pessoais */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Telefone (opcional)"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="anonymous"
                        checked={formData.anonymous}
                        onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
                        className="w-4 h-4 text-yellow-400 bg-white/10 border-white/20 rounded focus:ring-yellow-400 focus:ring-2"
                      />
                      <label htmlFor="anonymous" className="text-white/80 text-sm">
                        Manter doação anônima
                      </label>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <textarea
                    placeholder="Mensagem (opcional)"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  />

                  {/* Botão de Doação */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-5 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/25 transform hover:-translate-y-1 text-xl"
                  >
                    {selectedFrequency === 'monthly' ? 'Doar Mensalmente' : 
                     selectedFrequency === 'quarterly' ? 'Doar Trimestralmente' : 'Fazer Doação'}
                  </button>

                  {/* Informações de Segurança */}
                  <div className="text-center pt-6 border-t border-white/10">
                    <p className="text-white/60 text-sm">
                      🔒 Pagamento 100% seguro • 💳 Cartão, PIX ou Boleto • 📧 Recibo enviado por email
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Coluna Lateral - Histórias e Estatísticas */}
            <div className="space-y-8">
              {/* Estatísticas */}
              <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-6">Nosso Impacto</h3>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-yellow-400">500+</div>
                    <div className="text-white/80 text-sm">Crianças Atendidas</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-yellow-400">50+</div>
                    <div className="text-white/80 text-sm">Projetos Ativos</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-yellow-400">1000+</div>
                    <div className="text-white/80 text-sm">Famílias Beneficiadas</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-yellow-400">15+</div>
                    <div className="text-white/80 text-sm">Anos de Atuação</div>
                  </div>
                </div>
              </div>

              {/* Histórias de Impacto */}
              <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-6">Histórias de Impacto</h3>
                <div className="space-y-4">
                  {impactStories.map((story, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{story.image}</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-sm">{story.title}</h4>
                          <p className="text-white/70 text-xs mt-1">{story.story}</p>
                          <div className="text-yellow-400 text-xs font-semibold mt-2">{story.impact}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outras Formas de Ajuda */}
              <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-6">Outras Formas de Ajuda</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-white/5 rounded-xl text-white/80 hover:bg-white/10 transition-all duration-300">
                    🤝 Seja Voluntário
                  </button>
                  <button className="w-full text-left p-3 bg-white/5 rounded-xl text-white/80 hover:bg-white/10 transition-all duration-300">
                    📢 Divulgue Nossa Causa
                  </button>
                  <button className="w-full text-left p-3 bg-white/5 rounded-xl text-white/80 hover:bg-white/10 transition-all duration-300">
                    🏢 Parcerias Empresariais
                  </button>
                  <button className="w-full text-left p-3 bg-white/5 rounded-xl text-white/80 hover:bg-white/10 transition-all duration-300">
                    📚 Doação de Materiais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
