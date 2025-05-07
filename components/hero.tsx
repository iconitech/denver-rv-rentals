import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/images/rv-rentals-denver-hero.webp"
        alt="Luxury RV rental in Denver"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40" />
      <div className="relative pt-32 pb-16 sm:pb-24 lg:pb-32 min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Experience Colorado in Comfort with Our Affordable RV Rentals
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore the Rocky Mountains in style with our affordable RV rentals starting at $189/day. 
              Based in Denver, we offer a variety of vehicles and exceptional service as a family-owned business.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a href="#fleet">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                  View Our Fleet
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}