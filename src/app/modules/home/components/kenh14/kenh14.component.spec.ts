import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kenh14Component } from './kenh14.component';

describe('Kenh14Component', () => {
  let component: Kenh14Component;
  let fixture: ComponentFixture<Kenh14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kenh14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kenh14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
