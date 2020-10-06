import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  id: string;
  kidsData: any;
  constructor(private router: Router,public authService: AuthService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('token');
    this.httpClient.get<any>("assets/data/kids.json").subscribe((data)=>
      this.kidsData = data
    )
  }

}
