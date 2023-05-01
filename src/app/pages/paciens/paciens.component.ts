import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';
import { User } from 'src/app/shared/model/user.model';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-paciens',
  templateUrl: './paciens.component.html',
  styleUrls: ['./paciens.component.scss']
})
export class PaciensComponent {
  userList : User [] = [];

  constructor(private data : DataService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.getPaciens();
  }

  getPaciens(){
    this.data.getPaciensUsers().subscribe(res => {
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
