import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
        }}
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
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Australian Made Supplements for Peak Performance
        </h1>

        <p className="text-xl md:text-2xl mb-8 font-medium">100% Natural • HACCP Accredited • Gluten-Free</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-turquoise-500 hover:bg-turquoise-600 text-lg px-8 py-3">
            Shop Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 bg-transparent"
          >
            Learn More
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 bg-turquoise-500 rounded-full flex items-center justify-center text-xs">✓</span>
            <span>Australian Owned</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 bg-turquoise-500 rounded-full flex items-center justify-center text-xs">✓</span>
            <span>HACCP Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 bg-turquoise-500 rounded-full flex items-center justify-center text-xs">✓</span>
            <span>Gluten-Free</span>
          </div>
        </div>
      </div>
    </section>
  )
}
