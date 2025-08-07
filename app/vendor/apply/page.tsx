'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Store } from 'lucide-react'
import Link from "next/link"
import { applyToBeVendor } from "@/actions/vendor-actions"
import { useActionState } from "react"

export default function VendorApplicationPage() {
  const [state, action, isPending] = useActionState(applyToBeVendor, null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-emerald-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button variant="outline" className="mr-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <Card className="border-emerald-100">
          <CardHeader className="text-center">
            <Store className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <CardTitle className="text-3xl font-bold text-emerald-900">
              Become a Vendor
            </CardTitle>
            <p className="text-emerald-700">
              Join our marketplace and share your authentic Caribbean products with the world
            </p>
          </CardHeader>
          <CardContent>
            <form action={action} className="space-y-6">
              <div>
                <Label htmlFor="businessName" className="text-emerald-800">Business Name *</Label>
                <Input
                  id="businessName"
                  name="businessName"
                  required
                  className="border-emerald-200 focus:border-emerald-500"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <Label htmlFor="businessDescription" className="text-emerald-800">Business Description *</Label>
                <Textarea
                  id="businessDescription"
                  name="businessDescription"
                  required
                  className="border-emerald-200 focus:border-emerald-500"
                  placeholder="Tell us about your business and products..."
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="contactPhone" className="text-emerald-800">Contact Phone *</Label>
                <Input
                  id="contactPhone"
                  name="contactPhone"
                  type="tel"
                  required
                  className="border-emerald-200 focus:border-emerald-500"
                  placeholder="+1 (784) 123-4567"
                />
              </div>

              <div>
                <Label htmlFor="businessAddress" className="text-emerald-800">Business Address</Label>
                <Textarea
                  id="businessAddress"
                  name="businessAddress"
                  className="border-emerald-200 focus:border-emerald-500"
                  placeholder="Your business address in Canouan..."
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3"
              >
                {isPending ? 'Submitting Application...' : 'Submit Application'}
              </Button>

              {state && (
                <div className={`text-center p-4 rounded-lg ${
                  state.success 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {state.message}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
