import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
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

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    const foundUser = users.find((user: any) => user.email === emailInput && user.password === passwordInput);

    if (foundUser) {
      alert("Login successful!");
      localStorage.setItem('currentUser', JSON.stringify(foundUser)); 
      this.router.navigate(['/homePage']); 
    } else {
      alert("Invalid email or password.");
    }
  }
}
