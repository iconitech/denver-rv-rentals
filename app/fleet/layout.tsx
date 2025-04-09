import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RV Fleet Denver | Affordable Motorhome Rentals Near DEN Airport',
  description: 'Explore our affordable RV fleet in Denver starting at $189/night. Find the perfect RV for your Colorado adventure. Located near DEN airport.',
  metadataBase: new URL('https://rv-denver.com'),
  openGraph: {
    title: 'RV Fleet Denver | Affordable Motorhome Rentals Near DEN Airport',
    description: 'Explore our affordable RV fleet in Denver starting at $189/night. Find the perfect RV for your Colorado adventure. Located near DEN airport.',
    url: 'https://rv-denver.com/fleet',
    siteName: 'RV Rentals Denver',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RV Fleet Denver | Affordable Motorhome Rentals',
    description: 'Explore our affordable RV fleet in Denver. Located near DEN airport for convenient pickup.',
  },
}

export default function FleetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
