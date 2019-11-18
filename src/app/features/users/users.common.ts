import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

export const componentDeclarations: any[] = [
  UsersListComponent,
  UsersDetailsComponent,
];

export const routes: Routes = [
  {
    path: 'users', children: [
      { path: '', component: UsersListComponent },
      { path: ':id/details', component: UsersDetailsComponent },
    ],
  },
];
