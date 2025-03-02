import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { LoginComponent } from './pages/login/login.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskEditStateComponent } from './components/task-edit-state/task-edit-state.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a login por defecto
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/edit/:id', component: TaskEditStateComponent }, // Ruta para edición
  { path: 'tasks/create', component: TaskFormComponent } // Ruta para creación
];
