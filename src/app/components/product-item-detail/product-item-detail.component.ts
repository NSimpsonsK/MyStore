import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/modules/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  id: number;
  product:Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.id= parseInt(this.route.snapshot.paramMap.get('id')as string);
    this.product ={
      id: 1,
      name:"",
      price: 0,
      url:"",
      description:""
    }
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
    
  }

}
