"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MountainSnow, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <MountainSnow className="h-8 w-8 text-blue-700" />
              <span className="font-bold text-xl text-gray-900">RV Rentals Denver</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#fleet" className="text-gray-700 hover:text-blue-700">Our Fleet</Link>
            <Link href="#destinations" className="text-gray-700 hover:text-blue-700">Destinations</Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-blue-700">Reviews</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-700">Contact</Link>
            <Button className="bg-blue-700 hover:bg-blue-800" onClick={() => window.open('https://checkout.wheelbasepro.com/reserve?owner_id=176271', '_blank')}
>Book Now</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link href="#fleet" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Our Fleet</Link>
            <Link href="#destinations" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Destinations</Link>
            <Link href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Reviews</Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Contact</Link>
            <Button className="w-full bg-blue-700 hover:bg-blue-800 mt-2">Book Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
}