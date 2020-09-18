import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  constructor(private cartService: CartService,private router: Router) {
    this.items = this.cartService.getItems();
   }

  ngOnInit(): void {
  }
  onSubmit(){
    window.alert('Thank you for your Feedback!');
    this.router.navigate(['/home']);
  }

}
