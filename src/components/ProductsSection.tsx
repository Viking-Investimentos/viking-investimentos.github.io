import { useState } from 'react';
import { Bot, ShieldCheck, TrendingUp, Layers, SplitSquareHorizontal, Phone, Mail, Play, Lock, Trophy, X } from 'lucide-react';
import btcGraphic from '@/assets/btc-hero-graphic.png';
import exponentialGrowth from '@/assets/exponential-growth.png';
import savingsEducation from '@/assets/savings-education.png';
import eduMercado from '@/assets/edu-mercado-financeiro.png';
import eduFracoes from '@/assets/edu-fracoes.png';
import eduReinvestimentos from '@/assets/edu-reinvestimentos.png';

const tools = [
  { name: 'BreakEven', icon: ShieldCheck, desc: 'Proteja seu capital automaticamente ao atingir o ponto de equilíbrio da operação.' },
  { name: 'Trailing Stop', icon: TrendingUp, desc: 'Maximize lucros acompanhando o movimento do preço em tempo real.' },
  { name: 'Gradiente', icon: Layers, desc: 'Estratégia opcional de entradas escalonadas para melhor preço médio.', optional: true },
  { name: 'Parciais', icon: SplitSquareHorizontal, desc: 'Realize lucros parciais de forma automática e inteligente.', optional: true },
];

const modules = [
  { id: '01', title: 'Noções Básicas sobre o Mercado Financeiro', status: 'Disponível', active: true, meta: '4 Aulas • Gratuito' },
  { id: '02', title: 'Análise Técnica e Leitura de Gráficos', status: 'Em Breve', active: false, meta: '8 Aulas' },
  { id: '03', title: 'Trading Algorítmico com MQL5', status: 'Em Breve', active: false, meta: '12 Aulas' },
];

const lessons = [
  { title: 'O que é o Mercado Financeiro?', active: true, image: eduMercado },
  { title: 'Participantes do Mercado', active: true, image: eduFracoes },
  { title: 'Ativos Financeiros e Classes', active: false, image: eduReinvestimentos },
  { title: 'Como Funciona a Bolsa de Valores', active: false, image: null },
];

const relatorio = {
  ativo: 'BTC/USD',
  periodo: 'BTC USD T1',
  deposito: 10000.0,
  lucro: 375.08,
  retorno: 3.75,
  operacoes: 52,
  wins: 40,
  losses: 12,
  win_rate: 76.9,
  saldo_final: 10375.08,
};

