import { Routes } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
// import { FruitsEffects } from './+state/fruits.effects';
import { fruitFeatureKey, fruitsReducers, FruitEffects } from '@management-app/fruits/data-access';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@management-app/fruits/ui').then((m) => m.routes),
    providers: [
      provideState(fruitFeatureKey, fruitsReducers),
      provideEffects(FruitEffects),
    ],
  },
];
