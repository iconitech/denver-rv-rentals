"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Have questions? We're here to help you plan your perfect RV adventure.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-blue-700 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">8500 Peña Blvd Denver, CO 80249</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-blue-700 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">(720) 9-RENTRV</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="h-6 w-6 text-blue-700 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@rv-denver.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-blue-700 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p className="text-gray-600">Mon-Sat: 8am - 8pm</p>
                  <p className="text-gray-600">Sunday: 10am - 4pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <Input id="first-name" name="first-name" required className="mt-1" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <Input id="last-name" name="last-name" required className="mt-1" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input id="email" name="email" type="email" required className="mt-1" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <Input id="phone" name="phone" type="tel" className="mt-1" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" name="message" rows={4} required className="mt-1" />
              </div>

              <Button 
                type="button" 
                className="w-full bg-blue-700 hover:bg-blue-800"
                onClick={() => {
                  const firstName = (document.getElementById('first-name') as HTMLInputElement)?.value || '';
                  const lastName = (document.getElementById('last-name') as HTMLInputElement)?.value || '';
                  const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
                  const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
                  const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';

                  const subject = `New Contact Form Submission from ${firstName} ${lastName}`;
                  const body = `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}`;

                  window.location.href = `mailto:info@rv-denver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}