import { MountainSnow } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
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
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center space-x-2">
            <MountainSnow className="h-6 w-6 text-blue-500" />
            <p className="text-center text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} Florida Blue Sky Adventures Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}