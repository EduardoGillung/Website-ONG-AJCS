import { useState } from 'react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('one-time');

  const presetAmounts = [
    { value: '25', label: 'R$ 25', description: 'Alimenta uma criança por 1 dia' },
    { value: '50', label: 'R$ 50', description: 'Fornece material escolar por 1 mês' },
    { value: '100', label: 'R$ 100', description: 'Cobre custos de saúde por 1 semana' },
    { value: '200', label: 'R$ 200', description: 'Mantém um projeto por 1 mês' }
  ];

  const frequencies = [
    { value: 'one-time', label: 'Doação Única' },
    { value: 'monthly', label: 'Mensal' },
    { value: 'quarterly', label: 'Trimestral' }
  ];

  const impactStats = [
    { number: '500+', label: 'Crianças Atendidas', icon: '👶' },
    { number: '50+', label: 'Projetos Ativos', icon: '🎯' },
    { number: '1000+', label: 'Famílias Beneficiadas', icon: '🏠' },
    { number: '15+', label: 'Anos de Atuação', icon: '⭐' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000928] via-[#1a1f3a] to-[#000928]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-16">
          {/* Título da seção */}
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-white">
              <span className="text-yellow-400">Faça a</span> Diferença
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
            <p className="text-xl text-yellow-400/80 max-w-3xl mx-auto">
              Sua doação transforma vidas e constrói sonhos. Cada contribuição faz parte de uma mudança real na comunidade.
            </p>
          </div>

          {/* Estatísticas de Impacto */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Formulário de Doação */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-8">
              {/* Frequência da Doação */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-left">Frequência da Doação</h3>
                <div className="grid grid-cols-3 gap-3">
                  {frequencies.map((freq) => (
                    <button
                      key={freq.value}
                      onClick={() => setSelectedFrequency(freq.value)}
                      className={`p-3 rounded-xl border transition-all duration-300 ${
                        selectedFrequency === freq.value
                          ? 'border-yellow-400 bg-yellow-400/20 text-yellow-400'
                          : 'border-white/20 text-white/80 hover:border-yellow-400/40 hover:bg-yellow-400/10'
                      }`}
                    >
                      {freq.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Valor da Doação */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-left">Valor da Doação</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount.value}
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
                      <div className="font-bold text-lg">{amount.label}</div>
                      <div className="text-xs opacity-80">{amount.description}</div>
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

              {/* Botão de Doação */}
              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/25 transform hover:-translate-y-1 text-lg">
                {selectedFrequency === 'monthly' ? 'Doar Mensalmente' : 
                 selectedFrequency === 'quarterly' ? 'Doar Trimestralmente' : 'Fazer Doação'}
              </button>

              {/* Informações de Segurança */}
              <div className="mt-6 text-center">
                <p className="text-white/60 text-sm">
                  🔒 Pagamento 100% seguro • 💳 Cartão, PIX ou Boleto • 📧 Recibo enviado por email
                </p>
              </div>
            </div>
          </div>

          {/* CTA Adicional */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-yellow-400">Outras formas</span> de ajudar
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4 rounded-xl transition-all duration-300">
                Seja Voluntário
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4 rounded-xl transition-all duration-300">
                Divulgue Nossa Causa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
