import { Component, computed, signal } from '@angular/core';

import { eventM } from '../models/event-m';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css'
})
export class Events {
  /* ---- Static demo list of events, typed with the eventM model ---- */
  protected readonly events = signal<eventM[]>([
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
  ]);

  /* ---- Totals derived from the list ---- */
  protected readonly totalPlaces = computed(() =>
    this.events().reduce((sum, event) => sum + event.nbPlaces, 0)
  );

  protected readonly freeCount = computed(
    () => this.events().filter((event) => event.price === 0).length
  );

  protected formatPrice(price: number): string {
    if (price === 0) {
      return 'Free';
    }
    return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  protected formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

}
