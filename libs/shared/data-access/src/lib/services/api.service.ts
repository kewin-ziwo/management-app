import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  public get<T>(key: string): Observable<T> {
    const dbData = JSON.parse((localStorage.getItem(key) as any) || []);
    return of<T>(dbData as T).pipe(delay(1000));
  }

  public post<T>(key: string, data: T): Observable<T> {
    const dbData = JSON.parse(
      (localStorage.getItem(key) as any) || []
    ) as T[];
    dbData.push(data);
    localStorage.setItem(key, JSON.stringify(dbData));
    return of<T>(dbData as T).pipe(delay(1000));
  }

  public getOne<T>(id: string): Observable<T> {
    const fruits = JSON.parse((localStorage.getItem('fruits') as any) || []);
    const fruit = fruits.find((fruit: any) => {
      return fruit.id.toString() === id;
    });
    return of<T>(fruit as T).pipe(delay(1000));
  }

  public put<T>(id: string, data: any): Observable<T> {
    const fruits: any[] = JSON.parse(
      (localStorage.getItem('fruits') as any) || []
    );
    const fruitIndex = fruits.findIndex((fruit: any) => {
      return fruit.id.toString() === id;
    });
    const updatedFruit = { id: fruits[fruitIndex].id, ...data };
    fruits.splice(fruitIndex, 1, updatedFruit);
    localStorage.setItem('fruits', JSON.stringify(fruits));
    return of<T>(updatedFruit as T).pipe(delay(1000));
  }

  public delete<T>(id: string): Observable<T> {
    const fruits: any[] = JSON.parse(
      (localStorage.getItem('fruits') as any) || []
    );
    const fruitIndex = fruits.findIndex((fruit: any) => {
      return fruit.id.toString() === id;
    });
    fruits.splice(fruitIndex, 1);
    localStorage.setItem('fruits', JSON.stringify(fruits));
    return of<T>(fruits as T).pipe(delay(1000));
  }
}
