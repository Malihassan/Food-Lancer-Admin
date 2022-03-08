import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootSellerPageComponent } from './root-seller-page.component';

describe('RootSellerPageComponent', () => {
  let component: RootSellerPageComponent;
  let fixture: ComponentFixture<RootSellerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootSellerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootSellerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
