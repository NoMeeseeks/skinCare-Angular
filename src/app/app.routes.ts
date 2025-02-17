import { Routes } from '@angular/router';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { RegistroComponent } from './modules/registro/registro.component';
import { PerfilUsuarioComponent } from './modules/perfil-usuario/perfil-usuario.component';

export const routes: Routes = [

  {
    path:'',
    component: MainLayoutComponent,
    children:[
      {
        path:'HomePage',
        component: HomePageComponent
      },
      {
        path:'Perfil',
        component: PerfilUsuarioComponent
      }
    ]
  },
  {
    path:'register', 
    component: RegistroComponent
  },
];
