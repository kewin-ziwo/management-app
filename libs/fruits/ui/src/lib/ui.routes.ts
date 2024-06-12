import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./fruits/fruits.component').then(
                (c) => c.FruitsComponent
            ),
    },
];