import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarruselComponent } from '../../shared/components/carrusel/carrusel.component';

@Component({
  selector: 'app-home-page',
  imports:[
    RouterLink, CarruselComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
