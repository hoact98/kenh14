/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AuthLogoutComponent } from './logout.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AuthLogoutComponent', () => {
  let component: AuthLogoutComponent;
  let fixture: ComponentFixture<AuthLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
