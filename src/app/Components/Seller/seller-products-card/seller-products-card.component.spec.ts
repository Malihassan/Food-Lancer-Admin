import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerProductsCardComponent } from './seller-products-card.component';

describe('SellerProductsCardComponent', () => {
  let component: SellerProductsCardComponent;
  let fixture: ComponentFixture<SellerProductsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerProductsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerProductsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
