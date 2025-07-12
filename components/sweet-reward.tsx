import { Button } from "@/components/ui/button"

export default function SweetReward() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full aspect-[16/5] relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/subscribe/subscribe.png')`,
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-start justify-center text-left text-white px-8 md:px-16 lg:px-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Sweet Rewards Await
          </h2>
          <p className="text-base md:text-lg mb-6 max-w-md">
            Subscribe to our newsletter and unlock exclusive discounts, early access to new products, and personalized nutrition tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-3 py-2 rounded-lg border-0 text-gray-900 focus:outline-none focus:ring-2 focus:ring-turquoise-500 text-sm"
            />
            <Button className="bg-turquoise-500 hover:bg-turquoise-600 text-white font-semibold px-6 py-2 text-sm">
              Subscribe Now
            </Button>
          </div>
          <p className="text-xs opacity-90 mt-3">
            Join thousands of fitness enthusiasts across Australia
          </p>
        </div>
      </div>
    </section>
  )
} 