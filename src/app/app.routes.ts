import { Routes } from '@angular/router';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { RegistroComponent } from './modules/registro/registro.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { LoginComponent } from './modules/login/login.component';
import { RessetPasswordComponent } from './modules/resset-password/resset-password.component';

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
      path:'AboutUs',
      component: AboutUsComponent
    }
    ]
  },
  {
    path:'register', 
    component: RegistroComponent
  },
  {
    path:'Login', 
    component: LoginComponent
  },
  {
    path:'RessetPassword',
    component: RessetPasswordComponent
  }
];
