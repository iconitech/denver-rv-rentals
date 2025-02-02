import { MountainSnow, HelpCircle, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const features = [
  {
    name: 'Fast Support',
    description: 'We are always here to provide assistance for peace of mind during your journey.',
    icon: MountainSnow,
  },
  {
    name: 'Full Insurance Coverage',
    description: 'Comprehensive insurance included with every rental for worry-free travel.',
    icon: MountainSnow,
  },
  {
    name: 'Flexible Pickup Times',
    description: 'Choose your ideal pickup and return times that work best for you.',
    icon: MountainSnow,
  },
  {
    name: 'Trip Planning Assistance',
    description: 'Expert advice on routes, campgrounds, and local attractions.',
    icon: MountainSnow,
  },
];

const faqs = [
  {
    question: 'How many miles are included?',
    answer: 'Renters are allowed 100 miles per night. If you go over this number of miles during your trip, you will be charged $ 0.69 per mile. You have the option to prepay for a discounted amount. RVs are not rental cars and should not be used to travel long distances in a short amount of time. Take your time and enjoy the journey!',
  },
  {
    question: 'How many generator hours are included?',
    answer: '4 hours of generator usage per day are free of charge. There is a $ 5 fee for every hour used over the allotted time. Generator can be used while driving but keep the limit in mind.',
  },
  {
    question: 'What are your pick up and drop off times?',
    answer: 'RV check in and check out times work similar to a hotel. The RV needs to be returned at 10:00 AM and can be checked out at 3:00 pm. This allows us time to clean and do a thorough systems check on the RVs between rentals. We have several options to move your pick up time forward up to 10:00 AM or your return time back to 3:00 PM. It is subject to availability at time of request.',
  },
  {
    question: 'Do you offer delivery?',
    answer: 'Delivery can be arranged in the Denver area. Average cost for delivery is between $50 and $ 150. Delivery to the Rocky Mountain National Park is $ 350.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We understand plans can change. Cancellations made 30 days or more before your trip start date are eligible for a full refund. Unfortunately cancellations within 30 days are not eligible for a refund.',
  },
  {
    question: 'What do I need to bring for my RV trip?',
    answer: 'Our RVs come fully equipped with all kitchen supplies (coffee maker, toaster, pots and pans etc.) and basic camping gear. Bedding can be booked for a small fee. Essentially you just need to bring your personal items, food, and a sense of adventure!',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-base text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

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
            <div className="divide-y divide-gray-200 rounded-lg bg-white shadow">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}