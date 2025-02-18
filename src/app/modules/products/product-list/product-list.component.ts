import { Component } from '@angular/core';
import {ImgComponent} from '../../../shared/components/img/img.component';
import {PaginationComponent} from '../components/pagination/pagination.component';
import {CardComponent} from '../components/card/card.component';
import {Products} from '../../../core/interfaces/products';
import {ProductsService} from '../../../core/services/products.service';

@Component({
  selector: 'product-list',
  imports: [
    ImgComponent, PaginationComponent, CardComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Products[] = [];
  filteredProducts: Products[] = [];

  constructor(private productService: ProductsService) {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.products().subscribe(
      (data) => {
        // @ts-ignore
        this.products = data['products'] as Products[];
        console.log(this.products);
        this.filteredProducts = this.products; // Initialize filteredProducts with all products
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.product_name.toLowerCase().includes(searchTerm) ||
      product.price.toString().includes(searchTerm)
    );
  }
}