const BtcModal = ({ onClose }: { onClose: () => void }) => {
  const [aba, setAba] = useState<'info' | 'relatorios'>('info');
  const [periodo, setPeriodo] = useState('T1 2026');

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
        {/* Header com imagem */}
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

        {/* Abas */}
        <div className="flex border-b border-foreground/10">
          <button
            onClick={() => setAba('info')}
            className={`px-6 py-3 font-montserrat font-bold text-sm transition-colors ${aba === 'info' ? 'text-primary border-b-2 border-primary' : 'text-muted hover:text-foreground'}`}
          >
            Informações
          </button>
          <button
            onClick={() => setAba('relatorios')}
            className={`px-6 py-3 font-montserrat font-bold text-sm transition-colors flex items-center gap-2 ${aba === 'relatorios' ? 'text-primary border-b-2 border-primary' : 'text-muted hover:text-foreground'}`}
          >
            <Trophy size={14} />
            Relatórios do Robô
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          {aba === 'info' ? (
            <>
              <p className="text-primary font-montserrat text-sm font-medium tracking-wide mb-4">Forex · Índices · Bitcoin</p>
              <div className="mb-4">
                <h4 className="font-montserrat font-semibold text-foreground text-sm uppercase tracking-wider mb-2">Introdução</h4>
                <p className="text-muted leading-relaxed text-sm">Desenvolvemos soluções sob medida para robôs no mercado internacional, incluindo pares de moedas, índices globais e criptomoedas.</p>
              </div>
              <div className="mb-6 border border-dashed border-foreground/10 rounded-lg p-4 bg-surface-light/50">
                <h4 className="font-montserrat font-semibold text-foreground text-sm uppercase tracking-wider mb-2">Funcionamento</h4>
                <p className="text-muted/60 italic text-sm">Detalhes sobre funcionamento e estratégias serão adicionados em breve.</p>
              </div>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-montserrat font-bold text-sm hover:brightness-110 transition-all active:scale-95">
                Conhecer Robô Bitcoin Viking
              </button>
            </>
          ) : (
            <>
              {/* Sub-abas período */}
              <div className="flex gap-2 mb-6">
                {['T1 2026'].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriodo(p)}
                    className="px-4 py-2 rounded-lg font-montserrat font-bold text-sm transition-all"
                    style={{
                      backgroundColor: periodo === p ? '#f59e0b' : '#1e293b',
                      color: periodo === p ? '#1a1a2e' : '#94a3b8',
                      boxShadow: periodo === p ? '0 4px 0 #b45309' : '0 4px 0 #0f172a',
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>

              {/* Cards resumo */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="bg-surface-mid rounded-xl p-4 border border-foreground/5">
                  <p className="text-muted text-xs font-montserrat mb-1">Lucro Total</p>
                  <p className="text-green-400 font-montserrat font-bold text-lg">+${relatorio.lucro}</p>
                </div>
                <div className="bg-surface-mid rounded-xl p-4 border border-foreground/5">
                  <p className="text-muted text-xs font-montserrat mb-1">Retorno</p>
                  <p className="text-green-400 font-montserrat font-bold text-lg">+{relatorio.retorno}%</p>
                </div>
                <div className="bg-surface-mid rounded-xl p-4 border border-foreground/5">
                  <p className="text-muted text-xs font-montserrat mb-1">Win Rate</p>
                  <p className="text-primary font-montserrat font-bold text-lg">{relatorio.win_rate}%</p>
                </div>
                <div className="bg-surface-mid rounded-xl p-4 border border-foreground/5">
                  <p className="text-muted text-xs font-montserrat mb-1">Operações</p>
                  <p className="text-foreground font-montserrat font-bold text-lg">{relatorio.operacoes}</p>
                  <p className="text-xs text-muted">{relatorio.wins}W / {relatorio.losses}L</p>
                </div>
              </div>

              {/* Saldo */}
              <div className="bg-surface-mid rounded-xl p-4 border border-foreground/5 mb-4 flex justify-between items-center">
                <div>
                  <p className="text-muted text-xs font-montserrat mb-1">Depósito Inicial</p>
                  <p className="text-foreground font-montserrat font-bold">${relatorio.deposito.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-muted text-xs font-montserrat mb-1">Saldo Final</p>
                  <p className="text-green-400 font-montserrat font-bold">${relatorio.saldo_final.toLocaleString()}</p>
                </div>
              </div>

              <p className="text-muted text-xs font-montserrat text-center">
                Resultados baseados em backtest. Período: {relatorio.periodo}.
              </p>
            </>
          )}
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

      <img
        src={savingsEducation}
        alt=""
        aria-hidden
        className="absolute top-12 right-0 w-64 h-64 object-cover opacity-10 blur-[2px] pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-montserrat text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Produtos
          </span>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em] mb-4">
            Robôs para Todos os Mercados
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            4 ferramentas poderosas que geram soluções incríveis para suas operações automatizadas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-xl overflow-hidden border border-foreground/10">
            <div className="px-6 py-3 font-montserrat font-bold text-foreground text-sm tracking-wide" style={{ backgroundColor: '#1a5fa8' }}>
              Mercado Internacional
            </div>
            <div className="flex flex-wrap gap-3 p-6 bg-card">
              <button
                onClick={() => setModalAberto(true)}
                className="px-6 py-3 rounded-lg font-montserrat font-bold text-sm transition-transform hover:-translate-y-[3px]"
                style={{ backgroundColor: '#d4d4d4', color: '#1a1a2e', boxShadow: '0 4px 0 #aaaaaa' }}
              >
                BTC/USD
              </button>
              {['DAX', 'FOREX'].map((label) => (
                <button
                  key={label}
                  className="px-6 py-3 rounded-lg font-montserrat font-bold text-sm transition-transform hover:-translate-y-[3px]"
                  style={{ backgroundColor: '#d4d4d4', color: '#1a1a2e', boxShadow: '0 4px 0 #aaaaaa' }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-foreground/10">
            <div className="px-6 py-3 font-montserrat font-bold text-foreground text-sm tracking-wide" style={{ backgroundColor: '#3a7d1e' }}>
              Mercado Nacional
            </div>
            <div className="flex flex-wrap gap-3 p-6 bg-card">
              {['Mini Índice', 'Mini Dólar'].map((label) => (
                <button
                  key={label}
                  className="px-6 py-3 rounded-lg font-montserrat font-bold text-sm transition-transform hover:-translate-y-[3px]"
                  style={{ backgroundColor: '#ffd000', color: '#1a1a2e', boxShadow: '0 4px 0 #b38a00' }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div id="educação" className="mb-20">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-montserrat text-[10px] font-bold uppercase tracking-wider mb-4">
                Área Educacional
              </span>
              <h2 className="font-montserrat text-3xl font-bold text-foreground tracking-[-0.02em]">Aprenda a Operar com Método</h2>
            </div>
            <img src={savingsEducation} alt="Educação Financeira" className="w-28 h-28 object-contain rounded-xl hidden md:block" />
          </div>

          <div className="rounded-xl overflow-hidden border border-foreground/10 mb-10">
            <div className="px-6 py-3 font-montserrat font-bold text-foreground text-sm tracking-wide" style={{ backgroundColor: '#7c3aed' }}>
              Educação Financeira Viking
            </div>
            <div className="flex flex-wrap gap-3 p-6 bg-card">
              {['Módulo Básico', 'Módulo Intermediário', 'Módulo Avançado'].map((label) => (
                <button
                  key={label}
                  className="px-6 py-3 rounded-lg font-montserrat font-bold text-sm transition-transform hover:-translate-y-[3px]"
                  style={{ backgroundColor: '#ede9fe', color: '#1a1a2e', boxShadow: '0 4px 0 #6d28d9' }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {modules.map((mod) => (
              <div key={mod.id} className={`p-8 rounded-xl border transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] ${mod.active ? 'bg-surface-mid border-primary/20' : 'bg-surface-mid/40 border-foreground/5 opacity-60'}`}>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-montserrat text-primary font-bold">Módulo {mod.id}</span>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded ${mod.active ? 'bg-primary text-primary-foreground' : 'bg-foreground/10 text-foreground/40'}`}>
                    {mod.status}
                  </span>
                </div>
                <h3 className="font-montserrat text-lg font-bold text-foreground mb-4 leading-snug">{mod.title}</h3>
                <p className="text-muted text-sm mb-8">{mod.meta}</p>
                <button
                  disabled={!mod.active}
                  className={`w-full py-3 rounded-lg font-montserrat font-bold text-sm transition-all ${mod.active ? 'bg-foreground/5 hover:bg-primary hover:text-primary-foreground text-foreground' : 'bg-foreground/5 text-foreground/20 cursor-not-allowed'}`}
                >
                  {mod.active ? 'Acessar Módulo' : 'Bloqueado'}
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-10">
            <img src={eduMercado} alt="Mercado Financeiro" className="w-full h-44 object-cover rounded-xl border border-foreground/5" />
            <img src={eduFracoes} alt="Frações e Ativos" className="w-full h-44 object-cover rounded-xl border border-foreground/5" />
            <img src={eduReinvestimentos} alt="Reinvestimentos" className="w-full h-44 object-cover rounded-xl border border-foreground/5" />
          </div>

          <div className="bg-surface-mid rounded-2xl overflow-hidden border border-foreground/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="p-6 border-b border-foreground/5 bg-foreground/5">
              <h4 className="font-montserrat font-bold text-foreground text-sm">Conteúdo do Módulo 01</h4>
            </div>
            <div className="divide-y divide-foreground/5">
              {lessons.map((lesson, i) => (
                <div key={i} className="flex items-center justify-between p-5 hover:bg-foreground/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="font-montserrat text-xs text-muted">0{i + 1}</span>
                    {lesson.image && (
                      <img src={lesson.image} alt="" className="w-10 h-10 rounded object-cover hidden sm:block" />
                    )}
                    <span className={`font-opensans text-sm ${lesson.active ? 'text-foreground' : 'text-muted/50'}`}>{lesson.title}</span>
                  </div>
                  {lesson.active ? (
                    <span className="flex items-center gap-2 text-primary text-xs font-bold font-montserrat cursor-pointer">
                      <Play size={12} fill="currentColor" /> ASSISTIR
                    </span>
                  ) : (
                    <Lock size={14} className="text-muted/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="relative bg-card border border-foreground/5 rounded-lg p-6 hover:border-primary/30 transition-colors group"
            >
              {tool.optional && (
                <span className="absolute top-3 right-3 text-[10px] font-montserrat font-bold tracking-wider uppercase text-muted bg-surface-light px-2 py-0.5 rounded">
                  Opcional
                </span>
              )}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <tool.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">{tool.name}</h3>
              <p className="text-sm text-muted leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          {[
            {
              title: 'Mercado Brasileiro',
              subtitle: 'Ações da Bovespa · Mini Índice · Mini Dólar',
              intro: 'Desenvolvemos soluções sob medida para operações no mercado brasileiro, com robôs otimizados para os principais ativos da B3.',
              image: exponentialGrowth,
            },
            {
              title: 'Mercado Internacional',
              subtitle: 'Forex · Índices · Bitcoin',
              intro: 'Desenvolvemos soluções sob medida para robôs no mercado internacional, incluindo pares de moedas, índices globais e criptomoedas.',
              image: btcGraphic,
            },
          ].map((market) => (
            <div key={market.title} className="bg-card border border-foreground/5 rounded-xl overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img src={market.image} alt={market.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <div className="absolute bottom-4 left-8 flex items-center gap-3">
                  <Bot className="text-primary" size={22} />
                  <h3 className="font-montserrat text-2xl font-bold text-foreground">{market.title}</h3>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <p className="text-primary font-montserrat text-sm font-medium tracking-wide mb-6">{market.subtitle}</p>
                <div className="mb-6">
                  <h4 className="font-montserrat font-semibold text-foreground text-sm uppercase tracking-wider mb-2">Introdução</h4>
                  <p className="text-muted leading-relaxed">{market.intro}</p>
                </div>
                <div className="border border-dashed border-foreground/10 rounded-lg p-6 bg-surface-light/50">
                  <h4 className="font-montserrat font-semibold text-foreground text-sm uppercase tracking-wider mb-2">Funcionamento</h4>
                  <p className="text-muted/60 italic text-sm">Detalhes sobre funcionamento e estratégias serão adicionados em breve.</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-foreground/5 pt-12">
          <h3 className="font-montserrat text-lg font-bold text-foreground mb-4">Entre em Contato</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted">
            <a href="tel:+5551997337388" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone size={16} className="text-primary" />
              <span className="text-sm">(51) 99733-7388</span>
            </a>
            <a href="mailto:Investimentos.viking@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail size={16} className="text-primary" />
              <span className="text-sm">Investimentos.viking@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
