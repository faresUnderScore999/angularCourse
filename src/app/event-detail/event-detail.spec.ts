import { TestBed } from '@angular/core/testing';
import { provideLocationMocks } from '@angular/common/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { EventDetail } from './event-detail';

describe('EventDetail', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDetail],
      providers: [
        provideRouter([{ path: 'events/:id', component: EventDetail }]),
        provideLocationMocks(),
      ],
    }).compileComponents();
  });

  it('should show the details of the requested event', async () => {
    const harness = await RouterTestingHarness.create('/events/2');
    const compiled = harness.routeNativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain(
      'TypeScript Deep Dive'
    );
    expect(compiled.textContent).toContain('Lyon, France');
    expect(compiled.querySelector('[data-testid="detail-price"]')?.textContent).toContain(
      '89.00'
    );
    expect(compiled.querySelector('[data-testid="detail-places"]')?.textContent).toContain(
      '40'
    );
  });

  it('should render a back link to the events list', async () => {
    const harness = await RouterTestingHarness.create('/events/1');
    const compiled = harness.routeNativeElement as HTMLElement;
    const backLink = compiled.querySelector('a.back-link') as HTMLAnchorElement | null;

    expect(backLink).toBeTruthy();
    expect(backLink?.getAttribute('href')).toBe('/events');
  });

  it('should show a not-found message for an unknown id', async () => {
    const harness = await RouterTestingHarness.create('/events/999');
    const compiled = harness.routeNativeElement as HTMLElement;

    expect(compiled.querySelector('[data-testid="event-not-found"]')).toBeTruthy();
    expect(compiled.textContent).toContain('Event not found');
  });
});