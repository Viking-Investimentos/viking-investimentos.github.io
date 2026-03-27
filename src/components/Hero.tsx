import heroImage from '@/assets/viking-trading-bots-hero.png';

const Hero = () => (
  <section id="início" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img
      src={heroImage}
      alt="Viking Trading Bots — Built to Conquer Markets"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
  </section>
);

export default Hero;
