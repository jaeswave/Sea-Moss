'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Users, Star, CreditCard } from 'lucide-react'
import { bookAccommodation } from '@/actions/booking-actions'
import { useActionState } from 'react'

interface BookingFormProps {
  accommodation: {
    id: number
    name: string
    price_per_night: number
    max_guests: number
    rating: number
    reviews: number
  }
}

export function BookingForm({ accommodation }: BookingFormProps) {
  const [state, action, isPending] = useActionState(bookAccommodation, null)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)

  // Calculate number of nights and total price
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const nights = calculateNights()
  const subtotal = nights * accommodation.price_per_night
  const serviceFee = subtotal * 0.12 // 12% service fee
  const taxes = subtotal * 0.08 // 8% taxes
  const total = subtotal + serviceFee + taxes

  const handleSubmit = (formData: FormData) => {
    formData.append('accommodationId', accommodation.id.toString())
    formData.append('checkIn', checkIn)
    formData.append('checkOut', checkOut)
    formData.append('guests', guests.toString())
    formData.append('totalAmount', total.toString())
    action(formData)
  }

  return (
    <Card className="shadow-xl border-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              ${accommodation.price_per_night}
              <span className="text-lg font-normal text-gray-600">/night</span>
            </CardTitle>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            <span className="font-medium">{accommodation.rating}</span>
            <span className="text-gray-500 text-sm ml-1">({accommodation.reviews})</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          {/* Check-in / Check-out */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="checkIn" className="text-sm font-medium text-gray-700">
                Check-in
              </Label>
              <div className="relative">
                <Input
                  id="checkIn"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="pl-10"
                  required
                />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div>
              <Label htmlFor="checkOut" className="text-sm font-medium text-gray-700">
                Check-out
              </Label>
              <div className="relative">
                <Input
                  id="checkOut"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || new Date().toISOString().split('T')[0]}
                  className="pl-10"
                  required
                />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Guests */}
          <div>
            <Label htmlFor="guests" className="text-sm font-medium text-gray-700">
              Guests
            </Label>
            <div className="relative">
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                {[...Array(accommodation.max_guests)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} guest{i + 1 > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Price Breakdown */}
          {nights > 0 && (
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>${accommodation.price_per_night} × {nights} nights</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Service fee</span>
                <span>${serviceFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Taxes</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          )}

          {/* Guest Information */}
          <div className="border-t pt-4 space-y-4">
            <h3 className="font-semibold text-gray-900">Guest Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="John"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <Label htmlFor="specialRequests" className="text-sm font-medium text-gray-700">
              Special Requests (Optional)
            </Label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Any special requests or requirements..."
            />
          </div>

          <Button
            type="submit"
            disabled={isPending || nights === 0}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 font-semibold"
          >
            {isPending ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Processing Reservation...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Reserve Now
              </>
            )}
          </Button>

          {state && (
            <div className={`text-center p-3 rounded-lg text-sm ${
              state.success 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {state.message}
            </div>
          )}

          <p className="text-xs text-gray-500 text-center">
            You won't be charged yet. Review your reservation details before final booking.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
