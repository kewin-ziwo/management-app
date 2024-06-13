import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '@management-app/shared/data-access';
import { Fruit } from 'libs/shared/data-access/src/lib/types/fruit';
import { Router } from '@angular/router';
import { FruitService } from '@management-app/fruits/api';
import { ButtonComponent } from '@management-app/shared/ui';

@Component({
  selector: 'lib-fruits',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './fruits.component.html',
})
export class FruitsComponent implements OnInit {
  LoadingService = inject(LoadingService);
  Router = inject(Router);
  FruitService = inject(FruitService);

  fruits: Fruit[] = [];

  ngOnInit(): void {
    this.loadFruits();
  }

  loadFruits() {
    this.FruitService.get()
    const _this = this;
    _this.LoadingService.loadingOn();
    const getObs$ = _this.FruitService.get();
    getObs$.subscribe({
      next(data) {
        console.log(data)
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

  onViewFruitClick(fruit: Fruit) {
    this.Router.navigate(['fruit', fruit.id]);
  }

  onEditFruitClick(fruit: Fruit) {
    this.Router.navigate(['edit-fruit', fruit.id]);
  }

  onDeleteFruitClick(fruit: Fruit) {
    const _this = this;
    _this.LoadingService.loadingOn();
    const getObs$ = _this.FruitService.delete(fruit.id.toString());
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
