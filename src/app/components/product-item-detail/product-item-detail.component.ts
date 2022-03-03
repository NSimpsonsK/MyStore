import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cartItem } from 'src/app/modules/cartItem';
import { Product } from 'src/app/modules/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  id: number;
  product:Product;
  quantity:number;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
    this.id= parseInt(this.route.snapshot.paramMap.get('id')as string);
    this.product ={
      id: 1,
      name:"",
      price: 0,
      url:"",
      description:""
    }
    this.quantity=1;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( res => {
      let products = res;
      products.forEach(p => {
        if (p.id == this.id) {
          this.product = p;
        }
      });
    });
  }

  addProduct(product: Product){
    const cart = new cartItem(product,this.quantity);
    this.cartService.addProduct(cart);
    console.log("TEST")
    alert(`Product ${cart.product.name} added to shopping cart with quantity ${cart.quantity}`);
  }

}
