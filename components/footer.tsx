import { MountainSnow, Palmtree } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:order-1">
          <div className="flex items-center justify-center space-x-2">
            <MountainSnow className="h-6 w-6 text-blue-500" />
            <p className="text-center text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} Florida Blue Sky Adventures Inc. All rights reserved.
            </p>
          </div>
          <Link 
            href="https://rvrentaltampabay.com" 
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Palmtree className="h-4 w-4" />
            <span>Planning a Florida vacation? Visit our Tampa Bay location</span>
          </Link>
        </div>
        <div className="flex justify-center space-x-6 mt-8 md:mt-0 md:order-2">
          <Link href="#" className="text-gray-400 hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-300">
            Terms of Service
          </Link>
          <Link href="#contact" className="text-gray-400 hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}