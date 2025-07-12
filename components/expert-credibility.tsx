import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award } from "lucide-react"

export default function ExpertCredibility() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center items-center">
            <Image
              src="/sam-panton.webp"
              alt="Sam Paton - Nutritionist"
              width={400}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
            />
            <div className="absolute right-0 -bottom-4 bg-turquoise-500 text-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6" />
                <span className="font-semibold">Expert Approved</span>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert</h2>
              <h3 className="text-xl font-semibold text-turquoise-600 mb-2">Sam Paton</h3>
              <div className="flex items-center space-x-4 text-gray-600 mb-4">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>BSc Nutrition Science</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Master's of Dietetic Practice</span>
                </div>
              </div>
            </div>

            <blockquote className="text-lg text-gray-700 mb-6 italic border-l-4 border-turquoise-500 pl-6">
              "Every supplement in our range has been carefully formulated and tested to ensure optimal bioavailability
              and effectiveness. As a qualified nutritionist, I personally oversee our product development to guarantee
              you're getting the highest quality supplements for your health and performance goals."
            </blockquote>

            <div className="bg-turquoise-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Nutritionist-Approved Guarantee</h4>
              <p className="text-gray-700 text-sm">
                All our supplements are formulated under professional nutritionist guidance, ensuring optimal nutrient
                ratios and maximum absorption for peak performance results.
              </p>
            </div>

            <Button size="lg" className="bg-turquoise-500 hover:bg-turquoise-600">
              Meet Our Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
