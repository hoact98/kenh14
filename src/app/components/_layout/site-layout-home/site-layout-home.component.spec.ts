import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutHomeComponent } from './site-layout-home.component';

describe('SiteLayoutHomeComponent', () => {
  let component: SiteLayoutHomeComponent;
  let fixture: ComponentFixture<SiteLayoutHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteLayoutHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
