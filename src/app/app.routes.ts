import { Routes } from '@angular/router';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {ProductListComponent} from './modules/products/product-list/product-list.component';
import {ProductDetailComponent} from './modules/products/product-detail/product-detail.component';
import {CartComponent} from './modules/shoppingCart/cart/cart.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { RegistroComponent } from './modules/registro/registro.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';

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
    },
      {
        path:'products',
        component: ProductListComponent,
      },
      {
        path:'products/:id',
        component: ProductDetailComponent,
      },
      {
        path:'shoppingCart',
        component: CartComponent,
      }
    ]
  },
  {
    path:'register',
    component: RegistroComponent
  },
];
