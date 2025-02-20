import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [RouterLink],
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

    // Obtener usuarios existentes o inicializar un arreglo vacío
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    // Verificar si el correo ya está registrado
    const existingUser = users.find((user: any) => user.email === email);
    if (existingUser) {
      alert("This email is already registered.");
      return;
    }

    // Crear el nuevo usuario
    const newUser = { name, lastName, email, password, dob };
    users.push(newUser); // Agregarlo al arreglo de usuarios

    // Guardar en localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful! Please log in.");
    this.router.navigate(['/login']);
  }
}
