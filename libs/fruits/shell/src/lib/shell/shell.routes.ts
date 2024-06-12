import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('@management-app/fruits/ui').then(
                (m) => m.routes
            ),
    },
];