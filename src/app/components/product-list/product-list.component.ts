import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/modules/cartItem';
import { Product } from 'src/app/modules/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( res => {
      this.products = res
    });
  }

  addProduct(cart:cartItem){
    this.cartService.addProduct(cart);
    alert(`${cart.product.name} added to shopping cart with quantity ${cart.quantity}`);
  }
}
