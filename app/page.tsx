"use client"

import { Inter } from "next/font/google"
import Header from "@/components/header"
import BenefitsBar from "@/components/benefits-bar"
import FeaturedCategories from "@/components/featured-categories"
import ExpertCredibility from "@/components/expert-credibility"
import RecipeBlog from "@/components/recipe-blog"
import TrustProof from "@/components/trust-proof"

import Footer from "@/components/footer"
import ProductCards from "@/components/product-cards"
import SweetReward from "@/components/sweet-reward"
import BrandMission from "@/components/brand-mission"
import HeroCarousel from "@/components/hero-carousel"

const inter = Inter({ subsets: ["latin"] })

export default function HomePage() {
  return (
    <div className={`${inter.className} min-h-screen bg-white`}>
      <Header />
      <main>
        <HeroCarousel />
        <BenefitsBar />
        <FeaturedCategories />
        <ProductCards />
        <SweetReward />
        <ExpertCredibility />
        <BrandMission />
        <RecipeBlog />
        <TrustProof />
        {/* Subscribe Section */}
        <section className="mb-16">
          <div className="container mx-auto px-4">
            <div className="w-full aspect-[16/5] rounded-lg overflow-hidden flex flex-col items-center justify-center bg-gray-100">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6 text-center max-w-xl">Get the latest updates, exclusive offers, and expert tips delivered straight to your inbox. Join our community of health and fitness enthusiasts!</p>
              <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
                <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-turquoise-500" />
                <button type="submit" className="px-6 py-2 rounded bg-turquoise-500 text-white font-semibold hover:bg-turquoise-600 transition">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
