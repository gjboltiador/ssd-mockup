"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Australian Made Supplements for Peak Performance",
      subtitle: "100% Natural • HACCP Accredited • Gluten-Free",
      image: "/hero/women-tire.jpg",
      cta: "Shop Now",
      secondaryCta: "Learn More",
    },
    {
      id: 2,
      title: "SPORT SUPPLEMENT DIRECT",
      subtitle: "Optimise Your Athletic Performance",
      image: "/hero/man-workout.jpg",
      cta: "Get 10% Off",
      secondaryCta: "Learn More",
      promo: "USE CODE: TEST10",
    },
    {
      id: 3,
      title: "Trusted by Athletes Across Australia",
      subtitle: "Join thousands who choose quality supplements without the BS",
      image: "/hero/man-women-workout.jpg",
      cta: "Shop Now",
      secondaryCta: "Our Story",
    },
    {
      id: 4,
      title: "Complete Supplement Range",
      subtitle: "Everything you need for optimal performance and recovery",
      image: "/hero/exercise.jpg",
      cta: "Browse Products",
      secondaryCta: "Expert Advice",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative w-full overflow-hidden" style={{ aspectRatio: '16/5' }}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          />

          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[100px] border-b-turquoise-500"></div>
            <div className="absolute top-20 right-0 w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[80px] border-b-white"></div>
            <div className="absolute bottom-0 left-1/4 w-0 h-0 border-l-[120px] border-l-transparent border-r-[120px] border-r-transparent border-b-[120px] border-b-turquoise-400"></div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">{slide.title}</h1>
              <p className="text-base md:text-lg mb-6 font-medium">{slide.subtitle}</p>
              {slide.promo && (
                <div className="mb-6">
                  <span className="bg-turquoise-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                    {slide.promo}
                  </span>
                </div>
              )}
              {/* Trust Badges - only show on first slide */}
              {index === 0 && (
                <div className="flex flex-wrap justify-center gap-6 text-sm mb-12">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-turquoise-500 rounded-full flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Australian Owned</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-turquoise-500 rounded-full flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>HACCP Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-turquoise-500 rounded-full flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Gluten-Free</span>
                  </div>
                </div>
              )}
            </div>
            {/* Move buttons to lower right */}
            <div className="absolute bottom-8 right-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-turquoise-500 hover:bg-turquoise-600 text-lg px-8 py-3">
                {slide.cta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 bg-transparent"
              >
                {slide.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="sm"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 z-20"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 z-20"
        onClick={nextSlide}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-turquoise-500 scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
