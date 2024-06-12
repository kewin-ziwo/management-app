import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@management-app/shared/data-access';

@Component({
  selector: 'lib-fruits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruits.component.html',
})

export class FruitsComponent implements OnInit{

    
  ApiService = inject(ApiService)

  ngOnInit(): void {
    const x = this.ApiService.get()
    x.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });
  }
}
