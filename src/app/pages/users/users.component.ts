import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatTableModule],
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  private readonly router = inject(Router);
  users: any[] = [];
  displayedColumns: string[] = ['name', 'actions'];

  constructor(private readonly userService: UserService) { }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }

  async deleteUser(id: number) {
    await this.userService.deleteUser(id);
    this.users = this.users.filter(user => user.id !== id);
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
