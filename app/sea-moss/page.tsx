'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useCart } from '@/components/cart-provider'
import { useToast } from '@/hooks/use-toast'
import { ShoppingCart, Star } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Gold Sea Moss - Premium Grade",
    price: 45.00,
    type: "Gold",
    size: "4oz",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 127,
    description: "Wildcrafted from the pristine waters of Canouan. Rich in 92 essential minerals."
  },
  {
    id: 2,
    name: "Purple Sea Moss - Rare Variety",
    price: 55.00,
    type: "Purple",
    size: "4oz",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 89,
    description: "Rare purple variety with high antioxidant content and anti-inflammatory properties."
  },
  {
    id: 3,
    name: "Green Sea Moss - Traditional",
    price: 40.00,
    type: "Green",
    size: "4oz",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 203,
    description: "Traditional green sea moss, perfect for smoothies and daily wellness routines."
  },
  {
    id: 4,
    name: "Gold Sea Moss - Large Pack",
    price: 85.00,
    type: "Gold",
    size: "8oz",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 67,
    description: "Larger pack of our premium gold sea moss for extended use."
  },
  {
    id: 5,
    name: "Sea Moss Gel - Ready to Use",
    price: 35.00,
    type: "Gel",
    size: "16oz",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 156,
    description: "Pre-made sea moss gel, ready to add to your smoothies and recipes."
  },
  {
    id: 6,
    name: "Mixed Variety Pack",
    price: 120.00,
    type: "Mixed",
    size: "Variety",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 45,
    description: "Sample pack with gold, purple, and green sea moss varieties."
  }
]

export default function SeaMossPage() {
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [sizeFilter, setSizeFilter] = useState<string>('all')
  const { addItem } = useCart()
  const { toast } = useToast()

  const filteredProducts = products.filter(product => {
    const matchesType = typeFilter === 'all' || product.type.toLowerCase() === typeFilter.toLowerCase()
    const matchesSize = sizeFilter === 'all' || product.size === sizeFilter
    return matchesType && matchesSize
  })

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    })
    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Sea Moss Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wildcrafted from the pristine waters of Canouan Island, our sea moss is nature's superfood 
            packed with 92 essential minerals for your wellness journey.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Type</label>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="gold">Gold</SelectItem>
                <SelectItem value="purple">Purple</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="gel">Gel</SelectItem>
                <SelectItem value="mixed">Mixed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Size</label>
            <Select value={sizeFilter} onValueChange={setSizeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Sizes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sizes</SelectItem>
                <SelectItem value="4oz">4oz</SelectItem>
                <SelectItem value="8oz">8oz</SelectItem>
                <SelectItem value="16oz">16oz</SelectItem>
                <SelectItem value="Variety">Variety Pack</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-teal-600 text-white">
                  {product.type}
                </Badge>
                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-teal-600">${product.price}</span>
                    <div className="text-sm text-gray-500">{product.reviews} reviews</div>
                  </div>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    {product.size}
                  </Badge>
                </div>
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products match your current filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
