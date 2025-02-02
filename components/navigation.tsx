"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MountainSnow, Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/Logo-floridabluesky.png"
                alt="Florida Blue Sky Adventures Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900">RV Rentals Denver</span>
                <span className="text-xs text-gray-600">by Florida Blue Sky Adventures Inc.</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center ml-4 pl-4 border-l border-gray-200">
              <Phone className="h-4 w-4 text-blue-700" />
              <span className="ml-2 text-sm text-gray-700">(720) 9-RENTRV</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-gray-700 hover:text-blue-700">About</Link>
            <Link href="/#destinations" className="text-gray-700 hover:text-blue-700">Destinations</Link>
            <Link href="/fleet" className="text-gray-700 hover:text-blue-700">Our Fleet</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-700">Contact</Link>
            <Link href="https://checkout.wheelbasepro.com/reserve?owner_id=176271" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-800 rounded-md py-2 px-4 text-white">Book Now</Link>
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
            <Link href="/#about" className="block px-3 py-2 text-gray-700 hover:text-blue-700">About</Link>
            <Link href="/#destinations" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Destinations</Link>
            <Link href="/fleet" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Our Fleet</Link>
            <Link href="/#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-700">Contact</Link>
            <Link href="https://checkout.wheelbasepro.com/reserve?owner_id=176271" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-700 hover:bg-blue-800 mt-2 py-2 text-white">Book Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}