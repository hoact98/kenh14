/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AdministratorUserDialogUpdateComponent } from './update.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AdministratorUserDialogUpdateComponent', () => {
  let component: AdministratorUserDialogUpdateComponent;
  let fixture: ComponentFixture<AdministratorUserDialogUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorUserDialogUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorUserDialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
