import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Only keep the bottom part of the footer */}
        <div className="border-t border-gray-800 pt-8">
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
              {[
                "Visa",
                "Mastercard",
                "PayPal",
                "Apple Pay",
              ].map((method) => (
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
