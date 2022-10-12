/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AdministratorCategoryDialogCreateComponent } from './create.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AdministratorCategoryDialogCreateComponent', () => {
  let component: AdministratorCategoryDialogCreateComponent;
  let fixture: ComponentFixture<AdministratorCategoryDialogCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorCategoryDialogCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorCategoryDialogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
