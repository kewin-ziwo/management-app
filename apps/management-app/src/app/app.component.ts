import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoaderComponent } from '@management-app/shared/ui';
import { FRUITS } from 'libs/shared/data-access/src/lib/mock-data/fruits';

@Component({
  standalone: true,
  imports: [RouterModule, LoaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'management-app';

  constructor() {
    const existingFruits = JSON.parse((localStorage.getItem('fruits') as any)) as [] || [];
    if (existingFruits.length) {
      localStorage.setItem('fruits', JSON.stringify(existingFruits));
    } else {
      localStorage.setItem('fruits', JSON.stringify(FRUITS));
    }
  }
}
