import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cartItem } from '../modules/cartItem';
import { Product } from '../modules/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: cartItem[] = [];
  

  constructor() { }

  getProducts(): cartItem[]{
    return this.cartItems;
  }

  addProduct(cartItem: cartItem): cartItem[]{
    this.cartItems.push(cartItem);
    console.log(this.cartItems);
    return this.cartItems;
  }

  removeProduct(cartItem: cartItem): cartItem[]{
    this.cartItems.forEach((element,index) => {
      if(cartItem==element) this.cartItems.splice(index,1);
    });
    return this.cartItems;
  }

  emptyProducts():cartItem[]{
    this.cartItems=[];
    return this.cartItems;
  }

  removeFromCartIfZero(){
    this.cartItems.forEach(element => {
      if(element.quantity == 0){
        this.removeProduct(element);
      }
    });
  }

  calculateTotal():number{
    this.removeFromCartIfZero();
    let total:number = 0;
    this.cartItems.forEach(c => {
      total+=(c.product.price * c.quantity);
    });
    return total;
  }
}
