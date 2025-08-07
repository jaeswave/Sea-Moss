// Enhanced accommodations with more detailed information
export const mockAccommodations = [
  {
    id: 1,
    name: "Oceanfront Villa Paradise",
    description: "Luxury 4-bedroom villa with panoramic ocean views, private beach access, infinity pool, and full kitchen. This stunning property features floor-to-ceiling windows, modern Caribbean architecture, and premium furnishings throughout. Perfect for families or groups seeking ultimate privacy and comfort in a tropical paradise setting.",
    price_per_night: 350.00,
    max_guests: 8,
    amenities: [
      "Private Beach", "Infinity Pool", "Full Kitchen", "WiFi", "Air Conditioning", 
      "Housekeeping", "Ocean View", "BBQ Area", "Parking", "Beach Towels", 
      "Snorkeling Gear", "Kayaks"
    ],
    images: ["/placeholder.svg?height=300&width=500"],
    vendor_name: "Canouan Luxury Villas",
    is_active: true,
    rating: 4.9,
    reviews: 67,
    bedrooms: 4,
    bathrooms: 3,
    property_type: "Villa",
    location: "Windward Bay"
  },
  {
    id: 2,
    name: "Tropical Garden Bungalow",
    description: "Charming 2-bedroom bungalow nestled in lush tropical gardens with traditional Caribbean architecture and modern amenities. Features a private patio, outdoor shower, and easy access to the beach. The perfect blend of authentic island living and contemporary comfort for couples or small families.",
    price_per_night: 180.00,
    max_guests: 4,
    amenities: [
      "Garden View", "Air Conditioning", "Breakfast Included", "Pool Access", "WiFi", 
      "Kitchenette", "Patio", "Beach Shuttle", "Outdoor Shower", "Hammock"
    ],
    images: ["/placeholder.svg?height=300&width=500"],
    vendor_name: "Island Garden Retreats",
    is_active: true,
    rating: 4.6,
    reviews: 134,
    bedrooms: 2,
    bathrooms: 2,
    property_type: "Bungalow",
    location: "Glossy Bay"
  },
  {
    id: 3,
    name: "Beachside Eco Lodge",
    description: "Sustainable eco-friendly lodge just steps from the pristine beach. Built with locally sourced materials and powered by solar energy, featuring an organic garden and rainwater collection system. Perfect for environmentally conscious travelers who want to minimize their footprint while enjoying luxury amenities.",
    price_per_night: 120.00,
    max_guests: 2,
    amenities: [
      "Beachfront", "Eco-Friendly", "Organic Garden", "Solar Power", "WiFi", 
      "Bicycle Rental", "Yoga Deck", "Composting Toilet", "Natural Ventilation"
    ],
    images: ["/placeholder.svg?height=300&width=500"],
    vendor_name: "Green Island Lodges",
    is_active: true,
    rating: 4.8,
    reviews: 89,
    bedrooms: 1,
    bathrooms: 1,
    property_type: "Eco Lodge",
    location: "Tamarind Beach"
  },
  {
    id: 4,
    name: "Sunset Penthouse Suite",
    description: "Luxurious penthouse suite with 360-degree views of the Caribbean Sea and surrounding islands. Features a rooftop terrace, jacuzzi, and premium amenities. This exclusive property offers the ultimate in privacy and sophistication, perfect for romantic getaways or special celebrations.",
    price_per_night: 450.00,
    max_guests: 2,
    amenities: [
      "Ocean View", "Rooftop Terrace", "Jacuzzi", "Full Kitchen", "WiFi", 
      "Air Conditioning", "Concierge Service", "Private Elevator", "Wine Cellar", "Butler Service"
    ],
    images: ["/placeholder.svg?height=300&width=500"],
    vendor_name: "Canouan Resort Collection",
    is_active: true,
    rating: 4.9,
    reviews: 45,
    bedrooms: 1,
    bathrooms: 2,
    property_type: "Penthouse",
    location: "Shell Beach"
  },
  {
    id: 5,
    name: "Family Beach House",
    description: "Spacious 3-bedroom beach house perfect for families, featuring a large deck, outdoor dining area, and direct beach access. The house includes a game room, multiple living areas, and a fully equipped kitchen. Located in a quiet residential area with easy access to local attractions and restaurants.",
    price_per_night: 280.00,
    max_guests: 6,
    amenities: [
      "Beachfront", "Full Kitchen", "Game Room", "WiFi", "Air Conditioning", 
      "Outdoor Dining", "Beach Chairs", "Snorkeling Gear", "Parking", "Laundry"
    ],
    images: ["/placeholder.svg?height=300&width=500"],
    vendor_name: "Island Family Rentals",
    is_active: true,
    rating: 4.7,
    reviews: 92,
    bedrooms: 3,
    bathrooms: 2,
    property_type: "Beach House",
    location: "Godahl Beach"
  },
  {
    id: 6,
    name: "Boutique Tree House",
    description: "Unique elevated tree house experience surrounded by tropical forest canopy. This architectural marvel combines luxury with nature, featuring panoramic views, open-air design, and sustainable construction. An unforgettable stay for adventurous travelers seeking something truly special.",
    price_per_night: 220.00,
    max_guests: 2,
    amenities: [
      "Forest View", "Eco-Friendly", "Unique Architecture", "WiFi", "Natural Ventilation", 
      "Bird Watching", "Hiking Trails", "Outdoor Shower", "Mosquito Netting"
    ],
    images: ["/placeholder.svg?height=300&width=500"],
    vendor_name: "Canopy Adventures",
    is_active: true,
    rating: 4.5,
    reviews: 38,
    bedrooms: 1,
    bathrooms: 1,
    property_type: "Tree House",
    location: "Mount Royal"
  }
]

