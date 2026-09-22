import { TestBed } from '@angular/core/testing';

import { Products } from './products';

describe('Products', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Products],
    }).compileComponents();
  });

  it('should render the demo product list', () => {
    const fixture = TestBed.createComponent(Products);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Products');
    expect(compiled.querySelectorAll('tbody tr').length).toBe(5);
  });

  it('should increment likes when the like button is clicked', async () => {
    const fixture = TestBed.createComponent(Products);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const likeButton = compiled.querySelector('.like-btn');
    likeButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();

    expect(compiled.querySelector('.likes-badge')?.textContent).toContain('1');
  });

  it('should keep the total stock in sync', async () => {
    const fixture = TestBed.createComponent(Products);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('[data-testid="total-stock"]')?.textContent).toContain(
      '124'
    );
  });
});