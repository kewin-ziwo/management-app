import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { AppState } from '../app.state';
import { Fruit } from '@management-app/shared/data-access';
import { FruitState } from './fruit.reducer';

export const selectFruitsFeature: MemoizedSelector<AppState, FruitState> =
  createFeatureSelector<FruitState>('fruits');

export const selectFruits: MemoizedSelector<AppState, Fruit[]> =
  createSelector(
    selectFruitsFeature,
    ({ entities }: FruitState): Fruit[] => Object.values(entities) as Fruit[]
  );
