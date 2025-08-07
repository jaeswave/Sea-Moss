// Database functions - currently using mock data
// Replace with real database calls when Neon is configured

import { 
  mockSeamossProducts, 
  mockExperiences, 
  mockAccommodations, 
  mockVendorProducts 
} from './mock-data'

// Mock database functions
export async function getProducts(category?: string) {
  // Simulate database delay
  await new Promise(resolve => setTimeout(resolve, 100))
  
  if (category === 'seamoss') {
    return mockSeamossProducts
  }
  if (category === 'vendor') {
    return mockVendorProducts
  }
  return [...mockSeamossProducts, ...mockVendorProducts]
}

export async function getExperiences() {
  await new Promise(resolve => setTimeout(resolve, 100))
  return mockExperiences
}

export async function getAccommodations() {
  await new Promise(resolve => setTimeout(resolve, 100))
  return mockAccommodations
}

export async function getProductById(id: number) {
  await new Promise(resolve => setTimeout(resolve, 100))
  const allProducts = [...mockSeamossProducts, ...mockVendorProducts]
  return allProducts.find(product => product.id === id)
}

export async function getExperienceById(id: number) {
  await new Promise(resolve => setTimeout(resolve, 100))
  return mockExperiences.find(experience => experience.id === id)
}

export async function getAccommodationById(id: number) {
  await new Promise(resolve => setTimeout(resolve, 100))
  return mockAccommodations.find(accommodation => accommodation.id === id)
}

// When you're ready to use a real database, uncomment and configure:
/*
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

export async function getAccommodations() {
  return await sql`
    SELECT a.*, u.first_name as vendor_name 
    FROM accommodations a 
    LEFT JOIN users u ON a.vendor_id = u.id 
    WHERE a.is_active = true
    ORDER BY a.created_at DESC
  `
}

export async function getAccommodationById(id: number) {
  const [accommodation] = await sql`
    SELECT a.*, u.first_name as vendor_name 
    FROM accommodations a 
    LEFT JOIN users u ON a.vendor_id = u.id 
    WHERE a.id = ${id} AND a.is_active = true
  `
  return accommodation
}
*/

import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export const sql = neon(process.env.DATABASE_URL);

