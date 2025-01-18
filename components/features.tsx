import { Shield, Clock, MapPin, Phone, HelpCircle } from 'lucide-react';

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

const faqs = [
  {
    question: 'How much does it cost to rent an RV?',
    answer: 'Our pricing is seasonal, similar to vacation rentals. You will see the base rate for the coach you selected on the booking page but once you add your trip dates you may see a different rate. Winter months are considered our off-season so you will find less expensive rates than you would in the summer or during holidays. We also offer discounts throughout the year.',
  },
  {
    question: 'Do you have insurance coverage?',
    answer: 'Yes, we have full insurance coverage and it is included in the price.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We understand plans can change. Cancellations made 30 days or more before your trip start date are eligible for a full refund. Cancellations within 30 days may be subject to a cancellation fee. Please contact us for specific details about your reservation.',
  },
  {
    question: 'What do I need to bring for my RV trip?',
    answer: 'Our RVs come fully equipped with bedding, kitchen supplies, and basic camping gear. We provide a detailed checklist upon booking, but essentially you just need to bring your personal items, food, and a sense of adventure!',
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
            <h2 className="text-base font-semibold leading-7 text-blue-700">FAQ</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to know about renting an RV with us.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <dl className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
                  <dt className="flex items-start">
                    <HelpCircle className="h-6 w-6 flex-none text-blue-700 mt-1" aria-hidden="true" />
                    <span className="ml-3 text-lg font-semibold leading-7 text-gray-900">{faq.question}</span>
                  </dt>
                  <dd className="mt-4 ml-9">
                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
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