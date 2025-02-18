import { Component } from '@angular/core';
import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  thingsPerPage: number = 12;
  currentPage: number = 1;

  constructor(private productService: ProductsService) {}

  changePage(page: number): void {
    this.currentPage = page;
    this.productService.setCurrentPage(page);
  }

  get totalPages(): number {
    return 5;
  }

  getPagesArray(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}
