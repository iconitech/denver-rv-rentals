import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { RvFleet } from '@/components/rv-fleet';
import { Testimonials } from '@/components/testimonials';
import { ContactSection } from '@/components/contact-section';
import { LocalDestinations } from '@/components/local-destinations';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <RvFleet />
      <LocalDestinations />
      <Testimonials />
      <ContactSection />
    </>
  );
}