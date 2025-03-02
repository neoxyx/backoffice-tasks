import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private readonly router: Router) { }

  logout() {
    localStorage.removeItem('token'); // Eliminar el token de autenticación
    this.router.navigate(['/login']); // Redirigir al login
  }

  users(){
    this.router.navigate(['/users']);
  }

  tasks(){
    this.router.navigate(['/tasks']);
  }
}
