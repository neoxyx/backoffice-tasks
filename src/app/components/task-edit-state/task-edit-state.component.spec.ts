import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditStateComponent } from './task-edit-state.component';

describe('TaskEditStateComponent', () => {
  let component: TaskEditStateComponent;
  let fixture: ComponentFixture<TaskEditStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEditStateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskEditStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
