import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RV Rentals Denver | Florida Blue Sky Adventures',
  description: 'Premium RV rentals in Denver. Experience Colorado in comfort with our luxury RV fleet.',
  keywords: 'RV rental Denver, Colorado RV rentals, luxury RV rental, Denver camping, Rocky Mountain RV, Colorado vacation rentals',
  icons: {
    icon: '/images/Logo-floridabluesky.png',
    apple: '/images/Logo-floridabluesky.png',
  },
  openGraph: {
    title: 'Mountain View RV Rentals Denver | Luxury RV Rentals in Colorado',
    description: 'Premium RV rentals in Denver, Colorado. Experience the Rockies in comfort with our luxury RVs.',
    images: ['/images/hero-rv.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}