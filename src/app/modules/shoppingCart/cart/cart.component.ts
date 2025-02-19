import {Component} from '@angular/core';
import {ImgComponent} from '../../../shared/components/img/img.component';
import {Products} from '../../../core/interfaces/products';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [
    ImgComponent,
    FormsModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  // @ts-ignore
  products:Products[] = [];

  // constructor() {
  //   const storedProducts = localStorage.getItem('productsList');
  //   if (storedProducts) {
  //     // Convertimos el valor de localStorage de vuelta a un array de objetos Products
  //     this.products = JSON.parse(storedProducts);
  //   }
  // }
  // incrementQuantity(quantity:number) {
  //   quantity++;
  // }
  //
  // decrementQuantity(quantity:number) {
  //   if (quantity > 1) {
  //     quantity--;
  //   }
  // }
  // removeProduct(productId: number): void {
  //   // Filtrar el array de productos para eliminar el producto con el id dado
  //   this.products = this.products.filter(product => product.id !== productId);
  //
  //   // Actualizar localStorage con la lista de productos modificada
  //   localStorage.setItem('productsList', JSON.stringify(this.products));
  // }
  // products: Products[] = []; // Lista de productos en el carrito
  checkedProducts: { [key: number]: boolean } = {}; // Estado de los checkboxes
  orderSummary: any = {}; // Resumen de la orden
  couponCode: string = ''; // Código de cupón ingresado
  validCoupons: string[] = ['DESC5', 'DESC10', 'DESC15']; // Cupones válidos
  discount: number = 0; // Descuento aplicado
  shippingCost: number = 20; // Costo de envío fijo para Ecuador

  ngOnInit() {
    this.loadProductsFromLocalStorage(); // Cargar productos al iniciar
    this.calculateOrderSummary(); // Calcular el resumen inicial
  }

  // Cargar productos desde el localStorage
  loadProductsFromLocalStorage() {
    const storedProducts = localStorage.getItem('productsList');
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
      // Inicializar todos los productos como seleccionados por defecto
      this.products.forEach((product) => (this.checkedProducts[product.id] = true));
    }
  }

  // Calcular el resumen de la orden
  calculateOrderSummary() {
    const selectedProducts = this.products.filter(
      (product) => this.checkedProducts[product.id] // Filtrar productos seleccionados
    );
    const subtotal = selectedProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    const tax = subtotal * 0.1; // Supongamos un 10% de impuestos
    const totalBeforeDiscount = subtotal + tax + this.shippingCost;
    const total = totalBeforeDiscount - this.discount;

    this.orderSummary = {
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      shipping: this.shippingCost.toFixed(2),
      discount: this.discount.toFixed(2),
      total: total.toFixed(2),
    };
  }

  // Aplicar un cupón de descuento
  applyCoupon() {
    if (this.validCoupons.includes(this.couponCode)) {
      switch (this.couponCode) {
        case 'DESC5':
          this.discount = 5;
          break;
        case 'DESC10':
          this.discount = 10;
          break;
        case 'DESC15':
          this.discount = 15;
          break;
        default:
          this.discount = 0;
      }
      alert('Cupón aplicado correctamente.');
    } else {
      this.discount = 0;
      alert('Cupón no válido.');
    }
    this.calculateOrderSummary(); // Recalcular el resumen después de aplicar el cupón
  }

  // Incrementar la cantidad de un producto
  incrementQuantity(product: Products) {
    product.quantity++;
    this.calculateOrderSummary(); // Recalcular el resumen
  }

  // Decrementar la cantidad de un producto
  decrementQuantity(product: Products) {
    if (product.quantity > 1) {
      product.quantity--;
      this.calculateOrderSummary(); // Recalcular el resumen
    }
  }

  // Eliminar un producto por su id
  removeProduct(productId: number) {
    this.products = this.products.filter((product) => product.id !== productId);
    delete this.checkedProducts[productId]; // Eliminar el estado del checkbox
    localStorage.setItem('productsList', JSON.stringify(this.products));
    this.calculateOrderSummary(); // Recalcular el resumen
  }

  // Manejar el cambio en los checkboxes
  onCheckboxChange(productId: number) {
    this.calculateOrderSummary(); // Recalcular el resumen cuando se selecciona/deselecciona un producto
  }
}
