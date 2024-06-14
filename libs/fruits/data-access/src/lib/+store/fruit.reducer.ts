import { ActionReducer, createReducer, on } from '@ngrx/store';
// import { FruitActions } from './fruit.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Fruit } from '@management-app/shared/data-access';
import { addFruit, deleteFruit } from './fruit.actions';

export const fruitFeatureKey = 'fruit';

export const selectId = ({ id }: Fruit) => id;

export const sortComparer = (a: Fruit, b: Fruit): number =>
  a.name.toString().localeCompare(b.name.toString());

export const adapter: EntityAdapter<Fruit> = createEntityAdapter({
  selectId,
  sortComparer,
});

export interface FruitState extends EntityState<Fruit> {
  loading: [];
}

export const initialState: FruitState = adapter.getInitialState({
  loading: [],
});

// export const reducer = createReducer(initialState);

export const fruitsReducers: ActionReducer<FruitState> = createReducer(
  initialState,
  on(addFruit, (state: FruitState, { fruit }) => 
    adapter.addOne(fruit, state)),
  on(deleteFruit, (state: FruitState, { id }) => 
    adapter.removeOne(id, state))
);