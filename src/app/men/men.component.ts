import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  id: string;
  maleData: any;
  constructor(private router: Router,public authService: AuthService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('token');
    this.httpClient.get<any>("assets/data/male.json").subscribe((data)=>
      this.maleData = data
    )
  }

}
