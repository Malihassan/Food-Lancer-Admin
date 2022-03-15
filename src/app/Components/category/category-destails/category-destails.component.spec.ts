import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDestailsComponent } from './category-destails.component';

describe('CategoryDestailsComponent', () => {
  let component: CategoryDestailsComponent;
  let fixture: ComponentFixture<CategoryDestailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryDestailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDestailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
