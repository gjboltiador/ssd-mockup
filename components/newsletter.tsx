import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-16 bg-turquoise-500">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Exclusive Discounts & Recipes</h2>
          <p className="text-lg mb-8 opacity-90">
            Join our community and receive expert nutrition tips, exclusive offers, and delicious healthy recipes
            straight to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white text-gray-900"
              required
            />
            <Button type="submit" className="bg-white text-turquoise-600 hover:bg-gray-100 font-semibold">
              Subscribe
            </Button>
          </form>

          <p className="text-sm opacity-75">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
