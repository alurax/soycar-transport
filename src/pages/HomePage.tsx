import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactFloat from '../components/ContactFloat';
import HeroSection from '../components/home/HeroSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import ServicesSection from '../components/home/ServicesSection';
import AllServicesGrid from '../components/home/AllServicesGrid';
import DestinationShowcase from '../components/home/DestinationShowcase';
import SocialProofSection from '../components/home/SocialProofSection';
import FinalCTASection from '../components/home/FinalCTASection';
import BookingWidget from '../components/BookingWidget';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      
      <section className="section" style={{ padding: 'var(--space-2xl) 0', marginTop: '-var(--space-4xl)', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <BookingWidget layout="horizontal" />
        </div>
      </section>

      <WhyChooseSection />
      <ServicesSection />
      <AllServicesGrid />
      <DestinationShowcase />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
      <ContactFloat />
    </>
  );
}