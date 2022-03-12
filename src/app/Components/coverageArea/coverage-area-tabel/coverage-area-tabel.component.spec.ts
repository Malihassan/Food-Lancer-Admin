import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageAreaTabelComponent } from './coverage-area-tabel.component';

describe('CoverageAreaTabelComponent', () => {
  let component: CoverageAreaTabelComponent;
  let fixture: ComponentFixture<CoverageAreaTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageAreaTabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageAreaTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
