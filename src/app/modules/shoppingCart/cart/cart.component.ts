import {Component} from '@angular/core';
import {Products} from '../../../core/interfaces/products';
import {FormsModule} from '@angular/forms';
import Swal from 'sweetalert2'
import {Router} from '@angular/router';


@Component({
  selector: 'app-cart',
  imports: [
    FormsModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  // @ts-ignore
  products:Products[] = [];

  checkedProducts: { [key: number]: boolean } = {}; // Estado de los checkboxes
  orderSummary: any = {}; // Resumen de la orden
  couponCode: string = ''; // Código de cupón ingresado
  validCoupons: string[] = ['PRETTY10', 'LUXURY', 'HUNGRY']; // Cupones válidos
  discount: number = 0; // Descuento aplicado
  shippingCost: number = 20; // Costo de envío fijo para Ecuador

  constructor(
    private router: Router,
  ) {
  }

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
        case 'LUXURY':
          this.discount = 5;
          break;
        case 'PRETTY10':
          this.discount = 10;
          break;
        case 'HUNGRY':
          this.discount = 15;
          break;
        default:
          this.discount = 0;
      }
      Swal.fire({
        icon: "success",
        title: "Great",
        text: "Coupon valid!",
      });
    } else {
      this.discount = 0;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Coupon not valid!",
      });
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
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Successfully removed"
    });
  }

  // Manejar el cambio en los checkboxes
  onCheckboxChange(productId: number) {
    this.calculateOrderSummary(); // Recalcular el resumen cuando se selecciona/deselecciona un producto
  }

  chekout(){
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Checkout successfully Thanks"
    });
    this.router.navigate(['/products']);
  }
}
