import { TestBed } from '@angular/core/testing';

import { Signals } from './signals';

describe('Signals', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signals],
    }).compileComponents();
  });

  it('should explain what a signal is', () => {
    const fixture = TestBed.createComponent(Signals);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('What is a Signal?');
  });

  it('should update the counter and computed value on increment', async () => {
    const fixture = TestBed.createComponent(Signals);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const increment = compiled.querySelector('[data-action="increment"]');
    increment?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();

    expect(compiled.querySelector('[data-testid="counter-value"]')?.textContent).toContain('1');
    expect(compiled.querySelector('[data-testid="counter-double"]')?.textContent).toContain('2');
  });
});