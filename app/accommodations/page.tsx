'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Users, Star, Calendar } from 'lucide-react'

const accommodations = [
  {
    id: 1,
    title: "Oceanfront Villa Paradise",
    price: 250,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    reviews: 67,
    maxGuests: 6,
    description: "Luxury villa with panoramic ocean views, private beach access, and modern amenities. Perfect for families or groups."
  },
  {
    id: 2,
    title: "Tropical Garden Apartment",
    price: 120,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    reviews: 134,
    maxGuests: 4,
    description: "Charming apartment surrounded by lush tropical gardens with easy beach access and authentic Caribbean charm."
  },
  {
    id: 3,
    title: "Beachside Bungalow",
    price: 180,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    reviews: 89,
    maxGuests: 2,
    description: "Intimate bungalow just steps from the beach, perfect for couples seeking a romantic Caribbean getaway."
  },
  {
    id: 4,
    title: "Island Apartment 1",
    price: 95,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    reviews: 156,
    maxGuests: 3,
    description: "Comfortable apartment with modern amenities and stunning sunset views from the private balcony."
  },
  {
    id: 5,
    title: "Seaside Studio",
    price: 75,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    reviews: 92,
    maxGuests: 2,
    description: "Cozy studio apartment with kitchenette and direct access to pristine white sand beaches."
  },
  {
    id: 6,
    title: "Family Beach House",
    price: 300,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    reviews: 45,
    maxGuests: 8,
    description: "Spacious beach house with multiple bedrooms, full kitchen, and private outdoor dining area."
  }
]

export default function AccommodationsPage() {
  const [selectedAccommodation, setSelectedAccommodation] = useState<typeof accommodations[0] | null>(null)

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Reservation request submitted! We will contact you shortly to confirm your booking.')
    setSelectedAccommodation(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Island Accommodations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay in comfort and style with our handpicked accommodations featuring stunning ocean views, 
            authentic Caribbean charm, and modern amenities.
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <Card key={accommodation.id} className="hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
              <div className="relative">
                <Image
                  src={accommodation.image || "/placeholder.svg"}
                  alt={accommodation.title}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{accommodation.rating}</span>
                </div>
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  Up to {accommodation.maxGuests} guests
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{accommodation.title}</h3>
                <div className="flex items-center text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">Canouan Island</span>
                  <span className="mx-2">•</span>
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-sm">{accommodation.reviews} reviews</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {accommodation.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">${accommodation.price}</span>
                    <span className="text-gray-500 text-sm">/night</span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => setSelectedAccommodation(accommodation)}
                      >
                        Book Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Reserve {selectedAccommodation?.title}</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleReservation} className="space-y-4">
                        <div>
                          <Label htmlFor="guestName">Full Name</Label>
                          <Input id="guestName" required />
                        </div>
                        <div>
                          <Label htmlFor="guestEmail">Email</Label>
                          <Input id="guestEmail" type="email" required />
                        </div>
                        <div>
                          <Label htmlFor="guestPhone">Phone Number</Label>
                          <Input id="guestPhone" type="tel" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="checkIn">Check-in Date</Label>
                            <Input id="checkIn" type="date" required />
                          </div>
                          <div>
                            <Label htmlFor="checkOut">Check-out Date</Label>
                            <Input id="checkOut" type="date" required />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="guests">Number of Guests</Label>
                          <select 
                            id="guests" 
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                          >
                            {[...Array(selectedAccommodation?.maxGuests || 1)].map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1} guest{i + 1 > 1 ? 's' : ''}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="specialRequests">Special Requests</Label>
                          <Textarea 
                            id="specialRequests" 
                            placeholder="Any special requests or requirements..."
                            rows={3}
                          />
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <Calendar className="mr-2 h-4 w-4" />
                          Confirm Reservation
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
