import { Component, OnInit } from '@angular/core';
import { User } from '../../../../core/interfaces/user';
import { UserService } from '../../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http-cli',
  imports: [CommonModule, FormsModule],
  templateUrl: './http-cli.component.html',
  styleUrl: './http-cli.component.css',
})
export class HttpCliComponent implements OnInit {
  users?: User[] = [];
  loading = false;
  newUser: User = { name: '', email: '' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching users', err);
        this.loading = false;
      },
    });
  }

  addUser() {
    if (!this.newUser.name || !this.newUser.email) return;

    this.userService.createUser(this.newUser).subscribe({
      next: (user) => {
        console.log('User added:', user);
        this.users?.push(user);
        this.newUser = { name: '', email: '' };
      },
      error: (err) => console.error('❌ Error adding user:', err),
    });
  }

  deleteUser(id?: number) {
    if (!id) return;
    this.userService.deleteUser(id).subscribe({
      next: () => {
        console.log('User deleted');
        this.users = this.users?.filter((u) => u.id !== id);
      },
      error: (err) => console.error('❌ Error deleting user:', err),
    });
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }
}
