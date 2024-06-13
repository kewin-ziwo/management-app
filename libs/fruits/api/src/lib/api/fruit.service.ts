import { Injectable, inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { ApiService, Fruit } from '@management-app/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  private ApiService = inject(ApiService);

  public get(): Observable<Fruit[]> {
    return this.ApiService.get<Fruit[]>('fruits');
  }

  public getOne(fruitId: string): Observable<Fruit> {
    return this.ApiService.getOne<Fruit>('fruits', fruitId);
  }

  public post(fruit: Fruit): Observable<Fruit> {
    return this.ApiService.post<Fruit>('fruits', fruit);
  }

  public put(id: string, fruit: Fruit): Observable<Fruit> {
    return this.ApiService.put<Fruit>('fruits', id, fruit);
  }

  public delete(id: string): Observable<Fruit[]> {
    return this.ApiService.delete<Fruit[]>('fruits', id);
  }
}