// Update the existing mock data exports
export const mockSeamossProducts = [
  {
    id: 1,
    name: "Premium Gold Sea Moss",
    description: "Wildcrafted from the pristine waters of Canouan. Rich in 92 essential minerals including iodine, potassium, and calcium. Perfect for daily wellness routines.",
    price: 45.00,
    type: "gold",
    category: "seamoss",
    stock_quantity: 50,
    images: ["/placeholder.svg?height=300&width=400"],
    vendor_name: "SeaMoss Boss",
    is_active: true,
    rating: 4.9,
    reviews: 127
  },
  {
    id: 2,
    name: "Antioxidant Purple Sea Moss",
    description: "Rare purple variety harvested from deeper waters. Packed with anthocyanins and antioxidants. Known for its anti-inflammatory properties.",
    price: 55.00,
    type: "purple",
    category: "seamoss",
    stock_quantity: 30,
    images: ["/placeholder.svg?height=300&width=400"],
    vendor_name: "SeaMoss Boss",
    is_active: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    name: "Mineral-Rich Green Sea Moss",
    description: "Traditional green sea moss, perfect for smoothies and natural health supplements. High in iron, magnesium, and vitamins A, C, E, and K.",
    price: 40.00,
    type: "green",
    category: "seamoss",
    stock_quantity: 75,
    images: ["/placeholder.svg?height=300&width=400"],
    vendor_name: "SeaMoss Boss",
    is_active: true,
    rating: 4.7,
    reviews: 203
  }
]

