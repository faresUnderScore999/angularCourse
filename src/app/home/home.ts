import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected readonly title = 'Welcome to MonProjet';
  protected readonly subtitle =
    'A fresh starting point for your next application. This home page ships with a header, footer, and routing already wired up.';
  protected readonly features = [
    {
      icon: '⚡',
      title: 'Fast',
      description: 'Blazing-fast pages built with Angular 21.'
    },
    {
      icon: '🚀',
      title: 'Modern',
      description: 'Standalone components, signals, and zoneless by default.'
    },
    {
      icon: '🧩',
      title: 'Ready to grow',
      description: 'Routing, tests, and tooling already configured.'
    }
  ];
}