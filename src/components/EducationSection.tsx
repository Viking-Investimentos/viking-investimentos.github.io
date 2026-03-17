import { Play, Lock } from 'lucide-react';

const modules = [
  { id: '01', title: 'Noções Básicas sobre o Mercado Financeiro', status: 'Disponível', active: true, meta: '4 Aulas • Gratuito' },
  { id: '02', title: 'Análise Técnica e Leitura de Gráficos', status: 'Em Breve', active: false, meta: '8 Aulas' },
  { id: '03', title: 'Trading Algorítmico com MQL5', status: 'Em Breve', active: false, meta: '12 Aulas' },
];

const lessons = [
  { title: 'O que é o Mercado Financeiro?', active: true },
  { title: 'Participantes do Mercado', active: true },
  { title: 'Ativos Financeiros e Classes', active: false },
  { title: 'Como Funciona a Bolsa de Valores', active: false },
];

const EducationSection = () => (
  <section id="educação" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-montserrat text-[10px] font-bold uppercase tracking-wider mb-4">
          Área Educacional
        </span>
        <h2 className="font-montserrat text-3xl font-bold text-foreground tracking-[-0.02em]">Aprenda a Operar com Método</h2>
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

      <div className="bg-surface-mid rounded-2xl overflow-hidden border border-foreground/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
        <div className="p-6 border-b border-foreground/5 bg-foreground/5">
          <h4 className="font-montserrat font-bold text-foreground text-sm">Conteúdo do Módulo 01</h4>
        </div>
        <div className="divide-y divide-foreground/5">
          {lessons.map((lesson, i) => (
            <div key={i} className="flex items-center justify-between p-5 hover:bg-foreground/5 transition-colors">
              <div className="flex items-center gap-4">
                <span className="font-montserrat text-xs text-muted">0{i + 1}</span>
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
  </section>
);

export default EducationSection;
