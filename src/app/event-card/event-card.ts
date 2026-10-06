import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { eventM } from '../models/event-m';

@Component({
  selector: 'app-event-card',
  imports: [RouterLink],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css'
})
export class EventCard {
  /* ---- The event rendered by this card, provided by the parent ---- */
  readonly event = input.required<eventM>();

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