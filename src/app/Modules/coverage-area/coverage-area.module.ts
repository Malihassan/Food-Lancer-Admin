import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { CoverageAreaTabelComponent } from '../../components/coverageArea/coverage-area-tabel/coverage-area-tabel.component';
import { CoverageAreaModalComponent } from '../../components/coverageArea/coverage-area-modal/coverage-area-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ShareModule } from 'src/app/shared/module/share/share.module';

import { CoverageAreaRoutingModule } from './coverage-area-routing.module';
import { RootCoverageAreaPageComponent } from './root-coverage-area-page/root-coverage-area-page.component';

@NgModule({
  declarations: [CoverageAreaTabelComponent, RootCoverageAreaPageComponent,CoverageAreaModalComponent],
  imports: [CommonModule, ShareModule, CoverageAreaRoutingModule,NgbModule,ReactiveFormsModule],
  exports: [CoverageAreaTabelComponent,CoverageAreaModalComponent],
})
export class CoverageAreaModule {}
