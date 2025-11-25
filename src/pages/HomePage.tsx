import Hero from '../components/Hero';
import FeatureShowcase from '../components/FeatureShowcase';
import InteractiveDemo from '../components/InteractiveDemo';
import UseCaseSection from '../components/UseCaseSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureShowcase />
      <InteractiveDemo />
      <UseCaseSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
