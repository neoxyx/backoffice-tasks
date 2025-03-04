import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { lastValueFrom } from 'rxjs';

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

  constructor(private readonly userService: UserService, private readonly dialog: MatDialog) { }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }

  editUser(id: any) {
    console.log('Editar usuario:', id);
    this.router.navigate([`users/edit/${id}`]);
  }

  async deleteUser(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: '¿Estás seguro de que deseas eliminar este usuario?' },
    });

    const result = await lastValueFrom(dialogRef.afterClosed());

    if (result) {
      await this.userService.deleteUser(id);
      this.users = this.users.filter(user => user.id !== id);
    }
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
