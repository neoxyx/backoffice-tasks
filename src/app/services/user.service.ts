import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = 'http://127.0.0.1:8000/api/users';

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
