export interface Tour {
  id: string;
  category: 'most-popular' | 'inland-tour' | 'rent-a-car' | 'adventure' | 'other-offers';
  title: string;
  subtitle?: string;
  duration?: string;
  price: number;
  image: string;
  description: string;
  includes?: string[];
  itinerary?: { time: string; activity: string }[];
  isRedirect?: boolean; 
  redirectTo?: string; 
  carDetails?: {
    model: string;
    year: string;
    color: string;
    transmission: string;
    seats: number;
  };
}


export const tours: Tour[] = [
  // MOST POPULAR
  {
    id: 'airport-transfer',
    category: 'most-popular',
    title: 'AIRPORT TRANSFER',
    duration: '1 WAY',
    price: 1199,
    image: '/airport_transfer.jpg',
    description: 'Comfortable and reliable airport transfer service. Professional drivers, air-conditioned vehicles, and door-to-door service.',
    includes: [
      'Professional driver',
      'Air-conditioned vehicle',
      'Door-to-door service',
      'Meet & greet at airport',
      'Luggage assistance'
    ]
  },
  {
    id: 'whole-day-inland-tour',
    category: 'most-popular', 
    title: 'WHOLE DAY INLAND TOUR',
    duration: '6-8 HOURS',
    price: 7999,
    image: '/privatetours.jpg',
    description: 'Explore El Nido\'s hidden gems on land. Visit waterfalls, lagoons, beaches, and viewpoints with our expert guides.',
    includes: [
      'Private van with driver',
      'Professional tour guide',
      'Entrance fees',
      'Lunch included',
      'Bottled water',
      'Insurance'
    ],
    itinerary: [
      { time: '8:00 AM', activity: 'Hotel pickup' },
      { time: '9:00 AM', activity: 'Nagkalit-kalit Waterfalls' },
      { time: '11:00 AM', activity: 'Nacpan Beach' },
      { time: '1:00 PM', activity: 'Lunch at local restaurant' },
      { time: '2:30 PM', activity: 'Las Cabanas Beach' },
      { time: '4:00 PM', activity: 'Sunset viewpoint' },
      { time: '5:30 PM', activity: 'Return to hotel' }
    ]
  },
  {
    id: 'rent-a-car-popular',
    category: 'most-popular',
    title: 'RENT A CAR',
    duration: '24 HOURS',
    price: 1499,
    image: '/carrental.jpg',
    isRedirect: true, 
  redirectTo: '/?category=rent-a-car', 
    description: 'Self-drive car rental. Explore at your own pace with our well-maintained fleet.',
    includes: [
      'Full tank of gas',
      'Insurance coverage',
      '24/7 roadside assistance',
      'Free delivery to hotel',
      'Unlimited mileage'
    ]
  },
  {
    id: 'fishing-adventure-popular',
    category: 'most-popular',
    title: 'EL NIDO FISHING ADVENTURE',
    duration: 'HALF DAY',
    price: 6500,
    image: '/fishing.jpg',
    isRedirect: true, 
  redirectTo: '/?category=adventure',
    description: 'Experience world-class fishing in the pristine waters of Bacuit Bay. All equipment provided.',
    includes: [
      'Fishing boat with captain',
      'Premium fishing gear',
      'Bait and tackle',
      'Cooler with ice',
      'Fish cleaning service',
      'Bottled water'
    ]
  },

  // INLAND TOUR
  {
  id: 'whole-day-inland-tour-inland',
  category: 'inland-tour',
  title: 'WHOLE DAY INLAND TOUR',
  duration: '6-8 HOURS',
  price: 7999,
  image: '/privatetours.jpg',
  description: 'Explore El Nido\'s hidden gems on land. Visit waterfalls, lagoons, beaches, and viewpoints with our expert guides.',
  includes: [
    'Private van with driver',
    'Professional tour guide',
    'Entrance fees',
    'Lunch included',
    'Bottled water',
    'Insurance'
  ],
  itinerary: [
    { time: '8:00 AM', activity: 'Hotel pickup' },
    { time: '9:00 AM', activity: 'Nagkalit-kalit Waterfalls' },
    { time: '11:00 AM', activity: 'Nacpan Beach' },
    { time: '1:00 PM', activity: 'Lunch at local restaurant' },
    { time: '2:30 PM', activity: 'Las Cabanas Beach' },
    { time: '4:00 PM', activity: 'Sunset viewpoint' },
    { time: '5:30 PM', activity: 'Return to hotel' }
  ]
},
  {
    id: 'half-day-inland-tour',
    category: 'inland-tour',
    title: 'HALF DAY INLAND TOUR',
    duration: '4-5 HOURS',
    price: 4500,
    image: '/privatetours.jpg',
    description: 'Perfect for those short on time. Visit 2-3 top inland attractions.',
    includes: [
      'Private van with driver',
      'Tour guide',
      'Entrance fees',
      'Bottled water'
    ]
  },
  {
    id: 'custom-inland-tour',
    category: 'inland-tour',
    title: 'CUSTOM INLAND TOUR',
    duration: 'FLEXIBLE',
    price: 9999,
    image: '/privatetours.jpg',
    description: 'Design your own itinerary. Choose your destinations and activities.',
    includes: [
      'Private van with driver',
      'Flexible schedule',
      'Custom itinerary',
      'Tour guide (optional)',
      'All entrance fees'
    ]
  },


  // RENT A CAR
  {
    id: 'mirage-sedan',
    category: 'rent-a-car',
    title: 'MITSUBISHI MIRAGE',
    subtitle: 'Sedan',
    duration: '24 HOURS',
    price: 1499,
    image: '/mirage.jpg',
    description: 'Fuel-efficient sedan perfect for couples or small families.',
    carDetails: {
      model: 'Mirage',
      year: '2020',
      color: 'Red',
      transmission: 'Automatic',
      seats: 5
    }
  },
  {
    id: 'wigo-2022',
    category: 'rent-a-car',
    title: 'TOYOTA WIGO',
    subtitle: 'Compact',
    duration: '24 HOURS',
    price: 1299,
    image: '/Wigo.jpg',
    description: 'Compact and easy to drive. Great for navigating El Nido\'s roads.',
    carDetails: {
      model: 'Wigo',
      year: '2022',
      color: 'Black',
      transmission: 'Automatic',
      seats: 5
    }
  },
  {
    id: 'adventure-2018',
    category: 'rent-a-car',
    title: 'MITSUBISHI ADVENTURE',
    subtitle: 'SUV',
    duration: '24 HOURS',
    price: 2499,
    image: '/adventure.jpg',
    description: 'Spacious SUV for groups and families. Perfect for rough roads.',
    carDetails: {
      model: 'Adventure',
      year: '2018',
      color: 'White',
      transmission: 'Manual',
      seats: 8
    }
  },
  {
    id: 'xpander-2022',
    category: 'rent-a-car',
    title: 'MITSUBISHI XPANDER',
    subtitle: 'MPV',
    duration: '24 HOURS',
    price: 2799,
    image: '/xpander.jpg',
    description: 'Modern MPV with premium features. Comfortable for long drives.',
    carDetails: {
      model: 'Xpander',
      year: '2022',
      color: 'White',
      transmission: 'Automatic',
      seats: 7
    }
  },
  {
    id: 'crosswind',
    category: 'rent-a-car',
    title: 'ISUZU CROSSWIND',
    subtitle: 'SUV',
    duration: '24 HOURS',
    price: 2299,
    image: '/carrental.jpg',
    description: 'Reliable SUV for island adventures. Great for beach trips.',
    carDetails: {
      model: 'Crosswind',
      year: '2019',
      color: 'White',
      transmission: 'Manual',
      seats: 8
    }
  },

  // ADVENTURE
  {
    id: 'shore-casting',
    category: 'adventure',
    title: 'SHORE CASTING',
    subtitle: 'El Nido Fishing',
    duration: 'HALF DAY',
    price: 2000,
    image: '/fishing.jpg',
    description: 'Fish from the shore with premium gear. Perfect for beginners.',
    includes: [
      'Premium fishing rod & reel',
      'Bait and tackle',
      'Fishing guide',
      'Cooler with ice',
      'Bottled water'
    ]
  },
  {
    id: 'boat-casting',
    category: 'adventure',
    title: 'BOAT CASTING',
    subtitle: 'El Nido Fishing',
    duration: 'HALF DAY',
    price: 6500,
    image: '/fishing.jpg',
    description: 'Deep sea fishing adventure. Target big game fish in Bacuit Bay.',
    includes: [
      'Private fishing boat',
      'Experienced captain',
      'Premium fishing gear',
      'Bait and tackle',
      'Fish cleaning service',
      'Lunch and drinks'
    ]
  },
  {
    id: 'motor-trail',
    category: 'adventure',
    title: 'EL NIDO MOTOR TRAIL',
    duration: '4-6 HOURS',
    price: 3500,
    image: '/moto.jpg',
    description: 'Off-road motorcycle adventure through El Nido\'s backcountry.',
    includes: [
      'Dirt bike rental',
      'Safety gear (helmet, gloves)',
      'Trail guide',
      'Fuel',
      'Insurance'
    ]
  },

  // OTHER OFFERS
  {
    id: 'private-speedboat',
    category: 'other-offers',
    title: 'PRIVATE ISLAND TOUR',
    subtitle: 'Speedboat',
    duration: 'FULL DAY',
    price: 12000,
    image: '/kayak.JPG',
    description: 'Exclusive speedboat tour. Visit more islands in less time.',
    includes: [
      'Private speedboat',
      'Experienced crew',
      'Snorkeling gear',
      'Lunch on the beach',
      'Entrance fees',
      'Bottled water'
    ]
  },
  {
    id: 'private-normal-boat',
    category: 'other-offers',
    title: 'PRIVATE ISLAND TOUR',
    subtitle: 'Normal Boat',
    duration: 'FULL DAY',
    price: 8000,
    image: '/kayak.JPG',
    description: 'Private traditional boat tour. Relaxed pace, more time at each stop.',
    includes: [
      'Private boat',
      'Experienced crew',
      'Snorkeling gear',
      'Lunch',
      'Entrance fees',
      'Drinks'
    ]
  },
  {
    id: 'shared-speedboat',
    category: 'other-offers',
    title: 'SHARED ISLAND TOUR',
    subtitle: 'Speedboat',
    duration: 'FULL DAY',
    price: 2500,
    image: '/kayak.JPG',
    description: 'Join other travelers on a speedboat tour. Budget-friendly option.',
    includes: [
      'Shared speedboat',
      'Tour guide',
      'Snorkeling gear',
      'Lunch',
      'Entrance fees'
    ]
  },
  {
    id: 'shared-normal-boat',
    category: 'other-offers',
    title: 'SHARED ISLAND TOUR',
    subtitle: 'Normal Boat',
    duration: 'FULL DAY',
    price: 1800,
    image: '/kayak.JPG',
    description: 'Traditional boat tour with other guests. Most economical option.',
    includes: [
      'Shared boat',
      'Tour guide',
      'Snorkeling gear',
      'Lunch',
      'Entrance fees'
    ]
  }
];
