import { Routes } from '@angular/router';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import { HomePageComponent } from './modules/home-page/home-page.component';

export const routes: Routes = [

  {
    path:'',
    component: MainLayoutComponent,
    children:[
      {
        path:'HomePage',
        component: HomePageComponent
      },
    ]
  },
];
