import { Component } from '@angular/core';
import {ImgComponent} from "../../../shared/components/img/img.component";

@Component({
  selector: 'product-detail',
    imports: [
        ImgComponent
    ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

}
