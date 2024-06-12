import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {LoaderComponent} from '@management-app/shared/ui'

@Component({
  standalone: true,
  imports: [RouterModule, LoaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'management-app';
}
