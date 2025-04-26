import { Routes } from '@angular/router';
import { DogsListComponent } from './dogs-list.component';
import { DogViewComponent } from './dog-view.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: DogsListComponent },
  {path: 'details/:index', component: DogViewComponent}
];
