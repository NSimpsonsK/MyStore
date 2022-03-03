import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name: string = "";
  adress: string = "";
  total: number = 0;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.name = this.cartService.getName();
    this.adress = this.cartService.getAdress();
    this.total = this.cartService.getLastTotal();
  }

}
