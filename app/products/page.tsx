import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Filter } from 'lucide-react'
import { getProducts } from '@/lib/db'
import { AddToCartButton } from '@/components/add-to-cart-button'

export default async function ProductsPage() {
  const products = await getProducts('seamoss')

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button variant="outline" className="mr-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-emerald-900">Premium Sea Moss</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product: any) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-emerald-100">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={product.images?.[0] || `/placeholder.svg?height=300&width=400&query=${product.type} sea moss dried caribbean`}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-emerald-600 text-white">
                  {product.type?.charAt(0).toUpperCase() + product.type?.slice(1)}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-2">{product.name}</h3>
                <p className="text-emerald-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-emerald-800">${product.price}</span>
                  <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">
                    {product.stock_quantity} in stock
                  </Badge>
                </div>
                <AddToCartButton productId={product.id} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
