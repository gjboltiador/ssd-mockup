import { Button } from "@/components/ui/button"

export default function SweetReward() {
  return (
    <section className="relative min-h-[500px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/subscribe/subscribe.png')` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-2">
        <div className="text-center text-white max-w-3xl mx-auto w-full">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3">Sweet Rewards Await</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and unlock exclusive discounts, early access to new products, and personalized nutrition tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mx-auto items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-3 py-2 rounded-lg border-0 text-gray-900 focus:outline-none focus:ring-2 focus:ring-turquoise-500 text-sm"
            />
            <Button className="bg-turquoise-500 hover:bg-turquoise-600 text-white font-semibold px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-base md:px-10 md:py-3 md:text-lg">
              Subscribe Now
            </Button>
          </div>
          <p className="text-xs sm:text-sm opacity-90 mt-3">
            Join thousands of fitness enthusiasts across Australia
          </p>
        </div>
      </div>
    </section>
  )
} 