import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootProductPageComponent } from './root-product-page.component';

describe('RootProductPageComponent', () => {
  let component: RootProductPageComponent;
  let fixture: ComponentFixture<RootProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
