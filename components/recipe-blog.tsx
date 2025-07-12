import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"

export default function RecipeBlog() {
  const recipes = [
    {
      title: "WPC Protein Power Smoothie",
      description: "100% pure & unflavoured whey protein concentrate perfect for any recipe",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mass_gainer-PGvWzkUnGnYiwxASVZw5Ce0VTykxlh.webp",
      time: "5 mins",
      servings: "1",
      href: "/recipes/wpc-protein-smoothie",
    },
    {
      title: "Vanilla Casein Night Recovery",
      description: "Slow-release vanilla casein protein for overnight muscle recovery",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vanilla_casain_protein-G0Yjx0AMNvfqPUFyVGqUPXU4oRdPHo.webp",
      time: "3 mins",
      servings: "1",
      href: "/recipes/vanilla-casein-recovery",
    },
    {
      title: "Chocolate Casein Bedtime Shake",
      description: "Rich chocolate casein protein for sustained overnight nutrition",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chocolate_casein-JGEAhA1xtmGrlEghAhjH3kW9bN5DFz.webp",
      time: "5 mins",
      servings: "1",
      href: "/recipes/chocolate-casein-shake",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Recipes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover delicious and nutritious recipes using our premium supplements, created by our expert nutritionist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-900"
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{recipe.description}</p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent hover:bg-turquoise-50 hover:border-turquoise-500"
                >
                  <Link href={recipe.href}>View Recipe</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-turquoise-500 hover:bg-turquoise-600">
            <Link href="/blog">Read Our Blog</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
