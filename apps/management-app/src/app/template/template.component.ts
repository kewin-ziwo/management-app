import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './template.component.html',
  styles: ``,
})
export class TemplateComponent {}
