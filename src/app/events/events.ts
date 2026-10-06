import { Component, computed, signal } from '@angular/core';

import { EventCard } from '../event-card/event-card';
import { eventM } from '../models/event-m';
import { EVENTS } from '../models/events-data';

@Component({
  selector: 'app-events',
  imports: [EventCard],
  templateUrl: './events.html',
  styleUrl: './events.css'
})
export class Events {
  /* ---- Demo list of events (shared catalogue), typed with the eventM model ---- */
  protected readonly events = signal<eventM[]>([...EVENTS]);

  /* ---- Totals derived from the list ---- */
  protected readonly totalPlaces = computed(() =>
    this.events().reduce((sum, event) => sum + event.nbPlaces, 0)
  );

  protected readonly freeCount = computed(
    () => this.events().filter((event) => event.price === 0).length
  );
}
