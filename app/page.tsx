import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Leaf, Home, Compass } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/70 to-blue-600/70 z-10"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Canouan Island Paradise - Crystal Clear Waters and White Sand Beaches"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Sea Moss &
            <span className="block text-teal-200">Island Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Discover the healing power of wildcrafted sea moss and authentic Caribbean hospitality in paradise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sea-moss">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg">
                Shop Sea Moss
              </Button>
            </Link>
            <Link href="/accommodations">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg">
                View Accommodations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Shavorn and Junior Stephens - SeaMoss Boss Founders"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SeaMoss Boss Canouan is a family-driven company founded by <strong>Shavorn and Junior Stephens</strong>, 
                providing premium sea moss directly from Canouan Island, along with immersive experiences and cozy accommodations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Born and raised on this beautiful Caribbean island, we're passionate about sharing the natural healing 
                power of sea moss and the authentic beauty of Canouan with the world. Every product is wildcrafted 
                with love, and every experience is designed to connect you with our island's spirit.
              </p>
              <Link href="/about">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our premium sea moss products, comfortable accommodations, and unforgettable island experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sea Moss Card */}
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-teal-600" />
                </div>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Premium Sea Moss"
                  width={300}
                  height={200}
                  className="rounded-lg mb-6 mx-auto"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Sea Moss</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Wildcrafted from the pristine waters of Canouan, our sea moss is rich in 92 essential minerals 
                  and perfect for your daily wellness routine.
                </p>
                <Link href="/sea-moss">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                    Shop Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Accommodations Card */}
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Island Accommodations"
                  width={300}
                  height={200}
                  className="rounded-lg mb-6 mx-auto"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Island Accommodations</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Stay in our comfortable, authentic Caribbean accommodations with stunning ocean views 
                  and easy access to pristine beaches.
                </p>
                <Link href="/accommodations">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Experiences Card */}
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Compass className="h-8 w-8 text-cyan-600" />
                </div>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Island Experiences"
                  width={300}
                  height={200}
                  className="rounded-lg mb-6 mx-auto"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Island Experiences</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Immerse yourself in authentic Caribbean culture with our guided tours, snorkeling adventures, 
                  and traditional island experiences.
                </p>
                <Link href="/experiences">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
