import {Component} from '@angular/core';
import {ImgComponent} from "../../../shared/components/img/img.component";
import {Products} from '../../../core/interfaces/products';
import {ProductsService} from '../../../core/services/products.service';
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'product-detail',
  imports: [
    ImgComponent,
    FormsModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  // @ts-ignore
  product: Products;
  quantity: number = 1;

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
  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  // saveProductToLocalStorage(product: Products, quantity: number) {
  //   // Asignar la cantidad al producto
  //   product.quantity = quantity;
  //
  //   // Obtener la lista de productos del localStorage
  //   let productsList: Products[] = [];
  //
  //   // Verificar si ya existe una lista de productos en el localStorage
  //   const storedProducts = localStorage.getItem('productsList');
  //   if (storedProducts) {
  //     // Si existe, parsear la lista de productos
  //     productsList = JSON.parse(storedProducts);
  //   }
  //
  //   // Verificar si el producto ya está en la lista
  //   const existingProductIndex = productsList.findIndex(
  //     (p) => p.id === product.id // Asume que cada producto tiene un `id` único
  //   );
  //
  //   if (existingProductIndex !== -1) {
  //     // Si el producto ya está en la lista, actualizar su cantidad
  //     productsList[existingProductIndex].quantity += quantity;
  //   } else {
  //     // Si el producto no está en la lista, agregarlo
  //     productsList.push(product);
  //   }
  //
  //   // Guardar la lista actualizada en el localStorage
  //   localStorage.setItem('productsList', JSON.stringify(productsList));
  // }

  // Método para guardar el producto en el localStorage
  saveProductToLocalStorage(product: Products, quantity: number) {
    // Asignar la cantidad al producto
    product.quantity = quantity;

    // Obtener la lista de productos del localStorage
    let productsList: Products[] = [];

    // Verificar si ya existe una lista de productos en el localStorage
    const storedProducts = localStorage.getItem('productsList');
    if (storedProducts) {
      // Si existe, parsear la lista de productos
      productsList = JSON.parse(storedProducts);
    }

    // Verificar si el producto ya está en la lista
    const existingProductIndex = productsList.findIndex(
      (p) => p.id === product.id // Asume que cada producto tiene un `id` único
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya está en la lista, actualizar su cantidad
      productsList[existingProductIndex].quantity += quantity;
    } else {
      // Si el producto no está en la lista, agregarlo
      productsList.push(product);
    }

    // Guardar la lista actualizada en el localStorage
    localStorage.setItem('productsList', JSON.stringify(productsList));

    console.log('Producto agregado al carrito:', product);
    console.log('Cantidad:', quantity);
  }

}
