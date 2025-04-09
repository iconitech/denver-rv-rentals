"use client";

import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Ruler, Fuel } from 'lucide-react'

// Note: metadata needs to be in a separate layout.tsx file for client components
const metadata = {
  title: 'RV Fleet Denver | Affordable Motorhome Rentals Near DEN Airport',
  description: 'Explore our affordable RV fleet in Denver starting at $199/night. Find the perfect RV for your Colorado adventure. Located near DEN airport.',
}

// This data structure helps with SEO by providing structured data for each RV
const rvs = [
  {
    id: 1,
    name: "2021 Winnebago Outlook White Edition Solar",
    description: "Our newest and most luxurious Class C RV, featuring solar panels and modern amenities. Perfect for extended trips and off-grid camping in Colorado's wilderness.",
    image: "/images/2021-winnebago-outlook.webp",
    specs: {
      sleeps: "6",
      length: "24'",
      fuel: "Gas",
    },
    price: "199",
    details: [
      "Solar panels for off-grid camping",
      "Full kitchen with modern appliances",
      "Spacious bathroom with shower",
      "Entertainment system",
      "Ample storage space"
    ],
    schemaData: {
      "@type": "Product",
      model: "2021 Winnebago Outlook",
      vehicleConfiguration: "Class C RV",
      fuelType: "Gas",
      vehicleInteriorType: "Sleeps 6"
    }
  },
  {
    id: 2,
    name: "2020 Winnebago Outlook",
    description: "Comfortable and reliable Class C RV, perfect for small families and weekend getaways. Ideal for exploring Rocky Mountain National Park and Colorado's scenic byways.",
    image: "/images/2020-winnebago-outlook.webp",
    specs: {
      sleeps: "5",
      length: "22'",
      fuel: "Gas",
    },
    price: "189",
    details: [
      "Well-equipped kitchen",
      "Comfortable sleeping areas",
      "Bathroom with shower",
      "Plenty of storage",
      "Easy to drive"
    ],
    schemaData: {
      "@type": "Product",
      model: "2020 Winnebago Outlook",
      vehicleConfiguration: "Class C RV",
      fuelType: "Gas",
      vehicleInteriorType: "Sleeps 5"
    }
  },
  {
    id: 3,
    name: "2015 Winnebago Access de Luxe",
    description: "Versatile RV, perfect for couples or families seeking adventure. Great for first-time RV renters and those wanting to explore Colorado's state parks.",
    image: "/images/2015-winnebago-access.webp",
    specs: {
      sleeps: "4",
      length: "20'",
      fuel: "Gas",
    },
    price: "169",
    details: [
      "Efficient layout",
      "Easy to maneuver",
      "Full kitchen",
      "Comfortable bed",
      "Great fuel economy"
    ],
    schemaData: {
      "@type": "Product",
      model: "2015 Winnebago Access",
      vehicleConfiguration: "Class C RV",
      fuelType: "Gas",
      vehicleInteriorType: "Sleeps 4"
    }
  },
  {
    id: 4,
    name: "2021 Thor Motor Coach Chateau 24F",
    description: "Versatile RV, perfect for couples or families seeking adventure. Great for first-time RV renters and those wanting to explore Colorado's state parks.",
    image: "/images/thor-motor-coach-24f.webp",
    specs: {
      sleeps: "4",
      length: "25'",
      fuel: "Gas",
    },
    price: "237",
    details: [
      "Efficient layout",
      "Easy to maneuver",
      "Full kitchen",
      "Comfortable bed",
      "Great fuel economy"
    ],
    schemaData: {
      "@type": "Product",
      model: "2021 Thor Motor Coach Chateau 24F",
      vehicleConfiguration: "Class C RV",
      fuelType: "Gas",
      vehicleInteriorType: "Sleeps 4"
    }
  }
]

// Schema markup for the fleet page
const fleetSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": rvs.map((rv, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@context": "https://schema.org",
      ...rv.schemaData,
      "name": rv.name,
      "description": rv.description,
      "image": rv.image,
      "offers": {
        "@type": "Offer",
        "price": rv.price,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  }))
}

function RVCard({ rv }: { rv: typeof rvs[0] }) {
  return (
    <Card className="w-full overflow-hidden">
      <div className="relative h-64 w-full">
        <Image
          src={rv.image}
          alt={rv.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-gray-600">
          {rv.name}
        </h2>
        <p className="mt-4 text-gray-600">
          {rv.description}
        </p>
        
        <div className="mt-6 flex items-center gap-x-6">
          <div className="flex items-center gap-x-2">
            <Users className="h-5 w-5 text-gray-400" />
            <span className="text-sm">Sleeps {rv.specs.sleeps}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <Ruler className="h-5 w-5 text-gray-400" />
            <span className="text-sm">{rv.specs.length}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <Fuel className="h-5 w-5 text-gray-400" />
            <span className="text-sm">{rv.specs.fuel}</span>
          </div>
        </div>

        <ul className="mt-6 space-y-2">
          {rv.details.map((detail, index) => (
            <li key={index} className="text-sm text-gray-600">
              • {detail}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            ${rv.price}<span className="text-sm text-gray-500">/night</span>
          </div>
          <Button
            onClick={() => window.open('https://checkout.wheelbasepro.com/reserve?owner_id=176271', '_blank')}
            className="bg-blue-700 hover:bg-blue-800"
          >
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function FleetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fleetSchema) }}
      />
      
      <Navigation />
      
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Denver RV Rental Fleet
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover our affordable selection of well-maintained RVs, perfect for exploring Colorado's majestic landscapes. 
              Located near Denver International Airport (DEN) for convenient pickup and drop-off.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {rvs.map((rv) => (
              <article key={rv.id} className="flex flex-col items-start">
                <RVCard rv={rv} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
