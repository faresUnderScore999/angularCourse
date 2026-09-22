import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Products } from './products/products';
import { Signals } from './signals/signals';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'signals', component: Signals },
  { path: 'products', component: Products },
];
