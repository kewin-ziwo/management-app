import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { FRUITS } from '../mock-data/fruits';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  public get<T>(): Observable<T> {
    return of<T>(FRUITS as any).pipe(delay(5000));
  }
}
