import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '@management-app/layout';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [CommonModule, RouterModule, LayoutComponent],
  templateUrl: './template.component.html',
  styles: `
    :host{
      display: block;
      height: 100%;
    }
  `,
})
export class TemplateComponent {}
