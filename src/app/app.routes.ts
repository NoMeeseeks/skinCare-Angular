import { Routes } from '@angular/router';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {ProductListComponent} from './modules/products/product-list/product-list.component';
import {ProductDetailComponent} from './modules/products/product-detail/product-detail.component';
import {CartComponent} from './modules/shoppingCart/cart/cart.component';

export const routes: Routes = [

  {
    path:'',
    component: MainLayoutComponent,
    children: [
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
];
