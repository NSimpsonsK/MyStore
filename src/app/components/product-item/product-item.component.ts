import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cartItem } from 'src/app/modules/cartItem';
import { Product } from 'src/app/modules/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() add = new EventEmitter();

  quantity: number;

  constructor(private cartService: CartService) { 
    this.product ={
      id: 1,
      name:"",
      price: 0,
      url:"",
      description:""
    };
    this.quantity = 1;
  }

  ngOnInit(): void {
  }

  addProduct(product:Product){
    this.add.emit(new cartItem(product,this.quantity));
  }

}
