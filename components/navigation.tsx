'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Menu, X, Waves } from 'lucide-react'
import { useCart } from '@/components/cart-provider'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-white shadow-sm border-b border-teal-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-teal-600" />
            <div>
              <span className="text-xl font-bold text-gray-800">SeaMoss Boss</span>
              <div className="text-xs text-teal-600 font-medium">Canouan</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              About Us
            </Link>
            <Link href="/sea-moss" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Sea Moss
            </Link>
            <Link href="/accommodations" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Accommodations
            </Link>
            <Link href="/experiences" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Experiences
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <Button variant="outline" size="sm" className="border-teal-200 hover:bg-teal-50">
              <ShoppingCart className="h-4 w-4" />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                  {itemCount}
                </Badge>
              )}
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-teal-100">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium py-2">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-teal-600 font-medium py-2">
                About Us
              </Link>
              <Link href="/sea-moss" className="text-gray-700 hover:text-teal-600 font-medium py-2">
                Sea Moss
              </Link>
              <Link href="/accommodations" className="text-gray-700 hover:text-teal-600 font-medium py-2">
                Accommodations
              </Link>
              <Link href="/experiences" className="text-gray-700 hover:text-teal-600 font-medium py-2">
                Experiences
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-teal-600 font-medium py-2">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
