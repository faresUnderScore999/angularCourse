import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Events } from './events';

describe('Events', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Events],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render the demo event list as cards', () => {
    const fixture = TestBed.createComponent(Events);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Events');
    expect(compiled.querySelectorAll('app-event-card').length).toBe(5);
  });

  it('should show the total number of places', () => {
    const fixture = TestBed.createComponent(Events);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('[data-testid="total-places"]')?.textContent).toContain(
      '765'
    );
  });

  it('should count free events', () => {
    const fixture = TestBed.createComponent(Events);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('[data-testid="free-count"]')?.textContent).toContain(
      '2'
    );
  });
});