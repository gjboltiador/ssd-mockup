import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/ssd_icon_transparent.png" alt="SSD Logo" className="w-8 h-8" />
              <div>
                <span className="font-bold text-lg">Sport Supplements</span>
                <div className="text-xs text-gray-400">Direct</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Australia's trusted source for premium, natural supplements. Expertly formulated for peak performance and
              optimal health.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-gray-400 hover:text-white">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/whey-protein" className="text-gray-400 hover:text-white">
                  Whey Protein
                </Link>
              </li>
              <li>
                <Link href="/vegan-protein" className="text-gray-400 hover:text-white">
                  Vegan Protein
                </Link>
              </li>
              <li>
                <Link href="/amino-acids" className="text-gray-400 hover:text-white">
                  Amino Acids
                </Link>
              </li>
              <li>
                <Link href="/collagen" className="text-gray-400 hover:text-white">
                  Collagen
                </Link>
              </li>
              <li>
                <Link href="/carbohydrates" className="text-gray-400 hover:text-white">
                  Carbohydrates
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 info@sport-supplements.com.au</p>
              <p>📞 1800 123 456</p>
              <p>📍 Melbourne, Australia</p>
              <p>🕒 Mon-Fri: 9AM-5PM AEST</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Sport Supplements Direct. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-gray-400 hover:text-white">
                Shipping Info
              </Link>
              <Link href="/returns" className="text-gray-400 hover:text-white">
                Returns
              </Link>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex justify-center mt-6 space-x-4">
            <div className="text-xs text-gray-400">We Accept:</div>
            <div className="flex space-x-2">
              {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((method) => (
                <div key={method} className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-400">
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
