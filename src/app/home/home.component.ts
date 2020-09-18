import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: string;
  productsData: any;
  constructor(private router: Router,public authService: AuthService,private httpClient: HttpClient) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');
    this.httpClient.get<any>("assets/data/products.json").subscribe((data)=>
      this.productsData = data
    )
  }
  /*
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }
*/
}
