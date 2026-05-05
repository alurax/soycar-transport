export interface Destination {
  name: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface TourGuideSection {
  id: string;
  title: string;
  subtitle: string;
  destinations: Destination[];
}

export const islandTours: TourGuideSection[] = [
  {
    id: 'tour-a',
    title: 'Tour A',
    subtitle: 'Lagoons & Hidden Beaches',
    destinations: [
      {
        name: 'Small Lagoon',
        description: 'Paddle through crystal-clear emerald waters surrounded by towering limestone cliffs. The Small Lagoon is a kayaker\'s paradise with hidden passages and stunning rock formations.',
        image: '/tours/small-lagoon.jpg',
        highlights: ['Kayaking through limestone cliffs', 'Crystal-clear emerald waters', 'Hidden passages']
      },
      {
        name: 'Big Lagoon',
        description: 'Experience the grandeur of Big Lagoon, where massive karst cliffs create a breathtaking natural amphitheater. The turquoise waters here are some of the most photographed in El Nido.',
        image: '/tours/big-lagoon.jpg',
        highlights: ['Massive karst formations', 'Turquoise waters', 'Perfect for photography']
      },
      {
        name: 'Secret Lagoon',
        description: 'Accessible only through a small crevice in the rocks, Secret Lagoon is a hidden paradise. Wade through shallow water and discover a secluded pool surrounded by jagged cliffs.',
        image: '/tours/secret-lagoon.jpg',
        highlights: ['Hidden entrance through rocks', 'Secluded natural pool', 'Adventure experience']
      },
      {
        name: 'Shimizu Island',
        description: 'Named after a Japanese diver, Shimizu Island offers some of the best snorkeling in El Nido. Vibrant coral gardens and diverse marine life await beneath the surface.',
        image: '/tours/shimizu.jpg',
        highlights: ['World-class snorkeling', 'Vibrant coral gardens', 'Diverse marine life']
      },
      {
        name: '7 Commando Beach',
        description: 'End your day at this pristine white sand beach. Perfect for relaxing, swimming, and enjoying a beachside lunch with stunning views of the Bacuit Bay.',
        image: '/tours/7commando.jpg',
        highlights: ['White sand beach', 'Swimming & relaxation', 'Beachside lunch']
      }
    ]
  },
  {
    id: 'tour-c',
    title: 'Tour C',
    subtitle: 'Hidden Beaches & Shrines',
    destinations: [
      {
        name: 'Hidden Beach',
        description: 'Accessible only by swimming through a narrow gap in the rocks, Hidden Beach is a secluded paradise with powdery white sand and crystal-clear waters.',
        image: '/tours/hidden-beach.jpg',
        highlights: ['Secret entrance', 'Powdery white sand', 'Secluded paradise']
      },
      {
        name: 'Matinloc Shrine',
        description: 'Perched atop a cliff, this abandoned shrine offers panoramic views of the archipelago. The hike up is rewarded with breathtaking vistas and a sense of mystery.',
        image: '/tours/matinloc.jpg',
        highlights: ['Panoramic cliff views', 'Historic shrine', 'Photography spot']
      },
      {
        name: 'Secret Beach',
        description: 'Another hidden gem accessible through a small opening in the limestone. This beach offers privacy and stunning natural beauty in a tiny cove.',
        image: '/tours/secret-beach.jpg',
        highlights: ['Tiny hidden cove', 'Private beach', 'Natural beauty']
      }
    ]
  }
];

export const inlandDestinations = [
  {
    id: 'nacpan',
    name: 'Nacpan Beach',
    category: 'Beach',
    description: 'A 4km stretch of golden sand and turquoise waters, Nacpan is one of the most beautiful beaches in the Philippines. Perfect for swimming, sunbathing, and long beach walks.',
    image: '/inland/nacpan.jpg',
    distance: '17km from El Nido town',
    duration: '30-minute drive',
    highlights: ['4km golden sand beach', 'Swimming & surfing', 'Beach bars & restaurants', 'Stunning sunsets'],
    bestTime: 'Year-round, best during dry season (Nov-May)',
    tips: 'Rent a motorbike or join a tour. Bring sunscreen and stay for sunset!'
  },
  {
    id: 'nagkalit-kalit',
    name: 'Nagkalit-kalit Waterfalls',
    category: 'Waterfall',
    description: 'A refreshing jungle trek leads to this beautiful multi-tiered waterfall. The natural pools are perfect for swimming and the surrounding rainforest is teeming with wildlife.',
    image: '/inland/nagkalit.jpg',
    distance: '15km from El Nido town',
    duration: '45-minute trek',
    highlights: ['Multi-tiered waterfall', 'Natural swimming pools', 'Jungle trekking', 'Wildlife spotting'],
    bestTime: 'Best after rainy season (Jul-Oct) for maximum flow',
    tips: 'Wear proper hiking shoes. Bring water and insect repellent. Guide recommended.'
  },
  {
    id: 'kuyawyaw',
    name: 'Kuyawyaw Falls',
    category: 'Waterfall',
    description: 'A hidden gem tucked in the jungle, Kuyawyaw Falls offers a more intimate waterfall experience. The trek is moderate and the reward is a pristine natural pool.',
    image: '/inland/kuyawyaw.jpg',
    distance: '12km from El Nido town',
    duration: '30-minute trek',
    highlights: ['Secluded waterfall', 'Natural pool', 'Moderate hiking', 'Less crowded'],
    bestTime: 'Year-round, best Jun-Nov',
    tips: 'Easier trek than Nagkalit-kalit. Good for families.'
  }
];

export const travelTips = {
  bestTime: {
    title: 'Best Time to Visit',
    icon: '☀️',
    content: 'The dry season (November to May) is ideal for island hopping with calm seas and sunny skies. The wet season (June to October) brings occasional rain but fewer crowds and lower prices.',
    tips: [
      'Peak season: December to February (book early!)',
      'Shoulder season: March to May (hot but less crowded)',
      'Off-season: June to November (best deals, occasional rain)'
    ]
  },
  whatToPack: {
    title: 'What to Pack',
    icon: '🎒',
    essentials: [
      { category: 'Beach Essentials', items: ['Reef-safe sunscreen', 'Swimwear', 'Rash guard', 'Beach towel', 'Waterproof phone case', 'Dry bag'] },
      { category: 'Clothing', items: ['Light, breathable clothes', 'Sun hat', 'Sunglasses', 'Flip-flops & water shoes', 'Light jacket for boat rides'] },
      { category: 'Adventure Gear', items: ['Snorkel mask (optional)', 'GoPro or waterproof camera', 'Power bank', 'Reusable water bottle'] },
      { category: 'Health & Safety', items: ['First aid kit', 'Insect repellent', 'Motion sickness pills', 'Personal medications'] }
    ],
    dontBring: ['Single-use plastics', 'Excessive valuables', 'Heavy luggage']
  },
  budget: {
    title: 'Budget Guide',
    icon: '💰',
    ranges: [
      {
        type: 'Budget Traveler',
        daily: '₱1,500 - ₱2,500',
        breakdown: {
          accommodation: '₱500-800',
          food: '₱400-600',
          tours: '₱1,200-1,400',
          transport: '₱200-400'
        }
      },
      {
        type: 'Mid-Range',
        daily: '₱3,000 - ₱5,000',
        breakdown: {
          accommodation: '₱1,500-2,500',
          food: '₱800-1,200',
          tours: '₱1,400-1,800',
          transport: '₱300-500'
        }
      },
      {
        type: 'Luxury',
        daily: '₱6,000+',
        breakdown: {
          accommodation: '₱3,500+',
          food: '₱1,500+',
          tours: '₱2,000+',
          transport: '₱500+'
        }
      }
    ],
    savingTips: [
      'Book tours directly with operators',
      'Eat at local carinderias',
      'Travel during shoulder season',
      'Share van/tricycle rides',
      'Bring reusable water bottle (refill stations available)'
    ]
  },
  gettingThere: {
    title: 'How to Get to El Nido',
    icon: '✈️',
    options: [
      {
        method: 'By Air',
        description: 'Fly directly to El Nido Airport (ENI) from Manila or Cebu. Flight time is about 1.5 hours.',
        pros: ['Fastest option', 'Direct flights available', 'Scenic aerial views'],
        cons: ['More expensive', 'Limited flight schedules', 'Small aircraft'],
        tips: 'Book flights early for better rates. AirSWIFT operates daily flights.'
      },
      {
        method: 'Via Puerto Princesa',
        description: 'Fly to Puerto Princesa (PPS) then take a 5-6 hour van ride to El Nido.',
        pros: ['More flight options', 'Usually cheaper', 'Can visit Puerto Princesa'],
        cons: ['Long land travel', 'Winding mountain roads', 'Full day of travel'],
        tips: 'Book van transfer in advance. Lexus and Cherry Bus are reliable operators.'
      }
    ]
  }
};
