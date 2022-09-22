import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCateComponent } from './menu-cate.component';

describe('MenuCateComponent', () => {
  let component: MenuCateComponent;
  let fixture: ComponentFixture<MenuCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
