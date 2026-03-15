import { LOCATIONS } from '@/data/locations';
import { SERVICES } from '@/data/services';

const SITE_URL = 'https://ssvhomecareservices.vercel.app';

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/testimonials',
    '/join-us',
    '/faq',
  ];

  const serviceRoutes = SERVICES.map((service) => `/services/${service.id}`);
  const locationRoutes = SERVICES.flatMap((service) =>
    LOCATIONS.map((location) => `/${service.id}-in-${location.slug}`),
  );

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/services') ? 0.9 : 0.8,
  }));
}
