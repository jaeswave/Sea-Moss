import Link from 'next/link'
import { Waves, Facebook, Instagram, MessageCircle, CreditCard } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8 text-teal-400" />
              <div>
                <span className="text-xl font-bold">SeaMoss Boss</span>
                <div className="text-sm text-teal-400">Canouan</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium sea moss directly from Canouan Island, along with immersive experiences and cozy accommodations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="text-gray-300 hover:text-white transition-colors">Returns</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Grand Bay, Canouan Island</p>
              <p>St. Vincent and the Grenadines</p>
              <p>Phone: +1 754 227 1330</p>
              <p>Email: info@seamossbosscanouan.com</p>
            </div>
          </div>

          {/* Social & Payment */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <MessageCircle className="h-6 w-6" />
              </Link>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">We Accept</h4>
              <div className="flex space-x-2">
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-bold text-blue-600">VISA</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-bold text-red-600">MC</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-bold text-blue-800">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 SeaMoss Boss Canouan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
