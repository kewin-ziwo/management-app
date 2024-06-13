import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApiService,
  LoadingService,
  Fruit,
} from '@management-app/shared/data-access';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-fruit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruit.component.html',
  styles: ``,
})
export class FruitComponent implements OnInit {
  ApiService = inject(ApiService);
  LoadingService = inject(LoadingService);
  ActivatedRoute = inject(ActivatedRoute);

  fruit: Fruit | null = null;

  ngOnInit(): void {
    const fruitId = this.ActivatedRoute.snapshot.params['id'] || null;
    this.loadFruit(fruitId);
  }

  loadFruit(fruitId: string) {
    if (!fruitId) return;
    const _this = this;
    _this.LoadingService.loadingOn();
    const getObs$ = _this.ApiService.getOne<Fruit>(fruitId);
    getObs$.subscribe({
      next(data) {
        _this.fruit = data;
      },
      complete() {
        _this.LoadingService.loadingOff();
      },
    });
  }
}
