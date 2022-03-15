import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootSellerDetailsPageComponent } from './root-seller-details-page.component';

describe('RootSellerDetailsPageComponent', () => {
  let component: RootSellerDetailsPageComponent;
  let fixture: ComponentFixture<RootSellerDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootSellerDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootSellerDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
