import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, LoadingService } from '@management-app/shared/data-access';
import { Fruit } from 'libs/shared/data-access/src/lib/types/fruit';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-fruits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruits.component.html',
})
export class FruitsComponent implements OnInit {
  ApiService = inject(ApiService);
  LoadingService = inject(LoadingService);
  Router = inject(Router);

  fruits: Fruit[] = [];

  ngOnInit(): void {
    this.loadFruits();
  }

  loadFruits() {
    const _this = this;
    _this.LoadingService.loadingOn();
    const getObs$ = _this.ApiService.get<Fruit[]>();
    getObs$.subscribe({
      next(data) {
        _this.fruits = data;
      },
      complete() {
        console.log('Finished sequence');
        _this.LoadingService.loadingOff();
      },
    });
  }

  onAddFruitClick() {
    this.Router.navigate(['add-fruit']);
  }

  onViewFruitClick(fruit: Fruit) {}

  onEditFruitClick(fruit: Fruit) {
    this.Router.navigate(['edit-fruit', fruit.id]);
  }

  onDeleteFruitClick(fruit: Fruit) {
    const _this = this;
    _this.LoadingService.loadingOn();
    const getObs$ = _this.ApiService.delete<Fruit[]>(fruit.id.toString());
    getObs$.subscribe({
      next(data) {
        _this.fruits = [...data];
      },
      complete() {
        _this.LoadingService.loadingOff();
      },
    });
  }
}
