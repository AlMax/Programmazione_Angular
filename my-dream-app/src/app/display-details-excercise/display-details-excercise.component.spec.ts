import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailsExcerciseComponent } from './display-details-excercise.component';

describe('DisplayDetailsExcerciseComponent', () => {
  let component: DisplayDetailsExcerciseComponent;
  let fixture: ComponentFixture<DisplayDetailsExcerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailsExcerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDetailsExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
