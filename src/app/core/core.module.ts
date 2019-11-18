import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { routes } from './core.common';
import { UsersModule } from '../features/users/users.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    UsersModule,
  ],
  exports: [
    RouterModule,
    UsersModule,
  ],
})
export class CoreModule { }
