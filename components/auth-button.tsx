'use client'

import { Button } from "@/components/ui/button"
import { User, LogIn, UserPlus } from 'lucide-react'
import Link from "next/link"

interface AuthButtonProps {
  user: { id: number; email: string; role: string } | null
}

export function AuthButton({ user }: AuthButtonProps) {
  if (user) {
    return (
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <User className="h-5 w-5 text-teal-600" />
          <span className="text-gray-700 font-medium">Welcome!</span>
        </div>
        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-3">
      <Link href="/auth/signin">
        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
          <LogIn className="mr-2 h-4 w-4" />
          Sign In
        </Button>
      </Link>
      <Link href="/auth/signup">
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">
          <UserPlus className="mr-2 h-4 w-4" />
          Sign Up
        </Button>
      </Link>
    </div>
  )
}
