import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Eye } from "lucide-react"

export default function ProductShowcase() {
  const bestSellers = [
    {
      name: "Premium Whey Protein Isolate",
      price: "$49.95",
      originalPrice: "$59.95",
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=250&width=250",
      badge: "Best Seller",
    },
    {
      name: "Plant-Based Protein Blend",
      price: "$44.95",
      rating: 4.7,
      reviews: 89,
      image: "/placeholder.svg?height=250&width=250",
      badge: "Vegan",
    },
    {
      name: "BCAA Recovery Formula",
      price: "$34.95",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=250&width=250",
      badge: "New",
    },
    {
      name: "Marine Collagen Peptides",
      price: "$39.95",
      rating: 4.6,
      reviews: 78,
      image: "/placeholder.svg?height=250&width=250",
      badge: "Popular",
    },
  ]

  const newArrivals = [
    {
      name: "Organic Greens Powder",
      price: "$29.95",
      rating: 4.5,
      reviews: 23,
      image: "/placeholder.svg?height=250&width=250",
      badge: "New",
    },
    {
      name: "Pre-Workout Energy Blend",
      price: "$39.95",
      rating: 4.7,
      reviews: 45,
      image: "/placeholder.svg?height=250&width=250",
      badge: "New",
    },
  ]

  const ProductCard = ({ product }: { product: any }) => (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
                              className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {product.badge && (
          <span className="absolute top-2 left-2 bg-turquoise-500 text-white text-xs px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
        <Button
          size="sm"
          variant="secondary"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Eye className="w-4 h-4" />
        </Button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-turquoise-600">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
            )}
          </div>
        </div>

        <Button className="w-full bg-turquoise-500 hover:bg-turquoise-600">Add to Cart</Button>
      </div>
    </div>
  )

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Best Sellers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Best Sellers</h2>
            <p className="text-lg text-gray-600">Our most popular supplements trusted by thousands of Australians</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>

        {/* New Arrivals */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">New Arrivals</h2>
            <p className="text-lg text-gray-600">Latest additions to our premium supplement range</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {newArrivals.map((product, index) => (
              <div key={index} className="lg:col-start-2 first:lg:col-start-2">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
