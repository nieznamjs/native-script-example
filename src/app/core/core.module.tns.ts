import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { routes } from './core.common';
import { UsersListModule } from '../features/users/users.module.tns';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptHttpClientModule,
    NativeScriptRouterModule.forRoot(routes),
    UsersListModule,
  ],
  exports: [
    NativeScriptRouterModule,
    UsersListModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule { }
