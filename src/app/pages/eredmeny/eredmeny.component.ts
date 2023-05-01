import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Result } from 'src/app/shared/model/result.model';
import { DataService } from 'src/app/shared/services/data.service';
import { CommentComponent } from '../comment/comment.component';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-eredmeny',
  templateUrl: './eredmeny.component.html',
  styleUrls: ['./eredmeny.component.scss']
})
export class EredmenyComponent implements OnInit{
  eredmenyList : Result [] = [];
  sajatList : Result [] = [];
  val : any;
  user : any;

  constructor(private data : DataService, private dialog : MatDialog, private auth : AuthService){}

  openDialog(id : string){
    const dialogConfig = new MatDialogConfig();
    const data = id;
    dialogConfig.data = data; 
    const dialogRef = this.dialog.open(CommentComponent, dialogConfig);
  }

  ngOnInit(): void { 
    this.auth.getCurrentUser().then((data: any) => {
     this.user = this.data.getElement(data?.uid).then((data: any) => {
       this.user = data.data();
      })
    })
    this.getAllResults();
    this.getResults();
   }

  getAllResults(){
    this.data.getAllResults().subscribe(res => {
      this.eredmenyList = res.map((e : any) => {
        const data = e.payload.doc.data();
        return data;
      })
    }, err => {
     // alert("Hiba a megjelenítés közben!");
    })
  }

  getResults(){
    this.auth.getCurrentUser().then((data: any) => {
      this.user = this.data.getElement(data?.uid).then((data: any) => {
        this.user = data.data();
        this.data.getAllResultsByID(this.user.id).subscribe(res => {
          this.sajatList = res.map((e : any) => {
            const data = e.payload.doc.data();
            return data;
          })
        }, err => {
         // alert("Hiba a megjelenítés közben!");
        })
       })
     })
  }

}
