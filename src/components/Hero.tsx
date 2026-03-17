import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import btcGraphic from '@/assets/btc-hero-graphic.png';
import exponentialGrowth from '@/assets/exponential-growth.png';

const Hero = () => (
  <section id="início" className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

    {/* Floating decorative images */}
    <motion.img
      src={btcGraphic}
      alt=""
      aria-hidden
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 0.15, x: 0 }}
      transition={{ duration: 1.2 }}
      className="absolute top-24 -left-20 w-80 h-80 object-cover rounded-full blur-sm pointer-events-none select-none"
    />
    <motion.img
      src={exponentialGrowth}
      alt=""
      aria-hidden
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 0.12, x: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="absolute bottom-0 -right-16 w-72 h-72 object-cover rounded-full blur-sm pointer-events-none select-none"
    />

    <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl aspect-video rounded-2xl border-2 border-dashed border-primary/30 bg-surface-mid/50 flex items-center justify-center mb-12 group hover:border-primary/60 transition-colors cursor-pointer"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center pl-1 shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
            <Play fill="hsl(var(--primary-foreground))" color="hsl(var(--primary-foreground))" size={24} />
          </div>
          <span className="font-montserrat text-sm text-muted">vinheta.mp4</span>
        </div>
      </motion.div>

      <div className="w-24 h-1 bg-primary mb-6" />
      <h1 className="font-montserrat text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight tracking-[-0.02em]">
        Sistemas Algorítmicos de <span className="text-primary">Alta Performance</span>
      </h1>
      <p className="font-opensans italic text-muted text-lg max-w-2xl mb-10">
        "Educação financeira e tecnologia quantitativa para quem leva o mercado a sério."
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-montserrat font-bold transition-transform hover:scale-105">
          Começar Agora
        </button>
        <button className="border border-foreground/20 text-foreground px-8 py-4 rounded-lg font-montserrat font-bold hover:bg-foreground/5 transition-colors">
          Ver Produtos
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
