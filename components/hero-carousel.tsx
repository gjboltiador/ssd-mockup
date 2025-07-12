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
    <section className="relative min-h-[500px] w-full flex items-center justify-center overflow-hidden">
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
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />

          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[100px] border-b-turquoise-500"></div>
            <div className="absolute top-20 right-0 w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[80px] border-b-white"></div>
            <div className="absolute bottom-0 left-1/4 w-0 h-0 border-l-[120px] border-l-transparent border-r-[120px] border-r-transparent border-b-[120px] border-b-turquoise-400"></div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-2">
            <div className="text-center text-white max-w-4xl mx-auto w-full">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 leading-tight">{slide.title}</h1>
              <p className="text-base sm:text-lg md:text-2xl mb-6 font-medium">{slide.subtitle}</p>
              {slide.promo && (
                <div className="mb-6">
                  <span className="bg-turquoise-500 text-white px-4 py-2 rounded-full text-base sm:text-lg font-bold">
                    {slide.promo}
                  </span>
                </div>
              )}
              {/* Trust Badges - only show on first slide */}
              {index === 0 && (
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm mb-8 sm:mb-12">
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
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center mt-4">
              <Button className="bg-turquoise-500 hover:bg-turquoise-600 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-3 md:text-lg">
                {slide.cta}
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-3 md:text-lg bg-transparent"
              >
                {slide.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      ))}

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
