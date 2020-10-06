import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  id: string;
  femaleData: any;
  constructor(private router: Router,public authService: AuthService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('token');
    this.httpClient.get<any>("assets/data/female.json").subscribe((data)=>
      this.femaleData = data
    )
  }

}
