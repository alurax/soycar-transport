export const LOCATIONS = [
  'Town (El Nido)',
  'LIO Airport',
  'El Nido Palawan',
  'Port Barton Palawan',
  'Puerto Princesa City',
  'Taytay Palawan',
  'Nacpan',
  'Maremegmeg',
  'Teneguiban',
  'San Fernando Port',
  'Sibaltan',
  'Sabang',
  'Astoria Palawan',
  'San Vicente',
  'Roxas'
];

export const TOUR_PACKAGES = [
  { id: 'tour-a', name: 'Tour A — Lio Beach, Nacpan, Maremegmeg, Nagkalit-Kalit Falls', price: '₱3,500' },
  { id: 'tour-b', name: 'Tour B — Lio Beach, Nacpan, Duli, Maremegmeg, Nagkalit-Kalit Falls', price: '₱5,000' },
  { id: 'tour-c', name: 'Tour C — Lio Beach, Nacpan, Ille Cave, Maremegmeg', price: '₱5,000' }
];

// For Shared Van, the departure times depend on the route.
// We strictly define the routes that have known shared van schedules.
export const SHARED_VAN_ROUTES: Record<string, string[]> = {
  'El Nido Palawan|Puerto Princesa City': ['5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:30 AM', '11:30 AM', '1:00 PM', '3:00 PM', '6:00 PM'],
  'Town (El Nido)|Puerto Princesa City': ['5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:30 AM', '11:30 AM', '1:00 PM', '3:00 PM', '6:00 PM'],
  'Puerto Princesa City|El Nido Palawan': ['7:00 AM', '9:00 AM', '10:30 AM', '1:00 PM', '3:00 PM', '4:00 PM', '6:00 PM', '7:30 PM'],
  'Puerto Princesa City|Town (El Nido)': ['7:00 AM', '9:00 AM', '10:30 AM', '1:00 PM', '3:00 PM', '4:00 PM', '6:00 PM', '7:30 PM'],
  'El Nido Palawan|Port Barton Palawan': ['8:00 AM', '1:00 PM'],
  'Town (El Nido)|Port Barton Palawan': ['8:00 AM', '1:00 PM'],
};

// Standardize checking for available shared routes
export const getSharedVanTimes = (from: string, to: string): string[] => {
  if (!from || !to) return [];
  const key = `${from}|${to}`;
  return SHARED_VAN_ROUTES[key] || [];
};
