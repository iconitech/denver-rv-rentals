import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Boulder, CO",
    text: "Our family had an amazing time exploring Rocky Mountain National Park. The RV was spotless and exactly as described. The team was incredibly helpful with all our questions.",
    rating: 5
  },
  {
    id: 2,
    name: "Mike Peterson",
    location: "Fort Collins, CO",
    text: "Perfect experience from start to finish. The RV was well-maintained and fully equipped. The staff went above and beyond to ensure we had a great trip.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Martinez",
    location: "Denver, CO",
    text: "We rented the 2021 Winnebago for a week-long trip to Maroon Bells. The RV handled beautifully and the customer service was exceptional.",
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
            Don't just take our word for it - hear from our happy travelers
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gray-50">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
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