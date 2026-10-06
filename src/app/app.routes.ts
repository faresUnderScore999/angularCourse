import { Routes } from '@angular/router';

import { EventDetail } from './event-detail/event-detail';
import { Events } from './events/events';
import { Home } from './home/home';
import { Products } from './products/products';
import { Signals } from './signals/signals';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'signals', component: Signals },
  { path: 'products', component: Products },
  { path: 'events', component: Events },
  { path: 'events/:id', component: EventDetail },
];
