import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service'
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-edit-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  standalone: true,
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.scss'],
})
export class UserEditFormComponent implements OnInit {
  userForm: FormGroup;
  userId!: number;

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.userId) {
      try {
        const user = await this.userService.getUsers(); // Aquí podrías implementar un `getUserById`
        const selectedUser = user.find((u: any) => u.id === this.userId);
        if (selectedUser) {
          this.userForm.patchValue(selectedUser);
        }
      } catch (error) {
        console.error('Error al cargar el usuario', error);
      }
    }
  }

  async submitForm() {
    if (this.userForm.valid) {
      try {
        await this.userService.updateUser(this.userId, this.userForm.value);
        alert('Usuario actualizado exitosamente');
        this.router.navigate(['/users']);
      } catch (error) {
        console.error('Error al actualizar usuario', error);
      }
    }
  }

  goUsers() {
    this.router.navigate(['/users']);
  }
}
