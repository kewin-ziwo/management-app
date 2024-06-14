import { Injectable, inject } from '@angular/core';
import { selectFruits } from '@management-app/fruits/data-access';
import { Fruit } from '@management-app/shared/data-access';
import { Store } from '@ngrx/store';
import { addFruit } from 'libs/fruits/data-access/src/lib/+store/fruit.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FruitFacadeService {
    private readonly store: Store = inject(Store);

    readonly messages$: Observable<Fruit[]> = this.store.select(selectFruits);
  
    addFruit(fruit: Fruit): void {
      this.store.dispatch(addFruit({ fruit }));
    }
}