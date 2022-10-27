/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AdministratorSiteLayoutComponent } from './site-layout.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AdministratorSiteLayoutComponent', () => {
  let component: AdministratorSiteLayoutComponent;
  let fixture: ComponentFixture<AdministratorSiteLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorSiteLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorSiteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
