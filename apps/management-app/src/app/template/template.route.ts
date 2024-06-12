import { Routes } from "@angular/router";
import { TemplateComponent } from "./template.component";

export const TEMPLATE_ROUTES: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@management-app/fruits/shell').then(m => m.routes)
      },
    ]
  }
]