'use server'

// Mock vendor actions - replace with real database when ready
export async function applyToBeVendor(formData: FormData) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const businessName = formData.get('businessName') as string
  const businessDescription = formData.get('businessDescription') as string
  const contactPhone = formData.get('contactPhone') as string
  const businessAddress = formData.get('businessAddress') as string
  
  if (!businessName || !businessDescription || !contactPhone) {
    return { success: false, message: 'Please fill in all required fields' }
  }
  
  return { 
    success: true, 
    message: 'Vendor application submitted successfully! We\'ll review it within 2-3 business days. (Demo mode)' 
  }
}

export async function addProduct(formData: FormData) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return { 
    success: true, 
    message: 'Product added successfully! (Demo mode)' 
  }
}
