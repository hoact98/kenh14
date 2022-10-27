/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AdministratorUserDialogCreateComponent } from './create.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AdministratorUserDialogCreateComponent', () => {
  let component: AdministratorUserDialogCreateComponent;
  let fixture: ComponentFixture<AdministratorUserDialogCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorUserDialogCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorUserDialogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
