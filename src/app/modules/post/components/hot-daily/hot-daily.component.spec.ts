import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotDailyComponent } from './hot-daily.component';

describe('HotDailyComponent', () => {
  let component: HotDailyComponent;
  let fixture: ComponentFixture<HotDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotDailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
