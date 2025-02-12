import { Component } from '@angular/core';
import {ImgComponent} from '../../../shared/components/img/img.component';

@Component({
  selector: 'product-list',
  imports: [
    ImgComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products = [
    {
      id: 1,
      name: 'Beauty of Joseon Sunscream',
      price: 13,
    },
    {
      id: 2,
      name: 'Beauty of Joseon Sunscream',
      price: 13,
    },
    {
      id: 3,
      name: 'Beauty of Joseon Sunscream',
      price: 13,
    },
    {
      id: 4,
      name: 'Beauty of Joseon Sunscream',
      price: 13,
    },
    {
      id: 5,
      name: 'Beauty of Joseon Sunscream',
      price: 13,
    },
    {
      id: 6,
      name: 'Beauty of Joseon Sunscream',
      price: 13,
    },
    {
      id: 7,
      name: 'Beauty of Joseon Sunscream',
      price: 13,
    },
    {
      id: 8,
      name: 'Beauty of Joseon Sunscream',
      price: 13,
    },
    {
      id: 9,
      name: 'Beauty of Joseon Sunscream',
      price: 13,
    },
    {
      id: 10,
      name: 'Beauty of Joseon Sunscream',
      price: 13,
    },
    {
      id: 11,
      name: 'Beauty of Joseon Sunscream',
      price: 13,
    },
    {
      id: 12,
      name: 'Beauty of Joseon Sunscream',
      price: 13,
    },
  ]

}
