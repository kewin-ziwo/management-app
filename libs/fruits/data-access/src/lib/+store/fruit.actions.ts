import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const FruitActions = createActionGroup({
  source: 'Fruit',
  events: {
    'Load Fruits': emptyProps(),
    
    
  }
});
