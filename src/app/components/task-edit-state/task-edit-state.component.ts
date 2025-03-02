import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { TaskService } from '../../services/task.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-edit-state',
  standalone: true,
  templateUrl: './task-edit-state.component.html',
  styleUrl: './task-edit-state.component.scss',
  imports: [CommonModule, ReactiveFormsModule, MatToolbar, MatButtonModule, MatIcon, MatFormField, MatLabel, MatOptionModule, MatSelect]
})
export class TaskEditStateComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly taskService = inject(TaskService);

  taskId?: number;
  taskForm = this.fb.group({
    status: ['']
  });

  ngOnInit() {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
  }

  async updateTask() {
    if (this.taskForm.valid) {
      await this.taskService.updateTask(this.taskId, { status: this.taskForm.value.status });
    }
    this.router.navigate(['/tasks']);
  }

  goTasks() {
    this.router.navigate(['/tasks']);
  }
}
