import { eventM } from './event-m';

/**
 * Shared demo catalogue of events.
 *
 * Lives outside of the components so the events list page and the
 * event detail page (`/events/:id`) both read from the same source
 * of truth, even when the detail page is loaded directly.
 */
export const EVENTS: eventM[] = [
  {
    id: 1,
    title: 'Angular Meetup Paris',
    description:
      'An evening of talks on signals, zoneless change detection and the latest Angular features.',
    location: 'Paris, France',
    date: '2026-10-15',
    price: 0,
    nbPlaces: 120
  },
  {
    id: 2,
    title: 'TypeScript Deep Dive',
    description:
      'A full-day workshop covering advanced types, generics and type inference patterns.',
    location: 'Lyon, France',
    date: '2026-11-03',
    price: 89,
    nbPlaces: 40
  },
  {
    id: 3,
    title: 'Web Performance Workshop',
    description:
      'Hands-on session on Core Web Vitals, lazy loading and rendering optimizations.',
    location: 'Bordeaux, France',
    date: '2026-11-20',
    price: 129.5,
    nbPlaces: 25
  },
  {
    id: 4,
    title: 'Open Source Contributor Day',
    description:
      'A community day to contribute to open-source Angular libraries with mentors on hand.',
    location: 'Remote',
    date: '2026-12-05',
    price: 0,
    nbPlaces: 500
  },
  {
    id: 5,
    title: 'RxJS & Signals Summit',
    description:
      'Comparing reactive patterns: when to reach for RxJS and when signals are enough.',
    location: 'Nantes, France',
    date: '2027-01-14',
    price: 49,
    nbPlaces: 80
  }
];