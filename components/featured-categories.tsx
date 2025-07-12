"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRef, useEffect, useState } from "react"

export default function FeaturedCategories() {
  const categories = [
    {
      name: "Whey Protein",
      description: "Premium quality whey protein for muscle building and recovery",
      image: "/category/dumbell-matt.webp",
      href: "/whey-protein",
    },
    {
      name: "Vegan Protein",
      description: "Plant-based protein powders for all dietary preferences",
      image: "/category/dumbell.webp",
      href: "/vegan-protein",
    },
    {
      name: "Amino Acids",
      description: "Essential amino acids for enhanced performance",
      image: "/category/bike.webp",
      href: "/amino-acids",
    },
    {
      name: "Collagen",
      description: "Natural collagen supplements for joint and skin health",
      image: "/category/running.webp",
      href: "/collagen",
    },
  ]

  const gridRef = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const ref = gridRef.current;
    if (!ref) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium Australian-made supplements, carefully crafted for optimal performance and
            health.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            // 0 and 2: fly in from above, 1 and 3: fly in from below
            let animation = '';
            if (animate) {
              if (index % 2 === 0) {
                animation = 'animate-fly-in-down';
              } else {
                animation = 'animate-fly-in-up';
              }
            } else {
              animation = 'opacity-0';
            }
            return (
              <div
                key={index}
                className={`group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden hover:bg-turquoise-50 border border-gray-900 ${animation}`}
                style={{ transitionDelay: animate ? `${index * 120}ms` : '0ms' }}
              >
                <div
                  className="relative h-[500px] overflow-hidden bg-center bg-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url('${category.image}')` }}
                  aria-label={category.name}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                  <Button asChild className="w-full bg-turquoise-500 hover:bg-turquoise-600">
                    <Link href={category.href}>Shop Now</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
