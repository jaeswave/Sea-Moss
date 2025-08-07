'use server'

// Mock authentication - replace with real auth when ready
export async function signUp(formData: FormData) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  
  // Basic validation
  if (!email || !password || !firstName || !lastName) {
    return { success: false, message: 'All fields are required' }
  }
  
  if (password.length < 6) {
    return { success: false, message: 'Password must be at least 6 characters' }
  }
  
  return { 
    success: true, 
    message: 'Account created successfully! (Demo mode - no real account created)' 
  }
}

export async function signIn(formData: FormData) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  
  if (!email || !password) {
    return { success: false, message: 'Email and password are required' }
  }
  
  return { 
    success: true, 
    message: 'Signed in successfully! (Demo mode)' 
  }
}

export async function signOut() {
  // In demo mode, just redirect
  return { success: true, message: 'Signed out' }
}
