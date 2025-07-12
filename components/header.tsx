"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [headerTransparent, setHeaderTransparent] = useState(false)
  const announcementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ref = announcementRef.current;
    if (!ref) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setHeaderTransparent(entry.intersectionRatio > 0);
      },
      { threshold: 0 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={announcementRef} className="bg-gray-900 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <img src="/ssd_icon_transparent.png" alt="SSD Logo" className="h-7 w-7 mr-2" />
            <span className="text-sm font-medium" style={{ color: '#0fbaee' }}>Welcome to Sport Supplements Direct</span>
          </div>
        </div>
      </div>
      <header className={`sticky top-0 z-50 transition-colors duration-300 ${headerTransparent ? 'bg-transparent border-none' : 'bg-white/95 backdrop-blur-sm border-b border-turquoise-100'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img src="/ssd_icon_transparent.png" alt="SSD Logo" className="w-10 h-10" />
              <div className="hidden sm:block">
                <span className="font-bold text-gray-900 text-lg">Sport Supplements</span>
                <div className="text-xs text-turquoise-600">Direct</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" className="px-4 py-2 text-gray-700 hover:text-turquoise-600 font-medium">
                    HOME
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-turquoise-600 font-medium">
                    SHOP
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4">
                      <div className="space-y-2">
                        <Link href="/whey-protein" className="block px-3 py-2 text-sm hover:bg-turquoise-50 rounded">
                          Whey Protein Range
                        </Link>
                        <Link href="/vegan-protein" className="block px-3 py-2 text-sm hover:bg-turquoise-50 rounded">
                          Vegan Protein Range
                        </Link>
                        <Link href="/amino-acids" className="block px-3 py-2 text-sm hover:bg-turquoise-50 rounded">
                          Amino Acids
                        </Link>
                        <Link href="/collagen" className="block px-3 py-2 text-sm hover:bg-turquoise-50 rounded">
                          Collagen
                        </Link>
                        <Link href="/carbohydrates" className="block px-3 py-2 text-sm hover:bg-turquoise-50 rounded">
                          Carbohydrates
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-turquoise-600 font-medium">
                    ABOUT
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" className="px-4 py-2 text-gray-700 hover:text-turquoise-600 font-medium">
                    BLOG
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-turquoise-600 font-medium">
                    CONTACT
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Australian Made Badge */}
            <div className="hidden md:flex items-center bg-turquoise-50 px-3 py-1 rounded-full">
              <span className="text-xs font-semibold text-turquoise-800">🇦🇺 AUSTRALIAN MADE</span>
            </div>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center">
                <Input type="search" placeholder="Search products..." className="w-48 h-9" />
                <Button size="sm" className="ml-2 bg-turquoise-500 hover:bg-turquoise-600">
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-turquoise-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </Button>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-turquoise-100">
              <div className="space-y-2">
                <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-turquoise-50">
                  HOME
                </Link>
                <div className="px-4 py-2">
                  <div className="font-medium text-gray-700 mb-2">SHOP</div>
                  <div className="pl-4 space-y-1">
                    <Link href="/whey-protein" className="block py-1 text-sm text-gray-600">
                      Whey Protein Range
                    </Link>
                    <Link href="/vegan-protein" className="block py-1 text-sm text-gray-600">
                      Vegan Protein Range
                    </Link>
                    <Link href="/amino-acids" className="block py-1 text-sm text-gray-600">
                      Amino Acids
                    </Link>
                    <Link href="/collagen" className="block py-1 text-sm text-gray-600">
                      Collagen
                    </Link>
                    <Link href="/carbohydrates" className="block py-1 text-sm text-gray-600">
                      Carbohydrates
                    </Link>
                  </div>
                </div>
                <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-turquoise-50">
                  ABOUT
                </Link>
                <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-turquoise-50">
                  BLOG
                </Link>
                <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-turquoise-50">
                  CONTACT
                </Link>
              </div>

              {/* Mobile Search */}
              <div className="px-4 pt-4 border-t border-turquoise-100 mt-4">
                <div className="flex">
                  <Input type="search" placeholder="Search products..." className="flex-1" />
                  <Button className="ml-2 bg-turquoise-500 hover:bg-turquoise-600">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
