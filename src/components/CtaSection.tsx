import { Mail } from 'lucide-react';

const CtaSection = () => (
  <section id="contato" className="py-24 bg-surface-light relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <h2 className="font-montserrat text-3xl font-bold text-foreground mb-4 tracking-[-0.02em]">Fique por Dentro dos Lançamentos</h2>
      <p className="text-muted mb-10 max-w-md mx-auto">Novos módulos, ferramentas e o EA Viking BTC/USD chegando em breve.</p>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <div className="relative flex-grow">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="w-full bg-background border border-foreground/10 rounded-lg py-4 pl-12 pr-4 text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-montserrat font-bold hover:brightness-110 transition-colors">
          Entrar
        </button>
      </div>
    </div>
  </section>
);

export default CtaSection;
