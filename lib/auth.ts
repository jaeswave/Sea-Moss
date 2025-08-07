import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { sql } from './db'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword)
}

export function generateToken(userId: number, email: string, role: string) {
  return jwt.sign({ userId, email, role }, JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: number; email: string; role: string }
  } catch {
    return null
  }
}

export async function createUser(email: string, password: string, firstName: string, lastName: string, role: string = 'customer') {
  const hashedPassword = await hashPassword(password)
  
  const [user] = await sql`
    INSERT INTO users (email, password_hash, first_name, last_name, role)
    VALUES (${email}, ${hashedPassword}, ${firstName}, ${lastName}, ${role})
    RETURNING id, email, first_name, last_name, role
  `
  
  return user
}

export async function authenticateUser(email: string, password: string) {
  const [user] = await sql`
    SELECT id, email, password_hash, first_name, last_name, role
    FROM users WHERE email = ${email}
  `
  
  if (!user) return null
  
  const isValid = await verifyPassword(password, user.password_hash)
  if (!isValid) return null
  
  return {
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    role: user.role
  }
}
