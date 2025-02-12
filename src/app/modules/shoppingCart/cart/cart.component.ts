import {Component} from '@angular/core';
import {ImgComponent} from '../../../shared/components/img/img.component';

@Component({
  selector: 'app-cart',
  imports: [
    ImgComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  products = [
    {
      id: 1,
      name: 'Beauty of Joseon Sunscream',
      description: "An Acne-Fighting Toner is a skincare product designed to help reduce blemishes and prevent future breakouts. It works by balancing the skin's pH, controlling excess oil, and removing impurities",
      price: 13,
      quantity:"50ml"
    },
    {
      id: 2,
      name: 'Beauty of Joseon Sunscream',
      description:"A Radiant Boosting Toner is a skincare product formulated to brighten and revitalize the skin. It helps to enhance the skin's natural glow by removing dull, dead skin cells",
      price: 13,
      quantity:"20ml"
    },
    {
      id: 3,
      name: 'Beauty of Joseon Sunscream',
      description: "The Poremizing Quick Clay Stick Mask is an innovative skincare solution designed for on-the-go pore purification. Its quick-drying clay formula effectively draws out impurities, reduces excess oil",
      price: 13,
      quantity:"35ml"
    },
    {
      id: 4,
      name: 'Beauty of Joseon Sunscream',
      description:"The Poremizing Quick Clay Stick Mask is an innovative skincare solution designed for on-the-go pore purification. Its quick-drying clay formula effectively draws out impurities, reduces excess oil",
      price: 13,
      quantity:"80ml"
    },
  ]
}
