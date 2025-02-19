import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  goToPassword() {
    this.router.navigate(['/ressetPassword']);
  }

  loginUser() {
    let emailInput = (document.getElementById('email') as HTMLInputElement).value;
    let passwordInput = (document.getElementById('password') as HTMLInputElement).value;

    let storedUser = localStorage.getItem('registeredUser');

    if (storedUser) {
      let userData = JSON.parse(storedUser);

      if (userData.email === emailInput && userData.password === passwordInput) {
        alert("Login successful!");
        localStorage.setItem('currentUser', JSON.stringify(userData)); // Guarda el usuario actual
        this.router.navigate(['/homePage']); // Redirige a la homePage
      } else {
        alert("Invalid email or password.");
      }
    } else {
      alert("No registered user found.");
    }
  }

}
