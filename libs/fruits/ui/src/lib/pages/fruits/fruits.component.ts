import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-fruits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruits.component.html',
})
export class FruitsComponent {}
