import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resset-password',
  imports: [],
  templateUrl: './resset-password.component.html',
  styleUrl: './resset-password.component.css'
})
export class RessetPasswordComponent {
  showConfirmationMessage = false;
  constructor(private router: Router) {}
  onSubmit(event: Event) {
    event.preventDefault();
    this.showConfirmationMessage = true;
    console.log('Form submitted');


  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
