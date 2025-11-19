import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import SimpleWay from '../components/SimpleWay';
import AIFirstSection from '../components/AIFirstSection';
import CinematicHandoff from '../components/CinematicHandoff';
import PhilosophySection from '../components/PhilosophySection';
import FlowSection from '../components/FlowSection';
import IntelligenceSection from '../components/IntelligenceSection';
import TicketsSection from '../components/TicketsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import InsightsSection from '../components/InsightsSection';
import ChannelsSection from '../components/ChannelsSection';
import IntegrationsSection from '../components/IntegrationsSection';
import StorySection from '../components/StorySection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <SimpleWay />
      <AIFirstSection />
      <CinematicHandoff />
      <PhilosophySection />
      <FlowSection />
      <IntelligenceSection />
      <TicketsSection />
      <HowItWorksSection />
      <InsightsSection />
      <ChannelsSection />
      <IntegrationsSection />
      <StorySection />
      <FinalCTA />
      <Footer />
    </>
  );
}