export const mockExperiences = [
  {
    id: 1,
    name: "Sea Moss Farm & Snorkeling Tour",
    description: "Discover the underwater gardens where we harvest our sea moss. Learn about sustainable farming practices, then snorkel among vibrant coral reefs. Includes equipment, guide, and fresh sea moss tasting.",
    price: 85.00,
    duration_hours: 4,
    max_guests: 8,
    images: ["/placeholder.svg?height=250&width=400"],
    vendor_name: "SeaMoss Boss Tours",
    is_active: true,
    rating: 4.9,
    reviews: 156,
    location: "Canouan Marine Reserve",
    includes: ["Snorkeling equipment", "Professional guide", "Sea moss tasting", "Underwater photos"]
  },
  {
    id: 2,
    name: "Sunset Catamaran & Island Hopping",
    description: "Sail the turquoise waters around Canouan aboard our luxury catamaran. Visit secluded beaches, enjoy rum punch, and watch the Caribbean sunset. Perfect for couples and groups.",
    price: 120.00,
    duration_hours: 5,
    max_guests: 20,
    images: ["/placeholder.svg?height=250&width=400"],
    vendor_name: "Caribbean Sailing Co.",
    is_active: true,
    rating: 4.8,
    reviews: 234,
    location: "Canouan Marina",
    includes: ["Open bar", "Light snacks", "Snorkeling stops", "Professional crew"]
  },
  {
    id: 3,
    name: "Traditional Fishing & Cooking Experience",
    description: "Join local fishermen for an authentic Caribbean fishing experience. Learn traditional techniques, catch your dinner, then cook it beachside with local spices and sea moss recipes.",
    price: 95.00,
    duration_hours: 6,
    max_guests: 6,
    images: ["/placeholder.svg?height=250&width=400"],
    vendor_name: "Captain Marcus",
    is_active: true,
    rating: 4.9,
    reviews: 78,
    location: "Glossy Bay",
    includes: ["Fishing equipment", "Cooking lesson", "Fresh meal", "Local guide"]
  },
  {
    id: 4,
    name: "Wellness Retreat & Spa Day",
    description: "Rejuvenate with a full day of wellness activities. Sea moss body wraps, yoga on the beach, meditation sessions, and healthy Caribbean cuisine. Perfect for relaxation and detox.",
    price: 150.00,
    duration_hours: 8,
    max_guests: 12,
    images: ["/placeholder.svg?height=250&width=400"],
    vendor_name: "Island Wellness Spa",
    is_active: true,
    rating: 4.7,
    reviews: 92,
    location: "Tamarind Beach Resort",
    includes: ["Spa treatments", "Yoga session", "Healthy meals", "Wellness consultation"]
  }
]

export const mockVendorProducts = [
  {
    id: 4,
    name: "Pure Coconut Oil",
    description: "Cold-pressed virgin coconut oil made from fresh Canouan coconuts. Perfect for cooking, skincare, and hair care. No additives or preservatives.",
    price: 28.00,
    category: "vendor",
    vendor_name: "Island Naturals",
    images: ["/placeholder.svg?height=200&width=300"],
    rating: 4.7,
    reviews: 156,
    stock_quantity: 45
  },
  {
    id: 5,
    name: "Handcrafted Shell Jewelry",
    description: "Beautiful jewelry made from local shells and coral. Each piece is unique and handcrafted by local artisans. Includes necklaces, bracelets, and earrings.",
    price: 65.00,
    category: "vendor",
    vendor_name: "Coral Crafts Studio",
    images: ["/placeholder.svg?height=200&width=300"],
    rating: 4.8,
    reviews: 89,
    stock_quantity: 23
  },
  {
    id: 6,
    name: "Caribbean Spice Collection",
    description: "Authentic spice blend collection featuring nutmeg, cinnamon, allspice, and local herbs. Perfect for traditional Caribbean cooking and adding island flavor to any dish.",
    price: 35.00,
    category: "vendor",
    vendor_name: "Spice Island Trading",
    images: ["/placeholder.svg?height=200&width=300"],
    rating: 4.9,
    reviews: 234,
    stock_quantity: 67
  },
  {
    id: 7,
    name: "Artisan Rum Collection",
    description: "Premium aged rum distilled on the island using traditional methods. Smooth, rich flavor with notes of vanilla and tropical fruits. Limited edition bottles.",
    price: 85.00,
    category: "vendor",
    vendor_name: "Canouan Distillery",
    images: ["/placeholder.svg?height=200&width=300"],
    rating: 4.6,
    reviews: 78,
    stock_quantity: 34
  },
  {
    id: 8,
    name: "Woven Basket Collection",
    description: "Traditional hand-woven baskets made from local palm fronds. Various sizes available. Perfect for home decor, storage, or as unique Caribbean souvenirs.",
    price: 45.00,
    category: "vendor",
    vendor_name: "Traditional Crafts Co-op",
    images: ["/placeholder.svg?height=200&width=300"],
    rating: 4.5,
    reviews: 67,
    stock_quantity: 28
  }
]
