import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilerBuyerComponent } from './filer-buyer.component';

describe('FilerBuyerComponent', () => {
  let component: FilerBuyerComponent;
  let fixture: ComponentFixture<FilerBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilerBuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilerBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
