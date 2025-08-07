'use client'

import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import { addToCart } from "@/actions/cart-actions"
import { useActionState } from "react"
import { useToast } from "@/hooks/use-toast"
import { useEffect } from "react"

interface AddToCartButtonProps {
  productId: number
  quantity?: number
}

export function AddToCartButton({ productId, quantity = 1 }: AddToCartButtonProps) {
  const { toast } = useToast()
  const [state, action, isPending] = useActionState(
    async () => await addToCart(productId, quantity), 
    null
  )

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Added to Cart!",
        description: state.message,
      })
    } else if (state?.success === false) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      })
    }
  }, [state, toast])

  return (
    <form action={action} className="w-full">
      <Button 
        type="submit" 
        disabled={isPending}
        className="w-full bg-teal-600 hover:bg-teal-700 text-white"
      >
        {isPending ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Adding...
          </>
        ) : (
          <>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </>
        )}
      </Button>
    </form>
  )
}
