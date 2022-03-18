import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOffcanvasComponent } from './filter-offcanvas.component';

describe('FilterOffcanvasComponent', () => {
  let component: FilterOffcanvasComponent;
  let fixture: ComponentFixture<FilterOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterOffcanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
