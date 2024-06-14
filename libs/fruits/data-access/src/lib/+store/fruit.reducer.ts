import { createReducer, on } from '@ngrx/store';
import { FruitActions } from './fruit.actions';

export const fruitFeatureKey = 'fruit';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

