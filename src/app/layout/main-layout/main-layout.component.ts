import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, FooterComponent, RouterLink, NavBarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
