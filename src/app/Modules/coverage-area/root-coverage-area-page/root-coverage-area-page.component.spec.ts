import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCoverageAreaPageComponent } from './root-coverage-area-page.component';

describe('RootCoverageAreaPageComponent', () => {
  let component: RootCoverageAreaPageComponent;
  let fixture: ComponentFixture<RootCoverageAreaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootCoverageAreaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootCoverageAreaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
