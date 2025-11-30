import Hero from '../components/Hero';
import FeatureShowcase from '../components/FeatureShowcase';
import UseCaseSection from '../components/UseCaseSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureShowcase />
      <UseCaseSection />
      <CTASection />
      <Footer />
    </>
  );
}
