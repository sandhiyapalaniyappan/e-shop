import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  constructor(private matDialog: MatDialog, private router: Router,public authService: AuthService,private cartService: CartService) {
    this.items = this.cartService.getItems();
   }

  ngOnInit(): void {
  }
  onSubmit(){
    window.alert('Thank you for your Feedback!');
    this.router.navigate(['/home']);
  }
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  openDialog() {
    //alert('clicked');
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(ProfileComponent,{
      width: '30%',
      height:'39%'});
  }

}
