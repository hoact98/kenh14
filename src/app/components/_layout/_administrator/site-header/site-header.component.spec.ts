/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AdministratorSiteHeaderComponent } from './site-header.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('SiteHeaderComponent', () => {
  let component: AdministratorSiteHeaderComponent;
  let fixture: ComponentFixture<AdministratorSiteHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorSiteHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorSiteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
