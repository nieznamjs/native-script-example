import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { componentDeclarations, routes } from './users.common';
import { NativeScriptRouterModule } from 'nativescript-angular';

@NgModule({
  declarations: [
    ...componentDeclarations,
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes),
  ],
  exports: [
    NativeScriptRouterModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class UsersListModule { }
