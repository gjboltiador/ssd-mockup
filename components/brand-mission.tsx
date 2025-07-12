export default function BrandMission() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-0 h-0 border-l-[200px] border-l-transparent border-r-[200px] border-r-transparent border-b-[200px] border-b-turquoise-500"></div>
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-t-[150px] border-t-turquoise-400"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              OUR MISSION: TO CREATE HIGH QUALITY SPORTS SUPPLEMENTS WITHOUT THE MARKETING JARGON AND BS
            </h2>
          </div>

          <div className="bg-turquoise-50 rounded-lg p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Sport Supplements Direct is proudly 100% Australian owned and operated. Our products are developed with
              the mindset of simplicity and purity, free from unnecessary fillers and preservatives. Our formulations
              are aligned with our mission of providing affordability without compromise and unnecessary marketing BS.
            </p>
          </div>

          {/* Key principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-turquoise-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">🇦🇺</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">100% Australian</h3>
              <p className="text-sm text-gray-600">Blended & packed in Australia with local ingredients</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-turquoise-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">🌱</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Clean Natural Nutrition</h3>
              <p className="text-sm text-gray-600">No unnecessary fillers, preservatives or marketing BS</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-turquoise-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">💪</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">High Quality</h3>
              <p className="text-sm text-gray-600">HACCP certified facility with rigorous quality standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
