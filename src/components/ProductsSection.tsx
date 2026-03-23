import { useState } from 'react';
import { Bot, ShieldCheck, TrendingUp, Layers, SplitSquareHorizontal, X } from 'lucide-react';
import btcGraphic from '@/assets/btc-hero-graphic.png';

const tools = [
  {
    name: 'BreakEven',
    icon: ShieldCheck,
    desc: 'Elimina o risco da operação ao mover automaticamente o stop para o ponto de entrada após o mercado evoluir a favor. Totalmente ajustável.',
  },
  {
    name: 'Trailing Stop',
    icon: TrendingUp,
    desc: 'Após atingir o gatilho de ativação, o sistema acompanha o preço ajustando o stop progressivamente, protegendo ganhos e permitindo capturar movimentos mais longos.',
  },
  {
    name: 'Gradiente',
    icon: Layers,
    desc: 'Sistema de entradas progressivas que melhora o preço médio e otimiza o posicionamento da operação. Totalmente ajustável.',
    optional: true,
  },
  {
    name: 'Parciais',
    icon: SplitSquareHorizontal,
    desc: 'Realiza lucros de forma estratégica ao longo da operação, garantindo ganhos mesmo antes do movimento completo. Possui múltiplos níveis configuráveis.',
    optional: true,
  },
];

const BtcModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
      onClick={onClose}
    >
      <div
        className="bg-card border border-foreground/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-40 overflow-hidden rounded-t-2xl">
          <img src={btcGraphic} alt="BTC/USD" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
          <div className="absolute bottom-4 left-6 flex items-center gap-3">
            <Bot className="text-primary" size={20} />
            <h3 className="font-montserrat text-xl font-bold text-foreground">Robô BTC/USD</h3>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-foreground/10 hover:bg-foreground/20 rounded-full p-1.5 transition-colors"
          >
            <X size={16} className="text-foreground" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-primary font-montserrat text-sm font-medium tracking-wide mb-4">
            Sistema automatizado para mercados globais
          </p>

          <div className="mb-6">
            <h4 className="font-montserrat font-semibold text-foreground text-sm uppercase tracking-wider mb-2">
              Sobre o Robô
            </h4>
            <p className="text-muted leading-relaxed text-sm">
              Este robô foi desenvolvido com foco em precisão e controle de risco, operando apenas em cenários específicos de alta probabilidade.
              A estratégia prioriza qualidade de entrada, proteção de capital e execução inteligente, evitando operações desnecessárias.
            </p>
          </div>

          <div className="mb-6 border border-dashed border-foreground/10 rounded-lg p-4 bg-surface-light/50">
            <h4 className="font-montserrat font-semibold text-foreground text-sm uppercase tracking-wider mb-2">
              Funcionamento
            </h4>
            <p className="text-muted text-sm">
              O sistema utiliza uma estrutura completa de gestão de operações, combinando proteção automática, realização parcial de lucros e acompanhamento dinâmico do mercado para maior eficiência.
            </p>
          </div>

          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-montserrat font-bold text-sm hover:brightness-110 transition-all active:scale-95">
            Conhecer Robô Bitcoin Viking
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <section id="produtos" className="py-24 bg-background relative overflow-hidden">
      {modalAberto && <BtcModal onClose={() => setModalAberto(false)} />}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-montserrat text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Produtos
          </span>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em] mb-4">
            Automação Inteligente com Gestão Profissional de Operações
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Um sistema completo que atua desde a entrada até a saída da operação, focado em proteção de capital e maximização de resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="relative bg-card border border-foreground/5 rounded-lg p-6 hover:border-primary/30 transition-colors group"
            >
              <span
                className={`absolute top-3 right-3 text-[10px] font-montserrat font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
                  tool.optional
                    ? 'bg-primary/20 text-primary'
                    : 'bg-foreground/10 text-muted'
                }`}
              >
                {tool.optional ? 'Modo avançado' : 'Modo standard'}
              </span>

              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <tool.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">{tool.name}</h3>
              <p className="text-sm text-muted leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
