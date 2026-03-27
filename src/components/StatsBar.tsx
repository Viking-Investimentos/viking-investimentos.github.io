import heroImage from '@/assets/viking-trading-bots-hero.png';

const StatsBar = () => (
  <section className="relative py-16 overflow-hidden">
    {/* Fog/sea background from the hero image */}
    <img
      src={heroImage}
      alt=""
      aria-hidden
      className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[2px]"
    />
    <div className="absolute inset-0 bg-background/70" />

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-[-0.03em] leading-[1.1]">
        Opere sem <span className="text-primary">emoção!</span>
      </h2>
      <p className="font-montserrat text-lg md:text-xl text-muted max-w-2xl mx-auto">
        Viking — Algoritmos para Trades
      </p>
    </div>
  </section>
);

export default StatsBar;
