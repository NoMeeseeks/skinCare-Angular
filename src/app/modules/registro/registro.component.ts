import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [
    RouterLink
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  user = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    dob: ''
  };
  confirmPassword = '';

  constructor(private router: Router) {}

  registerUser(name: string, lastName: string, email: string, password: string, confirmPassword: string, dob: string) {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    let userData = { name, lastName, email, password, dob };

    localStorage.setItem('registeredUser', JSON.stringify(userData));

    alert("Registration successful! Please log in.");
    this.router.navigate(['/login']);
  }
}
