import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersListingComponent,
    AddEditUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
