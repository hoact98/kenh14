import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStreamPostComponent } from './new-stream-post.component';

describe('NewStreamPostComponent', () => {
  let component: NewStreamPostComponent;
  let fixture: ComponentFixture<NewStreamPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStreamPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStreamPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
