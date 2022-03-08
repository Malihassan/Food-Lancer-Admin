import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootBuyerPageComponent } from './root-buyer-page.component';

describe('RootBuyerPageComponent', () => {
  let component: RootBuyerPageComponent;
  let fixture: ComponentFixture<RootBuyerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootBuyerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootBuyerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
