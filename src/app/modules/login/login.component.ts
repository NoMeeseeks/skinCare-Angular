import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

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

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Login successful!"
      });
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      this.router.navigate(['/']);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email or password.",
      });
    }
  }
}
