import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerOrdersCardComponent } from './seller-orders-card.component';

describe('SellerOrdersCardComponent', () => {
  let component: SellerOrdersCardComponent;
  let fixture: ComponentFixture<SellerOrdersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerOrdersCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerOrdersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
