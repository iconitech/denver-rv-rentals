import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "Rocky Mountain National Park",
    description: "Experience the majestic peaks and wildlife of Colorado's most famous national park.",
    distance: "70 miles from Denver",
    image: "https://images.unsplash.com/photo-1565374392032-8427647c491a?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Garden of the Gods",
    description: "Explore stunning red rock formations against the backdrop of Pikes Peak.",
    distance: "65 miles from Denver",
    image: "https://images.unsplash.com/photo-1600200152755-0de75a6322e2?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Great Sand Dunes",
    description: "Visit North America's tallest sand dunes set against mountain backdrops.",
    distance: "230 miles from Denver",
    image: "https://images.unsplash.com/photo-1527333656061-ca7adf608ae1?auto=format&fit=crop&q=80"
  }
];

export function LocalDestinations() {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Popular Destinations
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover Colorado's most beautiful locations perfect for RV camping
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{destination.distance}</p>
                <p className="mt-2 text-gray-600">{destination.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}