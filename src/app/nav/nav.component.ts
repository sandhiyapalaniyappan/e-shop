import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  
  constructor(private matDialog: MatDialog, private router: Router,public authService: AuthService) { }

  ngOnInit(): void {
   
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
