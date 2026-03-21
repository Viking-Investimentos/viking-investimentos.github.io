import { Bot, ShieldCheck, TrendingUp, Layers, SplitSquareHorizontal, Phone, Mail } from 'lucide-react';
import btcGraphic from '@/assets/btc-hero-graphic.png';
import exponentialGrowth from '@/assets/exponential-growth.png';

const tools = [
  { name: 'BreakEven', icon: ShieldCheck, desc: 'Proteja seu capital automaticamente ao atingir o ponto de equilíbrio da operação.' },
  { name: 'Trailing Stop', icon: TrendingUp, desc: 'Maximize lucros acompanhando o movimento do preço em tempo real.' },
  { name: 'Gradiente', icon: Layers, desc: 'Estratégia opcional de entradas escalonadas para melhor preço médio.', optional: true },
  { name: 'Parciais', icon: SplitSquareHorizontal, desc: 'Realize lucros parciais de forma automática e inteligente.', optional: true },
];

const markets = [
  {
    title: 'Mercado Brasileiro',
    subtitle: 'Ações da Bovespa · Mini Índice · Mini Dólar',
    intro: 'Desenvolvemos soluções sob medida para operações no mercado brasileiro, com robôs otimizados para os principais ativos da B3.',
    placeholder: 'Detalhes sobre funcionamento e estratégias serão adicionados em breve.',
    image: exponentialGrowth,
  },
  {
    title: 'Mercado Internacional',
    subtitle: 'Forex · Índices · Bitcoin',
    intro: 'Desenvolvemos soluções sob medida para robôs no mercado internacional, incluindo pares de moedas, índices globais e criptomoedas.',
    placeholder: 'Detalhes sobre funcionamento e estratégias serão adicionados em breve.',
    cta: true,
    image: btcGraphic,
  },
];

const ProductsSection = () => (
  <section id="produtos" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
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

      {/* Educação Financeira Viking */}
      <div className="rounded-xl overflow-hidden border border-foreground/10 mb-8">
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

      {/* 3D Button Groups */}
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {/* Mercado Internacional */}
        <div className="rounded-xl overflow-hidden border border-foreground/10">
          <div className="px-6 py-3 font-montserrat font-bold text-foreground text-sm tracking-wide" style={{ backgroundColor: '#1a5fa8' }}>
            Mercado Internacional
          </div>
          <div className="flex flex-wrap gap-3 p-6 bg-card">
            {['BTC/USD', 'DAX', 'FOREX'].map((label) => (
              <button
                key={label}
                className="px-6 py-3 rounded-lg font-montserrat font-bold text-sm text-foreground/90 transition-transform hover:-translate-y-[3px]"
                style={{ backgroundColor: '#d4d4d4', color: '#1a1a2e', boxShadow: '0 4px 0 #aaaaaa' }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Mercado Nacional */}
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

      {/* Tools Grid */}
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

      {/* Market Sections */}
      <div className="space-y-12">
        {markets.map((market) => (
          <div
            key={market.title}
            className="bg-card border border-foreground/5 rounded-xl overflow-hidden"
          >
            {/* Market image banner */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={market.image}
                alt={market.title}
                className="w-full h-full object-cover"
              />
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

              <div className="mb-6 border border-dashed border-foreground/10 rounded-lg p-6 bg-surface-light/50">
                <h4 className="font-montserrat font-semibold text-foreground text-sm uppercase tracking-wider mb-2">Funcionamento</h4>
                <p className="text-muted/60 italic text-sm">{market.placeholder}</p>
              </div>

              {market.cta && (
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-montserrat font-bold text-sm hover:brightness-110 transition-all active:scale-95 shadow-[0_4px_20px_hsl(var(--primary)/0.15)]">
                  Conhecer Robô Bitcoin Viking
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Contact */}
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

export default ProductsSection;
