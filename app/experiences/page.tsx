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
import { MapPin, Clock, Users, Star, Calendar } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: "Snorkeling Tour",
    price: 75,
    duration: "3 hours",
    maxPeople: 8,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    reviews: 156,
    description: "Explore vibrant coral reefs and swim with tropical fish in crystal-clear Caribbean waters. Equipment included."
  },
  {
    id: 2,
    title: "Beach Picnic Experience",
    price: 45,
    duration: "4 hours",
    maxPeople: 12,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    reviews: 89,
    description: "Enjoy a traditional Caribbean picnic on a secluded beach with local delicacies and refreshing drinks."
  },
  {
    id: 3,
    title: "Sea Moss Farm Tour",
    price: 35,
    duration: "2 hours",
    maxPeople: 15,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    reviews: 234,
    description: "Learn about sustainable sea moss farming and witness the harvesting process in our pristine waters."
  },
  {
    id: 4,
    title: "Sunset Sailing",
    price: 95,
    duration: "3 hours",
    maxPeople: 6,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    reviews: 67,
    description: "Sail into the Caribbean sunset aboard our traditional boat with complimentary rum punch and local snacks."
  },
  {
    id: 5,
    title: "Island Hiking Adventure",
    price: 55,
    duration: "5 hours",
    maxPeople: 10,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    reviews: 123,
    description: "Discover hidden trails, breathtaking viewpoints, and learn about local flora and fauna with our expert guides."
  },
  {
    id: 6,
    title: "Cultural Village Tour",
    price: 40,
    duration: "3 hours",
    maxPeople: 20,
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    reviews: 178,
    description: "Immerse yourself in authentic Caribbean culture, meet local artisans, and enjoy traditional music and dance."
  }
]

export default function ExperiencesPage() {
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null)

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Experience booking submitted! We will contact you shortly to confirm your reservation.')
    setSelectedExperience(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Island Experiences</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in authentic Caribbean culture and natural beauty with our curated collection 
            of unforgettable island experiences and adventures.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <Card key={experience.id} className="hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
              <div className="relative">
                <Image
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{experience.rating}</span>
                </div>
                <Badge className="absolute top-4 left-4 bg-cyan-600 text-white">
                  {experience.duration}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                <div className="flex items-center text-gray-500 mb-3 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Canouan Island</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{experience.duration}</span>
                  <span className="mx-2">•</span>
                  <Users className="h-4 w-4 mr-1" />
                  <span>Up to {experience.maxPeople}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {experience.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-cyan-600">${experience.price}</span>
                    <span className="text-gray-500 text-sm">/person</span>
                    <div className="text-xs text-gray-500">{experience.reviews} reviews</div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="bg-cyan-600 hover:bg-cyan-700 text-white"
                        onClick={() => setSelectedExperience(experience)}
                      >
                        Book Experience
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Book {selectedExperience?.title}</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleBooking} className="space-y-4">
                        <div>
                          <Label htmlFor="bookingName">Full Name</Label>
                          <Input id="bookingName" required />
                        </div>
                        <div>
                          <Label htmlFor="bookingEmail">Email</Label>
                          <Input id="bookingEmail" type="email" required />
                        </div>
                        <div>
                          <Label htmlFor="activityDate">Preferred Date</Label>
                          <Input id="activityDate" type="date" required />
                        </div>
                        <div>
                          <Label htmlFor="numberOfPeople">Number of People</Label>
                          <select 
                            id="numberOfPeople" 
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                          >
                            {[...Array(selectedExperience?.maxPeople || 1)].map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1} person{i + 1 > 1 ? 's' : ''}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="specialNote">Optional Note or Request</Label>
                          <Textarea 
                            id="specialNote" 
                            placeholder="Any special requests or dietary requirements..."
                            rows={3}
                          />
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between text-sm">
                            <span>Price per person:</span>
                            <span>${selectedExperience?.price}</span>
                          </div>
                          <div className="flex justify-between font-bold">
                            <span>Total (estimated):</span>
                            <span className="text-cyan-600">${selectedExperience?.price} × guests</span>
                          </div>
                        </div>
                        <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                          <Calendar className="mr-2 h-4 w-4" />
                          Confirm Booking
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
