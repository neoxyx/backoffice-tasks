import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = environment.apiUsers;

  async getUsers() {
    const token = localStorage.getItem('token'); // ⚡ Recupera el token si usas JWT
    const res = await axios.get(this.apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }

  async deleteUser(id: number) {
    const token = localStorage.getItem('token');
    await axios.delete(`${this.apiUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
