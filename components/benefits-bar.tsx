import { Factory, Leaf, Shield, Truck } from "lucide-react"

export default function BenefitsBar() {
  const benefits = [
    {
      icon: Factory,
      title: "Australian Made & Packed",
      description: "Proudly manufactured in Australia",
    },
    {
      icon: Leaf,
      title: "100% Natural Ingredients",
      description: "No artificial additives or fillers",
    },
    {
      icon: Shield,
      title: "HACCP Accredited",
      description: "Highest quality standards",
    },
    {
      icon: Truck,
      title: "Free Shipping Over $50",
      description: "Fast delivery across Australia",
    },
  ]

  return (
    <section className="hidden md:block bg-turquoise-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-turquoise-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
