import {Component} from '@angular/core';
import {ImgComponent} from "../../../shared/components/img/img.component";
import {Products} from '../../../core/interfaces/products';
import {ProductsService} from '../../../core/services/products.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'product-detail',
  imports: [
    ImgComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  product: Products | undefined;

  constructor(
    private productsService: ProductsService,
    private activeRoute: ActivatedRoute,
  ) {
    this.activeRoute.params.subscribe(params => {
      const paramId = params['id'];
      this.productsService.productById(paramId).subscribe(
        (data) => {
          // @ts-ignore
          this.product = data['product'] as Products;
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
    })
  }


}
