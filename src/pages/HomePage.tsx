import Hero from '../components/Hero';
import FeatureShowcase from '../components/FeatureShowcase';
import InteractiveDemo from '../components/InteractiveDemo';
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
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
