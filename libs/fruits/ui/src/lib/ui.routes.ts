import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/fruits/fruits.component').then(
                (c) => c.FruitsComponent
            ),
    },
    {
        path: 'add-fruit',
        loadComponent: () =>
            import('./pages/form/form.component').then(
                (c) => c.FormComponent
            ),
    },
    {
        path: 'edit-fruit/:id',
        loadComponent: () =>
            import('./pages/form/form.component').then(
                (c) => c.FormComponent
            ),
    },
];