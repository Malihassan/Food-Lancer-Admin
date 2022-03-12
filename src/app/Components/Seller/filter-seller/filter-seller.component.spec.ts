import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSellerComponent } from './filter-seller.component';

describe('FilterSellerComponent', () => {
  let component: FilterSellerComponent;
  let fixture: ComponentFixture<FilterSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
