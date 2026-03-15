export const LOCATIONS = [
  { slug: 'bangalore', name: 'Bangalore' },
  { slug: 'whitefield', name: 'Whitefield Bangalore' },
  { slug: 'indiranagar', name: 'Indiranagar Bangalore' },
  { slug: 'koramangala', name: 'Koramangala Bangalore' },
  { slug: 'jayanagar', name: 'Jayanagar Bangalore' },
  { slug: 'electronic-city', name: 'Electronic City Bangalore' },
  { slug: 'marathahalli', name: 'Marathahalli Bangalore' },
  { slug: 'hsr-layout', name: 'HSR Layout Bangalore' },
  { slug: 'btm-layout', name: 'BTM Layout Bangalore' },
  { slug: 'bellandur', name: 'Bellandur Bangalore' },
  { slug: 'sarjapur-road', name: 'Sarjapur Road Bangalore' },
  { slug: 'hebbal', name: 'Hebbal Bangalore' },
  { slug: 'yelahanka', name: 'Yelahanka Bangalore' },
  { slug: 'malleshwaram', name: 'Malleshwaram Bangalore' },
  { slug: 'rajajinagar', name: 'Rajajinagar Bangalore' },
  { slug: 'banashankari', name: 'Banashankari Bangalore' },
  { slug: 'jp-nagar', name: 'JP Nagar Bangalore' },
  { slug: 'rr-nagar', name: 'RR Nagar Bangalore' },
  { slug: 'kengeri', name: 'Kengeri Bangalore' },
  { slug: 'thannisandra', name: 'Thannisandra Bangalore' },
  { slug: 'kr-puram', name: 'KR Puram Bangalore' },
  { slug: 'cv-raman-nagar', name: 'CV Raman Nagar Bangalore' },
];

export function getLocationBySlug(locationSlug) {
  return LOCATIONS.find((location) => location.slug === locationSlug);
}
