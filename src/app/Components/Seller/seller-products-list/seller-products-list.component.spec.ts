import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerProductsListComponent } from './seller-products-list.component';

describe('SellerProductsListComponent', () => {
  let component: SellerProductsListComponent;
  let fixture: ComponentFixture<SellerProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerProductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
