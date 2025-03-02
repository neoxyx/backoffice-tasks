import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  private readonly router = inject(Router);
  private readonly taskService = inject(TaskService);
  private readonly fb = inject(FormBuilder);
  idUser = localStorage.getItem('idUser');
  taskForm = this.fb.group({
    user_id: [this.idUser, Validators.required],
    title: ['', Validators.required], // Solo se usa para crear
    description: ['', Validators.required], // Solo se usa para crear
  });

  isEditMode = false;

  submitForm() {
    if (this.taskForm.invalid) return;
    this.taskService.createTask(this.taskForm.value);
    this.router.navigate(['/tasks']);
  }

  goTasks() {
    this.router.navigate(['/tasks']);
  }
}
