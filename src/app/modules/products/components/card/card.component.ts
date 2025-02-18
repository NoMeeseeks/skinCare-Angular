import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../../core/services/products.service';
import { Products } from '../../../../core/interfaces/products';

@Component({
  selector: 'cards',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() products: Products[] = []; // Input property for filtered products
  currentPage: number = 1;
  itemsPerPage: number = 12;
  paginatedProducts: Products[] = [];

  constructor(
    private router: Router,
    private productService: ProductsService,
  ) {}

  ngOnInit(): void {
    // Subscribe to changes in the current page
    this.productService.currentPage$.subscribe((page) => {
      this.currentPage = page;
      this.updatePaginatedProducts();
    });

    // Initialize paginated products
    this.updatePaginatedProducts();
  }

  ngOnChanges(): void {
    // Update paginated products whenever the input products change
    this.updatePaginatedProducts();
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
