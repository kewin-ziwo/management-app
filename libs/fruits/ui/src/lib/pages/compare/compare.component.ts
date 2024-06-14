import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareSharedComponent } from '@management-app/shared/ui';

@Component({
  selector: 'lib-compare',
  standalone: true,
  imports: [CommonModule, CompareSharedComponent],
  templateUrl: './compare.component.html',
  styles: ``,
})
export class CompareComponent {}
