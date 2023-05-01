import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { User } from 'src/app/shared/model/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataService } from 'src/app/shared/services/data.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-orvos',
  templateUrl: './orvos.component.html',
  styleUrls: ['./orvos.component.scss']
})
export class OrvosComponent implements OnInit{
  userList : User [] = [];

  constructor(private data : DataService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.getOrvos();
  }

  getOrvos(){
    this.data.getOrvosUsers().subscribe(res => {
      this.userList = res.map((e : any) => {
        const data = e.payload.doc.data();
        return data;
      })
    }, err => {
      alert("Hiba a megjelenítés közben!");
    })
  }

  openDialog(id: string){
    const dialogConfig = new MatDialogConfig();
    const data = id;
    dialogConfig.data = data; 
    const dialogRef = this.dialog.open(DetailComponent, dialogConfig);
  }


}
