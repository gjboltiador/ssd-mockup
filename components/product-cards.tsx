import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"

export default function ProductCards() {
  const products = [
    {
      name: "100% Whey Protein Isolate",
      subtitle: "Vanilla Natural Flavour",
      price: "$49.95",
      originalPrice: "$59.95",
      rating: 4.9,
      reviews: 156,
      protein: "28g",
      weight: "1KG NET",
      image: "/featured/SSD-UpdatedProductImages_2021_1080x.webp",
      badges: ["High in Protein", "Natural Nutrition", "Keto Friendly", "Australian Made"],
      isNew: true,
    },
    {
      name: "Casein Protein Night Recovery",
      subtitle: "Vanilla Natural Flavour",
      price: "$44.95",
      rating: 4.8,
      reviews: 89,
      protein: "24.1g",
      weight: "1KG NET",
      image: "/featured/vanilla_casain_protein.webp",
      badges: ["High in Protein", "Natural Nutrition", "Keto Friendly", "Australian Made"],
    },
    {
      name: "Mass Gainer Whey Protein",
      subtitle: "Chocolate Flavour",
      price: "$54.95",
      rating: 4.7,
      reviews: 124,
      protein: "32g",
      weight: "1KG NET",
      image: "/featured/mass_gainer.webp",
      badges: ["Creatine Enhanced", "Clean Bulk Nutrition", "Carb & Protein Blend", "Australian Made"],
    },
    {
      name: "Vegan Protein Blend",
      subtitle: "Plant-Based Chocolate",
      price: "$39.95",
      originalPrice: "$49.95",
      rating: 4.6,
      reviews: 102,
      protein: "25g",
      weight: "1KG NET",
      image: "/featured/Chocolate_casein.webp",
      badges: ["Vegan Friendly", "Natural Nutrition", "Keto Friendly", "Australian Made"],
      isNew: true,
    },
    {
      name: "Whey Protein Concentrate",
      subtitle: "Strawberry Flavour",
      price: "$47.95",
      originalPrice: "$57.95",
      rating: 4.8,
      reviews: 98,
      protein: "27g",
      weight: "1KG NET",
      image: "/featured/23_1080x.webp",
      badges: ["High in Protein", "Natural Nutrition", "Gluten Free", "Australian Made"],
    },
    {
      name: "Night Recovery Casein",
      subtitle: "Chocolate Flavour",
      price: "$45.95",
      rating: 4.7,
      reviews: 77,
      protein: "23g",
      weight: "1KG NET",
      image: "/featured/20_1080x.webp",
      badges: ["Slow Release", "Night Recovery", "Keto Friendly", "Australian Made"],
    },
    {
      name: "Bulk Gainer Protein",
      subtitle: "Vanilla Flavour",
      price: "$52.95",
      rating: 4.5,
      reviews: 110,
      protein: "30g",
      weight: "1KG NET",
      image: "/featured/choco_punch.png",
      badges: ["High Calorie", "Clean Bulk", "Carb & Protein Blend", "Australian Made"],
    },
    {
      name: "Vegan Protein Isolate",
      subtitle: "Natural Vanilla",
      price: "$42.95",
      rating: 4.6,
      reviews: 85,
      protein: "26g",
      weight: "1KG NET",
      image: "/featured/tropical_punch1.png",
      badges: ["Vegan Friendly", "Natural Nutrition", "Gluten Free", "Australian Made"],
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600">Premium Australian-made supplements with no marketing BS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden hover:bg-turquoise-50 border border-gray-900"
            >
              {product.isNew && (
                <div className="absolute top-0 right-0 z-10">
                  <div className="bg-turquoise-500 text-white px-4 py-2 text-sm font-bold transform rotate-45 translate-x-6 translate-y-2">
                    NEW!
                  </div>
                </div>
              )}

              <div className="relative h-56 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />

                {/* Geometric overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-turquoise-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 left-4 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[30px] border-b-turquoise-500/20"></div>
                </div>
              </div>

              <div className="p-3">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 italic">{product.subtitle}</p>
                </div>

                {/* Product highlights */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="bg-turquoise-500 text-white px-3 py-1 rounded-full font-bold">
                    {product.protein} PROTEIN
                  </div>
                  <div className="text-gray-600 font-medium">{product.weight}</div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.badges.slice(0, 2).map((badge, badgeIndex) => (
                    <span key={badgeIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
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

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-turquoise-600">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <Button className="bg-turquoise-500 hover:bg-turquoise-600 text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-turquoise-500 hover:bg-turquoise-600 text-white px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
