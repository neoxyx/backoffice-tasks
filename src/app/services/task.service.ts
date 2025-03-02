import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly apiUrl = environment.apiTasks;

  async getTasks() {
    const token = localStorage.getItem('token');
    const idUser = localStorage.getItem('idUser');
    const res = await axios.get(`${this.apiUrl}user/${idUser}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }

  async createTask(task: any) {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No hay token disponible');
      }
      const res = await axios.post(this.apiUrl, task, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.error('Error al crear la tarea:', error);
      throw error;
    }
  }

  async updateTask(id: any, status: any) {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No hay token disponible');
      }
      const res = await axios.patch(`${this.apiUrl}${id}/status`, status, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.error('Error al actualizar el estado de la tarea:', error);
      throw error;
    }
  }
}
