import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCateComponent } from './featured-cate.component';

describe('FeaturedCateComponent', () => {
  let component: FeaturedCateComponent;
  let fixture: ComponentFixture<FeaturedCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedCateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
