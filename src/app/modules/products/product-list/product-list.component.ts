import { Component } from '@angular/core';
import {ImgComponent} from '../../../shared/components/img/img.component';
import {PaginationComponent} from '../components/pagination/pagination.component';
import {CardComponent} from '../components/card/card.component';

@Component({
  selector: 'product-list',
  imports: [
    ImgComponent, PaginationComponent, CardComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}
