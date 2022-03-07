import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootOrderPageComponent } from './root-order-page.component';

describe('RootOrderPageComponent', () => {
  let component: RootOrderPageComponent;
  let fixture: ComponentFixture<RootOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
