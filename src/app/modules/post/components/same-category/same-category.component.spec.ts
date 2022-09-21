import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameCategoryComponent } from './same-category.component';

describe('SameCategoryComponent', () => {
  let component: SameCategoryComponent;
  let fixture: ComponentFixture<SameCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SameCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SameCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
