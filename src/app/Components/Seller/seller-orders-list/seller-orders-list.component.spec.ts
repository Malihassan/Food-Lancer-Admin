import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerOrdersListComponent } from './seller-orders-list.component';

describe('SellerOrdersListComponent', () => {
  let component: SellerOrdersListComponent;
  let fixture: ComponentFixture<SellerOrdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerOrdersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
