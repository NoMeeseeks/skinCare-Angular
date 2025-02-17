import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://wq9o5azd1d.execute-api.us-east-2.amazonaws.com/products'; // Replace with your actual API endpoint
  private currentPageSubject = new BehaviorSubject<number>(1);
  currentPage$ = this.currentPageSubject.asObservable();
  private totalProducts: number = 0;

  constructor(private http: HttpClient) {}

  products(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  productById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id)
  }

  setCurrentPage(page: number): void {
    this.currentPageSubject.next(page);
  }

  getTotalProducts(): number {
    return this.totalProducts;
  }

  setTotalProducts(total: number): void {
    this.totalProducts = total;
  }
}
