import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from '../details';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
details;
  constructor(private route: ActivatedRoute,private cartService: CartService) { }
  addToCart(details) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(details);
  }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      this.details = Details[+params.get('id')];
 });
  }

}
