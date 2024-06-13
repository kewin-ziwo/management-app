import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LoadingService,
  Fruit,
} from '@management-app/shared/data-access';
import { ActivatedRoute } from '@angular/router';
import { FruitService } from '@management-app/fruits/api';

@Component({
  selector: 'lib-fruit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruit.component.html',
  styles: ``,
})
export class FruitComponent implements OnInit {
  LoadingService = inject(LoadingService);
  ActivatedRoute = inject(ActivatedRoute);
  FruitService = inject(FruitService);

  fruit: Fruit | null = null;

  ngOnInit(): void {
    const fruitId = this.ActivatedRoute.snapshot.params['id'] || null;
    this.loadFruit(fruitId);
  }

  loadFruit(fruitId: string) {
    if (!fruitId) return;
    const _this = this;
    _this.LoadingService.loadingOn();
    const getObs$ = _this.FruitService.getOne(fruitId);
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
