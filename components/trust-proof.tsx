"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, ShieldCheck, Flag, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TrustProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Sydney, NSW",
      rating: 5,
      text: "I've been using Sport Supplements Direct for over a year now. The quality is exceptional and I love that it's Australian made. The whey protein has really helped with my recovery after workouts.",
      product: "Premium Whey Protein",
    },
    {
      name: "James Thompson",
      location: "Melbourne, VIC",
      rating: 5,
      text: "As a personal trainer, I recommend SSD to all my clients. The transparency in ingredients and the expert nutritionist backing gives me confidence in the products.",
      product: "BCAA Recovery Formula",
    },
    {
      name: "Emma Chen",
      location: "Brisbane, QLD",
      rating: 5,
      text: "The vegan protein range is amazing! Finally found a plant-based protein that actually tastes good and mixes well. Plus, supporting an Australian business feels great.",
      product: "Plant-Based Protein Blend",
    },
  ]

  const certifications = [
    { name: "HACCP Certified", icon: ShieldCheck },
    { name: "Australian Made", icon: Flag },
    { name: "GMP Certified", icon: Award },
    { name: "TGA Approved", icon: CheckCircle },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Customer Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Join thousands of satisfied customers across Australia</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-turquoise-50 rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="mb-4">
                <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                <div className="text-sm text-gray-600">{testimonials[currentTestimonial].location}</div>
                <div className="text-sm text-turquoise-600 font-medium">
                  Verified Purchase: {testimonials[currentTestimonial].product}
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentTestimonial ? "bg-turquoise-500" : "bg-gray-300"}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted & Certified</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center">
                <cert.icon className="h-12 w-12 text-turquoise-500 mb-2" />
                <span className="text-base font-semibold text-gray-900 mt-2">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
