import { motion } from 'framer-motion';

const Hero = () => (
  <section id="início" className="relative pt-36 pb-24 overflow-hidden min-h-[90vh] flex items-center">
    <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="font-montserrat font-bold text-4xl md:text-5xl tracking-tight text-foreground">
            VIKING
          </span>
          <span className="font-montserrat font-semibold text-xs md:text-sm tracking-[0.35em] text-primary">
            INVESTIMENTOS
          </span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-[-0.03em]"
      >
        Opere sem <span className="text-primary">emoção!</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="font-montserrat text-lg md:text-xl text-muted mb-12 max-w-2xl"
      >
        Viking — Algoritmos para Trades
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-5"
      >
        <a
          href="#contato"
          className="relative px-10 py-4 rounded-full font-montserrat font-bold text-base
            bg-primary text-primary-foreground
            shadow-[0_6px_0_0_hsl(74,100%,33%),0_10px_30px_hsl(74,100%,43%,0.3)]
            hover:shadow-[0_4px_0_0_hsl(74,100%,33%),0_8px_25px_hsl(74,100%,43%,0.5)]
            hover:translate-y-[2px] active:translate-y-[4px] active:shadow-[0_2px_0_0_hsl(74,100%,33%)]
            transition-all duration-150 select-none"
        >
          Acesso Gratuito
        </a>
        <a
          href="#produtos"
          className="relative px-10 py-4 rounded-full font-montserrat font-bold text-base
            border-2 border-primary text-foreground
            shadow-[0_6px_0_0_hsl(74,100%,33%,0.3),0_10px_30px_hsl(74,100%,43%,0.1)]
            hover:bg-primary hover:text-primary-foreground
            hover:shadow-[0_4px_0_0_hsl(74,100%,33%),0_8px_25px_hsl(74,100%,43%,0.4)]
            hover:translate-y-[2px] active:translate-y-[4px]
            transition-all duration-150 select-none"
        >
          Conhecer Produtos
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
