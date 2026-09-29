import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./journey/journey').then((m) => m.Journey) },
  { path: '**', redirectTo: '' },
];
