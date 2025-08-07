import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Leaf, Heart, Users, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">About SeaMoss Boss Canouan</h1>
            <p className="text-xl leading-relaxed">
              A family-driven company founded by Shavorn and Junior Stephens, dedicated to sharing 
              the natural healing power of premium sea moss and the authentic beauty of Canouan Island.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Founders</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Shavorn and Junior Stephens</strong> are lifelong residents of Canouan Island who grew up 
                understanding the incredible healing properties of sea moss. Their grandparents taught them traditional 
                harvesting methods that have been passed down through generations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                What started as a family tradition became a mission to share these natural treasures with the world, 
                while preserving the pristine environment and supporting their local community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, SeaMoss Boss Canouan represents not just premium sea moss products, but a gateway to 
                authentic Caribbean experiences and sustainable island living.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Shavorn and Junior Stephens"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by our commitment to quality, sustainability, and community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability</h3>
                <p className="text-gray-600 leading-relaxed">
                  We harvest sea moss using traditional, sustainable methods that protect our marine ecosystem for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every product is carefully wildcrafted and processed to maintain the highest nutritional value and purity.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  We support local families and preserve traditional knowledge while creating opportunities for our island community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Authenticity</h3>
                <p className="text-gray-600 leading-relaxed">
                  We share genuine Caribbean culture and experiences, staying true to our island roots and traditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Island Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Canouan Island Paradise"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Canouan Island</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Canouan is a small, pristine island in St. Vincent and the Grenadines, known for its crystal-clear waters, 
                white sand beaches, and vibrant marine life. The island's unique location in the Caribbean provides the 
                perfect conditions for growing the highest quality sea moss.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our waters are free from pollution and industrial runoff, ensuring that our sea moss contains the full 
                spectrum of 92 essential minerals that make it such a powerful superfood.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When you choose SeaMoss Boss Canouan, you're not just getting premium sea moss – you're supporting 
                sustainable practices and connecting with a piece of Caribbean paradise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
