"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Truck, Users, Bed, Fuel } from "lucide-react";

const rvs = [
  {
    id: 1,
    name: "2021 Winnebago Outlook White Edition Solar",
    description: "Luxury Class A motorhome perfect for families, featuring full amenities and plenty of space.",
    image: "/images/2021-winnebago-outlook.webp",
    specs: {
      sleeps: "6",
      length: "26ft",
      fuel: "Regular",
      transmission: "Automatic"
    },
    price: "259"
  },
  {
    id: 2,
    name: "2008 Coachmen Freelander",
    description: "Comfortable and reliable Class C RV, perfect for small families and weekend getaways.",
    image: "/images/2008-coachmen-freelander.webp",
    specs: {
      sleeps: "4",
      length: "23ft",
      fuel: "Gas",
      transmission: "Automatic"
    },
    price: "179"
  },
  {
    id: 3,
    name: "Rocky Mountain Camper Van",
    description: "Compact and versatile camper van, perfect for couples or solo travelers seeking adventure.",
    image: "https://images.unsplash.com/photo-1533591380348-14193f1de18f?auto=format&fit=crop&q=80",
    specs: {
      sleeps: "2",
      length: "19ft",
      fuel: "Gas",
      transmission: "Automatic"
    },
    price: "149"
  }
];

export function RvFleet() {
  return (
    <section id="fleet" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our RV Fleet</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Choose from our selection of well-maintained, fully-equipped RVs
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rvs.map((rv) => (
            <Card key={rv.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={rv.image}
                  alt={rv.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{rv.name}</h3>
                <p className="mt-2 text-gray-600">{rv.description}</p>
                
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Sleeps {rv.specs.sleeps}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">{rv.specs.length}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">{rv.specs.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Queen Bed</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="text-lg font-semibold">
                    ${rv.price}<span className="text-sm text-gray-500">/night</span>
                  </div>
                  <Button 
                    className="bg-blue-700 hover:bg-blue-800"
                    onClick={() => window.open('https://checkout.wheelbasepro.com/reserve?owner_id=176271', '_blank')}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}