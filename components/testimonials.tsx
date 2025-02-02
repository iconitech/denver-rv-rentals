import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Cornelius",
    location: "Middletown, DE",
    text: "The RV unit was great for climbing the steep Big Horn Mountains in Wyoming, reasonable on fuel, and comfortable for sleeping and relaxing. Kai was always available to answer questions and very knowledgeable about his RV units. We rate Kai and his unit a high 5 star; he's trustworthy and his RV passed the road-test on flat land as well as mountains.",
    rating: 5
  },
  {
    id: 2,
    name: "Helmut",
    location: "Bend, OR",
    text: "The RV is beautifully decorated, spotlessly clean, roomy yet cozy. The size (24') was perfect, easy to maneuver and park. All equipment worked flawlessly. Kai even picked us up from the Denver airport - a nice touch showing their attention to customer experience. Highly recommend!",
    rating: 5
  },
  {
    id: 3,
    name: "Melanie",
    location: "Munich, Germany",
    text: "Renting with Kai and Lisa was a breeze - an absolute perfect first RV experience. The RV was clean, nice and just what we needed. They were very friendly and experienced, willing to answer any questions before or during the trip. Thank you for making this a great experience!",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Read reviews from our international community of happy travelers
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gray-50 hover:bg-gray-100 transition-colors">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 line-clamp-6">{testimonial.text}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}