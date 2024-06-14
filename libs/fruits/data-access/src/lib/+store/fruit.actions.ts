// import { createActionGroup, emptyProps, props } from '@ngrx/store';

// export const FruitActions = createActionGroup({
//   source: 'Fruit',
//   events: {
//     'Load Fruits': emptyProps(),

//   }
// });

import { Fruit } from '@management-app/shared/data-access';
import { createAction, props } from '@ngrx/store';

export const fruitsKey = '[Fruits]';

export const addFruit = createAction(
  `${fruitsKey} Add Fruit`,
  props<{ fruit: Fruit }>()
);

export const deleteFruit = createAction(
  `${fruitsKey} Delete Fruit`,
  props<{ id: string }>()
);
