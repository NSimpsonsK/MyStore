import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/modules/cartItem';
import { Product } from 'src/app/modules/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: cartItem[] = [];
  total: number = 0;
  name: string = "";
  adress: string= "";
  creditCard!: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getProducts()
    this.calculateTotal();
    console.log(this.cartList)
  }

  quantityChange(){
    this.calculateTotal();
    alert(`Quantity has been updated`);
  }

  removeItem(item:cartItem){
    this.cartService.removeProduct(item);
    this.calculateTotal();
    alert(`Product ${item.product.name} has been removed`);
  }

  calculateTotal(){
    this.total = this.cartService.calculateTotal();
  }

  submit(){

  }

}
