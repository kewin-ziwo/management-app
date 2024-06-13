import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  public get<T>(key: string): Observable<T> {
    const dbData = JSON.parse((localStorage.getItem(key) as any) || []) || null;
    return of<T>(dbData as T).pipe(delay(1000));
  }

  public post<T>(key: string, data: T): Observable<T> {
    const dbData = JSON.parse((localStorage.getItem(key) as any) || []) as T[];
    dbData.push(data);
    localStorage.setItem(key, JSON.stringify(dbData));
    return of<T>(dbData as T).pipe(delay(1000));
  }

  public getOne<T>(key: string, id: string): Observable<T> {
    const dbData = JSON.parse((localStorage.getItem(key) as any) || []) || [];
    const foundData = dbData.find((obj: any) => {
      return obj.id.toString() === id;
    });
    if (foundData) {
      return of<T>(foundData as T).pipe(delay(1000));
    }
    return of<T>(null as T).pipe(delay(1000));
  }

  public put<T>(key: string, id: string, data: any): Observable<T> {
    const dbData: any[] = JSON.parse(
      (localStorage.getItem(key) as any) || []
    );
    const foundItemIndex = dbData.findIndex((item: any) => {
      return item.id.toString() === id;
    });
    const updatedItem = { id: dbData[foundItemIndex].id, ...data };
    dbData.splice(foundItemIndex, 1, updatedItem);
    localStorage.setItem(key, JSON.stringify(dbData));
    return of<T>(updatedItem as T).pipe(delay(1000));
  }

  public delete<T>(key:string, id: string): Observable<T> {
    const dbData: any[] = JSON.parse(
      (localStorage.getItem(key) as any) || []
    );
    const foundItemIndex = dbData.findIndex((obj: any) => {
      return obj.id.toString() === id;
    });
    dbData.splice(foundItemIndex, 1);
    localStorage.setItem(key, JSON.stringify(dbData));
    return of<T>(dbData as T).pipe(delay(1000));
  }
}
