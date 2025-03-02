import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import axios from 'axios';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  apiUrl = 'http://localhost:8000/api/login'; // Cambia esto por la URL de tu API

  constructor(private readonly router: Router) { }

  async login() {
    try {
      const res = await axios.post(`${this.apiUrl}`, {
        email: this.email,
        password: this.password,
      });

      const token = res.data.token; // Obtener el token desde la API
      const idUser = res.data.user.id;
      localStorage.setItem('token', token); // Guardar en localStorage
      localStorage.setItem('idUser', idUser); // Guardar en localStorage id usuario
      alert('Login exitoso!');
      this.router.navigate(['/dashboard']); // Redirigir al dashboard
    } catch (error) {
      alert('Error en login: Verifica tus credenciales');
      console.error(error);
    }
  }
}
