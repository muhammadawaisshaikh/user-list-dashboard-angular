import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    UsersComponent,
    UsersListingComponent,
    AddEditUserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule
  ]
})
export class UsersModule { }
