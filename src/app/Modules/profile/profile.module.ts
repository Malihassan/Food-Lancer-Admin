import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { RootProfilePageComponent } from './root-profile-page/root-profile-page.component';


@NgModule({
  declarations: [
    RootProfilePageComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
