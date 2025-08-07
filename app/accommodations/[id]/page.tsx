import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Star, MapPin, Users, Bed, Bath, Wifi, Car, Utensils, Waves, Calendar, Clock, Shield } from 'lucide-react'
import { getAccommodationById } from '@/lib/db'
import { BookingForm } from '@/components/booking-form'
import { notFound } from 'next/navigation'

interface AccommodationPageProps {
  params: {
    id: string
  }
}

export default async function AccommodationPage({ params }: AccommodationPageProps) {
  const accommodation = await getAccommodationById(parseInt(params.id))
  
  if (!accommodation) {
    notFound()
  }

  const amenityIcons: Record<string, any> = {
    'WiFi': Wifi,
    'Private Beach': Waves,
    'Full Kitchen': Utensils,
    'Air Conditioning': Star,
    'Pool Access': Waves,
    'Parking': Car,
    'Ocean View': Waves,
    'Garden View': Star,
    'Breakfast Included': Utensils,
    'Housekeeping': Shield,
    'BBQ Area': Utensils,
    'Kitchenette': Utensils,
    'Beach Shuttle': Car,
    'Patio': Star,
    'Infinity Pool': Waves,
    'Beachfront': Waves,
    'Eco-Friendly': Star,
    'Organic Garden': Star,
    'Solar Power': Star,
    'Bicycle Rental': Car,
    'Yoga Deck': Star
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href="/accommodations">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Accommodations
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={accommodation.images?.[0] || `/placeholder.svg?height=500&width=800&query=${accommodation.name} luxury caribbean accommodation interior`}
                  alt={accommodation.name}
                  width={800}
                  height={500}
                  className="w-full h-96 object-cover"
                  priority
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center shadow-lg">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{accommodation.rating}</span>
                  <span className="text-xs text-gray-500 ml-1">({accommodation.reviews} reviews)</span>
                </div>
              </div>
              
              {/* Additional Images */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {[2, 3, 4, 5].map((index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=150&width=200&query=${accommodation.name} room ${index} caribbean luxury`}
                      alt={`${accommodation.name} - Image ${index}`}
                      width={200}
                      height={150}
                      className="w-full h-24 object-cover hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{accommodation.name}</h1>
                <Badge className="bg-teal-600 text-white">
                  {accommodation.bedrooms} bed • {accommodation.bathrooms} bath
                </Badge>
              </div>

              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Canouan Island, St. Vincent and the Grenadines</span>
                <span className="mx-3">•</span>
                <Users className="h-5 w-5 mr-2" />
                <span>Up to {accommodation.max_guests} guests</span>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {accommodation.description}
              </p>

              {/* Host Info */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">
                        {accommodation.vendor_name?.charAt(0) || 'H'}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Hosted by {accommodation.vendor_name}</h3>
                      <p className="text-gray-600 text-sm">Superhost • 5 years hosting</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What this place offers</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {accommodation.amenities?.map((amenity: string, index: number) => {
                  const IconComponent = amenityIcons[amenity] || Star
                  return (
                    <div key={index} className="flex items-center p-3 border rounded-lg">
                      <IconComponent className="h-5 w-5 text-teal-600 mr-3" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* House Rules */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">House Rules</h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-3" />
                  <span>Check-in: 3:00 PM - 9:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-3" />
                  <span>Check-out: 11:00 AM</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-3" />
                  <span>Maximum {accommodation.max_guests} guests</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-gray-500 mr-3" />
                  <span>No smoking • No parties or events</span>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Reviews ({accommodation.reviews})
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Sarah M.",
                    date: "December 2023",
                    rating: 5,
                    comment: "Absolutely stunning property with breathtaking ocean views. The host was incredibly welcoming and the amenities exceeded our expectations."
                  },
                  {
                    name: "James R.",
                    date: "November 2023", 
                    rating: 5,
                    comment: "Perfect location for a Caribbean getaway. The villa was spotless, well-equipped, and the private beach access was amazing."
                  },
                  {
                    name: "Maria L.",
                    date: "October 2023",
                    rating: 4,
                    comment: "Beautiful property with great amenities. The kitchen was fully stocked and the outdoor space was perfect for relaxing."
                  },
                  {
                    name: "David K.",
                    date: "September 2023",
                    rating: 5,
                    comment: "Exceeded all expectations! The sunset views from the terrace are unforgettable. Will definitely be back."
                  }
                ].map((review, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <p className="text-xs text-gray-500">{review.date}</p>
                        </div>
                        <div className="ml-auto flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BookingForm accommodation={accommodation} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
