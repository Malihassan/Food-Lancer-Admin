import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageAreaModalComponent } from './coverage-area-modal.component';

describe('CoverageAreaModalComponent', () => {
  let component: CoverageAreaModalComponent;
  let fixture: ComponentFixture<CoverageAreaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageAreaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageAreaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
