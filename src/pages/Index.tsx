import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import EducationSection from '@/components/EducationSection';
import ProductsSection from '@/components/ProductsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => (
  <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
    <Navbar />
    <Hero />
    <StatsBar />
    <EducationSection />
    <ProductsSection />
    <CtaSection />
    <Footer />
  </div>
);

export default Index;
