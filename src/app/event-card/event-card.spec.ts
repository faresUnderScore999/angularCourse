import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { EventCard } from './event-card';
import { eventM } from '../models/event-m';

describe('EventCard', () => {
  const event: eventM = {
    id: 1,
    title: 'Angular Meetup Paris',
    description:
      'An evening of talks on signals, zoneless change detection and the latest Angular features.',
    location: 'Paris, France',
    date: '2026-10-15',
    price: 0,
    nbPlaces: 120
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCard],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  function setup(input: eventM = event) {
    const fixture = TestBed.createComponent(EventCard);
    fixture.componentRef.setInput('event', input);
    fixture.detectChanges();
    return fixture;
  }

  it('should render the event title, location and description', () => {
    const fixture = setup();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.card-title')?.textContent).toContain(
      'Angular Meetup Paris'
    );
    expect(compiled.querySelector('.card-location')?.textContent).toContain(
      'Paris, France'
    );
    expect(compiled.querySelector('.card-description')?.textContent).toContain(
      'An evening of talks'
    );
  });

  it('should render a details link pointing at the event page', () => {
    const fixture = setup();
    const link = (fixture.nativeElement as HTMLElement).querySelector(
      'a.details-btn'
    ) as HTMLAnchorElement | null;

    expect(link).toBeTruthy();
    expect(link?.getAttribute('href')).toBe('/events/1');
  });

  it('should show Free for a zero-priced event and the price otherwise', () => {
    const freeFixture = setup();
    expect(freeFixture.nativeElement.querySelector('.card-price')?.textContent).toContain(
      'Free'
    );

    const paidFixture = setup({ ...event, id: 2, price: 89 });
    expect(paidFixture.nativeElement.querySelector('.card-price')?.textContent).toContain(
      '89.00'
    );
  });
});