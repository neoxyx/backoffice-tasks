import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    FormsModule
  ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  private readonly router = inject(Router);
  tasks: any[] = [];
  displayedColumns: string[] = ['title', 'status', 'due_date', 'actions'];

  constructor(private readonly taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
    // 🔄 Detecta cuando el usuario vuelve a la vista
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.getTasks();
    });
  }

  async getTasks() {
    this.tasks = await this.taskService.getTasks();
  }

  editTask(id: any) {
    console.log('Editar tarea:', id);
    this.router.navigate([`tasks/edit/${id}`]);
  }

  deleteTask(id: number) {
    console.log('Eliminar tarea con ID:', id);
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      pending: 'Pendiente',
      completed: 'Completada',
      in_progress: 'En Progreso',
      delayed: 'Atrasada'
    };
    return labels[status] || 'Desconocido';
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      pending: 'warn',
      completed: 'primary',
      delayed: 'accent'
    };
    return colors[status] || 'default';
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  setTasks() {
    this.router.navigate(['/tasks/create']);
  }
}
