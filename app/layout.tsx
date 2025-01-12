import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RV Rentals in Denver by Florida Blue Sky Adventures',
  description: 'Experience Colorado in comfort with affordable RV rentals. Explore the Rocky Mountains with our well-maintained fleet of RVs. Perfect for families and adventurers.',
  keywords: 'RV rentals, Denver RV, Colorado RV rental, Rocky Mountains camping, family RV vacation, affordable RV rental Denver, Winnebago rental Denver',
  openGraph: {
    title: 'RV Rentals in Denver by Florida Blue Sky Adventures',
    description: 'Experience Colorado in comfort with affordable RV rentals. Explore the Rocky Mountains with our well-maintained fleet of RVs.',
    url: 'https://www.rv-denver.com',
    siteName: 'RV Rentals in Denver by Florida Blue Sky Adventures',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/rv-rentals-denver-1.webp',
        width: 1200,
        height: 630,
        alt: 'Florida Blue Sky Adventures RV Rentals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Blue Sky Adventures - RV Rentals in Denver',
    description: 'Experience Colorado in comfort with affordable RV rentals. Explore the Rocky Mountains with our fleet.',
    images: ['/images/rv-rentals-denver-1.webp'],
  },
  alternates: {
    canonical: 'https://www.rv-denver.com',
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_ID', // Add your Google Search Console verification ID
  },
  icons: {
    icon: '/images/Logo-floridabluesky.png',
    apple: '/images/Logo-floridabluesky.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RentalBusinessLocation',
              name: 'RV Rentals in Denver by Florida Blue Sky Adventures',
              description: 'Experience Colorado in comfort with affordable RV rentals. Explore the Rocky Mountains with our well-maintained fleet of RVs. Perfect for families and adventurers.',
              url: 'https://www.rv-denver.com',
              telephone: '(720) 9-RENTRV',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '8500 Peña Blvd',
                addressLocality: 'Denver',
                addressRegion: 'CO',
                postalCode: '80249',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 39.8561, // Replace with actual coordinates
                longitude: -104.6737, // Replace with actual coordinates
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '08:00',
                  closes: '20:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '10:00',
                  closes: '16:00',
                },
              ],
              priceRange: '$$',
              image: '/images/rv-rentals-denver-1.webp',
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}