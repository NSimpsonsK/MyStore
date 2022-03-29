import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cartItem } from '../modules/cartItem';
import { Product } from '../modules/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: cartItem[] = [];
  name: string = "";
  adress: string = "";
  lastTotal: number = 0;
  

  constructor() { }

  getProducts(): cartItem[]{
    return this.cartItems;
  }

  setAdress(adress: string){
    this.adress = adress;
  }

  getAdress(): string{
    return this.adress;
  }

  setName(name: string){
    this.name = name;
  }

  getName(): string{
    return this.name;
  }

  getLastTotal(): number{
    return this.lastTotal;
  }

  addProduct(cartItem: cartItem): cartItem[]{
    let found = this.products.find(p => p.id == product.id);
    if(found){
      found.quantity +=1;
    }else{
      this.cartItems.push(cartItem);
    }
    this.calculateTotal();
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
    this.lastTotal = 0;
    this.cartItems.forEach(c => {
      this.lastTotal+=(c.product.price * c.quantity);
    });
    return this.lastTotal;
  }
}
