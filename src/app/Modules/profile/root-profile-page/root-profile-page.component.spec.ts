import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootProfilePageComponent } from './root-profile-page.component';

describe('RootProfilePageComponent', () => {
  let component: RootProfilePageComponent;
  let fixture: ComponentFixture<RootProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
