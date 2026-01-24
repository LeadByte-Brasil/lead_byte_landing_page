import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { MetricsShowcase } from "@/components/sections/MetricsShowcase";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturesGrid />
        <MetricsShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
