import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { componentDeclarations, routes } from './users.common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ...componentDeclarations,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class UsersModule { }
