import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootAccountPageComponent } from './root-account-page.component';

describe('RootAccountPageComponent', () => {
  let component: RootAccountPageComponent;
  let fixture: ComponentFixture<RootAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootAccountPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
