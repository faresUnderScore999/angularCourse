import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { eventM } from '../models/event-m';
import { EVENTS } from '../models/events-data';

@Component({
  selector: 'app-event-detail',
  imports: [RouterLink],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css'
})
export class EventDetail {
  /* ---- Route params as a signal (the route carries `events/:id`) ---- */
  private readonly paramMap = toSignal(inject(ActivatedRoute).paramMap);

  /* ---- The event resolved from the shared demo catalogue ---- */
  protected readonly event = computed<eventM | undefined>(() => {
    const id = Number(this.paramMap()?.get('id'));
    return EVENTS.find((candidate) => candidate.id === id);
  });

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