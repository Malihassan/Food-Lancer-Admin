import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverageAreaRoutingModule } from './coverage-area-routing.module';
import { RootCoverageAreaPageComponent } from './root-coverage-area-page/root-coverage-area-page.component';


@NgModule({
  declarations: [
    RootCoverageAreaPageComponent
  ],
  imports: [
    CommonModule,
    CoverageAreaRoutingModule
  ]
})
export class CoverageAreaModule { }
