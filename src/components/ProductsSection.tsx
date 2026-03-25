import { useState } from 'react';
import { ShieldCheck, TrendingUp, Layers, SplitSquareHorizontal } from 'lucide-react';
import RobotReportModal from './RobotReportModal';

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

const internationalRobots = ['BTC/USD', 'DAX', 'FOREX'];
const nationalRobots = ['Mini Índice', 'Mini Dólar'];

const ProductsSection = () => {
  const [selectedRobot, setSelectedRobot] = useState<string | null>(null);

  return (
    <section id="produtos" className="py-24 bg-background relative overflow-hidden">
      {selectedRobot && (
        <RobotReportModal robotName={selectedRobot} onClose={() => setSelectedRobot(null)} />
      )}

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

        {/* Tool cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
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

        {/* Market groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Internacional */}
          <div className="rounded-xl overflow-hidden border border-foreground/10">
            <div className="px-5 py-3 font-montserrat font-bold text-sm text-white uppercase tracking-wider" style={{ backgroundColor: '#1a5fa8' }}>
              Mercado Internacional
            </div>
            <div className="p-5 bg-card flex flex-wrap gap-3">
              {internationalRobots.map((robot) => (
                <button
                  key={robot}
                  onClick={() => setSelectedRobot(robot)}
                  className="font-montserrat font-bold text-sm px-5 py-2.5 rounded-lg transition-all hover:-translate-y-[3px] active:translate-y-0 cursor-pointer"
                  style={{
                    backgroundColor: '#d4d4d4',
                    color: '#1a1a1a',
                    boxShadow: '0 4px 0 #aaaaaa',
                  }}
                >
                  {robot}
                </button>
              ))}
            </div>
          </div>

          {/* Nacional */}
          <div className="rounded-xl overflow-hidden border border-foreground/10">
            <div className="px-5 py-3 font-montserrat font-bold text-sm text-white uppercase tracking-wider" style={{ backgroundColor: '#3a7d1e' }}>
              Mercado Nacional
            </div>
            <div className="p-5 bg-card flex flex-wrap gap-3">
              {nationalRobots.map((robot) => (
                <button
                  key={robot}
                  onClick={() => setSelectedRobot(robot)}
                  className="font-montserrat font-bold text-sm px-5 py-2.5 rounded-lg transition-all hover:-translate-y-[3px] active:translate-y-0 cursor-pointer"
                  style={{
                    backgroundColor: '#ffd000',
                    color: '#1a1a1a',
                    boxShadow: '0 4px 0 #b38a00',
                  }}
                >
                  {robot}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
