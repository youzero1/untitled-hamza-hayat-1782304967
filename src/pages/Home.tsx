import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import About from '@/components/About';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <ContactSection />
      <Footer />
    </div>
  );
}
