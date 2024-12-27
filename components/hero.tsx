import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80"
        alt="RV in front of mountains"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40" />
      <div className="relative pt-32 pb-16 sm:pb-24 lg:pb-32 min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Experience Colorado in Comfort with Our Luxury RV Rentals
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore the Rocky Mountains in style with our premium RV rentals. 
              Based in Denver, we offer premium vehicles and exceptional service as a family-owned business.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                View Our Fleet
              </Button>
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}