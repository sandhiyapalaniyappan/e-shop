import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userid= '';
  constructor( public dialogRef: MatDialogRef<ProfileComponent>){}

  ngOnInit(): void {
  }
close(){
  this.dialogRef.close();
}
}
