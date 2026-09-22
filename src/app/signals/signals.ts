import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals {
  /* ---- Live demo state, made entirely of signals ---- */
  protected readonly count = signal(0);
  protected readonly double = computed(() => this.count() * 2);
  protected readonly effectRuns = signal(0);
  protected readonly lastAction = signal('Press a button to change the count.');

  constructor() {
    // An effect re-runs whenever a signal it reads changes.
    // We read `count()` and bump a separate counter to prove it re-ran.
    effect(() => {
      void this.count();
      this.effectRuns.update((value) => value + 1);
    });
  }

  protected increment() {
    this.count.update((value) => value + 1);
    this.lastAction.set(`Increment → count is now ${this.count()}.`);
  }

  protected decrement() {
    this.count.update((value) => value - 1);
    this.lastAction.set(`Decrement → count is now ${this.count()}.`);
  }

  protected reset() {
    this.count.set(0);
    this.lastAction.set('Reset → count is back to 0.');
  }

  /* ---- The four key ideas ---- */
  protected readonly ideas = [
    {
      title: 'A value container',
      body: 'signal(0) creates a writable value. Read it like a function — count() — and write it with count.set(...) or count.update(v => ...).'
    },
    {
      title: 'Automatic dependencies',
      body: 'Whenever a signal is read inside an effect, a computed, or a template, the reader is tracked as a dependency. Nothing has to opt in.'
    },
    {
      title: 'Pull-based and precise',
      body: 'When a signal changes, only the computations that depend on it are marked stale — and they re-run lazily, only if their result is needed again.'
    },
    {
      title: 'Zoneless by design',
      body: "Signals push state through the dependency graph directly, which is what makes Angular's new zoneless change detection possible."
    }
  ];

  /* ---- Code samples shown on the page ---- */
  protected readonly createSample = `const count = signal(0);    // a new writable signal`;
  protected readonly readWriteSample = `count.set(3);            // write: replace the value
const current = count();  // read: current === 3
count.update(v => v + 1); // write: derived from the current value (now 4)`;
  protected readonly computedSample = `const count = signal(0);
const double = computed(() => count() * 2);

count.set(21);
console.log(double());    // 42 — recomputed automatically`;
  protected readonly effectSample = `effect(() => {
  console.log('count is now', count());
});

count.set(1);             // logs "count is now 1"
count.set(2);             // logs "count is now 2"`;
  protected readonly templateSample = `count = signal(0);

<!-- reading a signal in a template creates a tracked dependency -->
<p>Count: {{ count() }}</p>`;
}