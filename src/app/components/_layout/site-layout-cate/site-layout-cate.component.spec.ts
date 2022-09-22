import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutCateComponent } from './site-layout-cate.component';

describe('SiteLayoutCateComponent', () => {
  let component: SiteLayoutCateComponent;
  let fixture: ComponentFixture<SiteLayoutCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteLayoutCateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
