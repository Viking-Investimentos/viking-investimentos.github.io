const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-baseline gap-2">
        <span className="font-montserrat font-bold text-xl tracking-tighter text-foreground">VIKING</span>
        <span className="font-montserrat font-medium text-[10px] tracking-[0.2em] text-primary">INVESTIMENTOS</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {['Início', 'Educação', 'Produtos', 'Contato'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="font-montserrat text-sm font-medium text-muted hover:text-foreground transition-colors">
            {item}
          </a>
        ))}
      </div>
      <button className="bg-primary hover:brightness-110 text-primary-foreground px-6 py-2.5 rounded-lg font-montserrat font-bold text-sm transition-all active:scale-95 shadow-[0_4px_20px_hsl(var(--primary)/0.15)]">
        Acesso Gratuito
      </button>
    </div>
  </nav>
);

export default Navbar;
