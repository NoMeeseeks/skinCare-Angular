import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../../core/services/products.service';
import { Products } from '../../../../core/interfaces/products';

@Component({
  selector: 'cards',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products: Products[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 12;
  paginatedProducts: Products[] = [];

  constructor(
    private router: Router,
    private productService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.loadProducts();

    // Subscribe to changes in the current page
    this.productService.currentPage$.subscribe((page) => {
      this.currentPage = page;
      this.updatePaginatedProducts();
    });
  }

  loadProducts(): void {
    this.productService.products().subscribe(
      (data) => {
        // @ts-ignore
        this.products = data['products'] as Products[];
        this.updatePaginatedProducts();
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  updatePaginatedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);

    console.log('Current Page:', this.currentPage);
    console.log('Paginated Products:', this.paginatedProducts);
  }

  productDetails(id: number): void {
    this.router.navigate(['/products', id]);
  }
}
