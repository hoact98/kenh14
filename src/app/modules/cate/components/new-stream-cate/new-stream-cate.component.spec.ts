import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStreamCateComponent } from './new-stream-cate.component';

describe('NewStreamCateComponent', () => {
  let component: NewStreamCateComponent;
  let fixture: ComponentFixture<NewStreamCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStreamCateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStreamCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
