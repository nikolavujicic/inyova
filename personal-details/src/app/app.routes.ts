import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/customers/details/details.component').then((c) => c.DetailsComponent)
    },
    {
        path: 'next-steps',
        loadComponent: () => import('./components/customers/details/details.component').then((c) => c.DetailsComponent)
    },
    {
        path: 'list',
        loadComponent: () => import('./components/customers/list/list.component').then((c) => c.ListComponent)
    }
];
