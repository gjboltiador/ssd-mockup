"use client"

import { Inter } from "next/font/google"
import Header from "@/components/header"
import BenefitsBar from "@/components/benefits-bar"
import FeaturedCategories from "@/components/featured-categories"
import ExpertCredibility from "@/components/expert-credibility"
import RecipeBlog from "@/components/recipe-blog"
import TrustProof from "@/components/trust-proof"
import SSDTribe from "@/components/ssd-tribe"

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
        <SSDTribe />
      </main>
      <Footer />
    </div>
  )
}
