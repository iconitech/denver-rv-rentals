import { Shield, Clock, MapPin, Phone, Wifi, Flame, Utensils } from 'lucide-react';

const features = [
  {
    name: 'Fast Support',
    description: 'We are always here to provide assistance for peace of mind during your journey.',
    icon: Phone,
  },
  {
    name: 'Full Insurance Coverage',
    description: 'Comprehensive insurance included with every rental for worry-free travel.',
    icon: Shield,
  },
  {
    name: 'Flexible Pickup Times',
    description: 'Choose your ideal pickup and return times that work best for you.',
    icon: Clock,
  },
  {
    name: 'Trip Planning Assistance',
    description: 'Expert advice on routes, campgrounds, and local attractions.',
    icon: MapPin,
  },
];

const upgrades = [
  {
    name: 'Wi-Fi Hotspot',
    description: 'Stay connected on the road with our mobile hotspot. Perfect for remote work or checking emails while traveling.',
    price: '$30',
    icon: Wifi,
  },
  {
    name: 'Camping Essentials Package',
    description: 'Complete kit including kitchen utensils, pots, pans, camping chairs, tabletop grill, and family games.',
    price: '$200',
    icon: Utensils,
  },
  {
    name: 'Gas Fire Pit',
    description: 'Enjoy a cozy campfire experience even during fire bans. Safe and approved for use at most campgrounds.',
    price: '$100',
    icon: Flame,
  },
];

export function Features() {
  return (
    <>
      <div className="py-24 bg-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-700">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for the perfect RV trip
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-blue-700" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-50 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-700">Optional Upgrades</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Enhance Your Adventure
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Add these convenient upgrades to make your RV experience even more comfortable and enjoyable.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {upgrades.map((upgrade) => (
                <div key={upgrade.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <upgrade.icon className="h-5 w-5 flex-none text-blue-700" aria-hidden="true" />
                    {upgrade.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{upgrade.description}</p>
                    <p className="mt-2 font-semibold text-blue-700">{upgrade.price}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}