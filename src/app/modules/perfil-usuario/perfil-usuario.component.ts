import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  imports: [],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent implements OnInit {
  user: any;

  ngOnInit() {
    let storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  calculateAge(dob: string): number {
    if (!dob) return 0;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }
  
}
