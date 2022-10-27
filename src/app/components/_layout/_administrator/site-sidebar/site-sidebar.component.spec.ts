/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AdministratorSiteSideBarComponent } from './site-sidebar.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AdministratorSiteSideBarComponent', () => {
  let component: AdministratorSiteSideBarComponent;
  let fixture: ComponentFixture<AdministratorSiteSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorSiteSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorSiteSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
