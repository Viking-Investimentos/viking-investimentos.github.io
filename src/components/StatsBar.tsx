const stats = [
  { label: 'Alunos', value: '+500' },
  { label: 'Módulos', value: '12' },
  { label: 'Win Rate EA', value: '68%', lime: true },
  { label: 'Plataforma', value: 'MT5' },
];

const StatsBar = () => (
  <section className="bg-surface-mid border-y border-foreground/5 py-12">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div className={`font-montserrat text-3xl font-bold tabular-nums mb-1 ${stat.lime ? 'text-primary' : 'text-foreground'}`}>
            {stat.value}
          </div>
          <div className="font-opensans text-xs uppercase tracking-widest text-muted">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
